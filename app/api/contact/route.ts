import { NextRequest, NextResponse } from "next/server";
import {
  buildMailtoUrl,
  buildWhatsAppUrl,
} from "@/lib/contact-links";
import {
  buildContactEmailBody,
  buildContactEmailSubject,
  CONTACT_FIELD_NAMES,
  validateContactSubmission,
} from "@/lib/contact-validation";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import { serverContactConfig } from "@/lib/server/contact-config";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ALLOW_HEADER = "POST, OPTIONS";
const JSON_CONTENT_TYPE = "application/json";

const buildResponseHeaders = (
  extraHeaders?: Record<string, string>,
) =>
  new Headers({
    Allow: ALLOW_HEADER,
    "Cache-Control": "no-store, max-age=0",
    "X-Robots-Tag": "noindex, nofollow",
    Vary: "Origin",
    ...extraHeaders,
  });

const jsonResponse = (
  body: Record<string, unknown>,
  status: number,
  extraHeaders?: Record<string, string>,
) =>
  NextResponse.json(body, {
    status,
    headers: buildResponseHeaders(extraHeaders),
  });

const isPlainObject = (
  value: unknown,
): value is Record<string, unknown> =>
  !!value && typeof value === "object" && !Array.isArray(value);

const hasUnexpectedKeys = (payload: Record<string, unknown>) =>
  Object.keys(payload).some(
    (key) =>
      !CONTACT_FIELD_NAMES.includes(
        key as (typeof CONTACT_FIELD_NAMES)[number],
      ),
  );

const hasExpectedContentType = (request: NextRequest) =>
  request.headers
    .get("content-type")
    ?.toLowerCase()
    .startsWith(JSON_CONTENT_TYPE) ?? false;

const getAllowedOrigins = (request: NextRequest) => {
  const allowedOrigins = new Set<string>([request.nextUrl.origin]);
  const forwardedHost =
    request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  const forwardedProto =
    request.headers.get("x-forwarded-proto") ??
    request.nextUrl.protocol.replace(/:$/, "");

  if (forwardedHost && forwardedProto) {
    try {
      allowedOrigins.add(new URL(`${forwardedProto}://${forwardedHost}`).origin);
    } catch {
      return allowedOrigins;
    }
  }

  return allowedOrigins;
};

const matchesAllowedOrigin = (
  value: string,
  allowedOrigins: Set<string>,
) => {
  try {
    return allowedOrigins.has(new URL(value).origin);
  } catch {
    return false;
  }
};

const isAllowedOrigin = (request: NextRequest) => {
  const allowedOrigins = getAllowedOrigins(request);
  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");
  const fetchSite = request.headers.get("sec-fetch-site");

  if (fetchSite && !["same-origin", "same-site", "none"].includes(fetchSite)) {
    return false;
  }

  if (origin) {
    return matchesAllowedOrigin(origin, allowedOrigins);
  }

  if (referer) {
    return matchesAllowedOrigin(referer, allowedOrigins);
  }

  if (fetchSite === "same-origin" || fetchSite === "none") {
    return true;
  }

  return process.env.NODE_ENV !== "production";
};

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: buildResponseHeaders(),
  });
}

export async function POST(request: NextRequest) {
  if (!hasExpectedContentType(request)) {
    return jsonResponse(
      {
        ok: false,
        message: "Não foi possível processar o briefing.",
      },
      415,
    );
  }

  if (!isAllowedOrigin(request)) {
    return jsonResponse(
      {
        ok: false,
        message: "Não foi possível processar o briefing.",
      },
      403,
    );
  }

  const contentLength = Number.parseInt(
    request.headers.get("content-length") ?? "",
    10,
  );

  if (
    Number.isFinite(contentLength) &&
    contentLength > serverContactConfig.maxBodySizeBytes
  ) {
    return jsonResponse(
      {
        ok: false,
        message: "O briefing enviado está acima do limite permitido.",
      },
      413,
    );
  }

  const rateLimit = checkRateLimit(
    `contact:${getClientIp(request.headers)}`,
    {
      windowMs: serverContactConfig.rateLimitWindowMs,
      maxRequests: serverContactConfig.rateLimitMaxRequests,
      cooldownMs: serverContactConfig.cooldownMs,
    },
  );

  if (!rateLimit.allowed) {
    return jsonResponse(
      {
        ok: false,
        message: "Aguarde um pouco antes de enviar outro briefing.",
      },
      429,
      {
        "Retry-After": String(rateLimit.retryAfterSeconds),
      },
    );
  }

  let rawBody = "";

  try {
    rawBody = await request.text();
  } catch {
    return jsonResponse(
      {
        ok: false,
        message: "Não foi possível processar o briefing.",
      },
      400,
    );
  }

  if (
    !rawBody ||
    Buffer.byteLength(rawBody, "utf8") > serverContactConfig.maxBodySizeBytes
  ) {
    return jsonResponse(
      {
        ok: false,
        message: "Não foi possível processar o briefing.",
      },
      400,
    );
  }

  let payload: unknown;

  try {
    payload = JSON.parse(rawBody);
  } catch {
    return jsonResponse(
      {
        ok: false,
        message: "Não foi possível processar o briefing.",
      },
      400,
    );
  }

  if (!isPlainObject(payload) || hasUnexpectedKeys(payload)) {
    return jsonResponse(
      {
        ok: false,
        message: "Não foi possível processar o briefing.",
      },
      400,
    );
  }

  const validation = validateContactSubmission(payload);

  if (!validation.success) {
    return jsonResponse(
      {
        ok: false,
        message: validation.formError,
        fieldErrors: validation.fieldErrors,
      },
      422,
    );
  }

  if (validation.data.website) {
    return jsonResponse(
      {
        ok: true,
        message: "Recebemos o briefing inicial.",
      },
      202,
    );
  }

  const mailtoUrl = buildMailtoUrl(serverContactConfig.recipientEmail, {
    subject: buildContactEmailSubject(validation.data),
    body: buildContactEmailBody(validation.data),
  });

  return jsonResponse(
    {
      ok: true,
      message:
        "Briefing validado com sucesso. Abra o seu e-mail para revisar e enviar.",
      mailtoUrl,
      whatsappUrl: buildWhatsAppUrl(
        serverContactConfig.recipientWhatsApp,
        buildContactEmailBody(validation.data),
      ),
    },
    200,
  );
}
