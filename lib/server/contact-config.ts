import "server-only";

import { publicContact } from "@/lib/contact-config";
import {
  normalizeEmailAddress,
  normalizeWhatsAppNumber,
} from "@/lib/contact-links";

const readOptionalEnv = (name: string) => {
  const value = process.env[name]?.trim();
  return value ? value : undefined;
};

const readOptionalEmail = (name: string) => {
  const value = readOptionalEnv(name);

  if (!value) {
    return undefined;
  }

  try {
    return normalizeEmailAddress(value);
  } catch {
    return undefined;
  }
};

const readOptionalWhatsApp = (name: string) => {
  const value = readOptionalEnv(name);

  if (!value) {
    return undefined;
  }

  try {
    return normalizeWhatsAppNumber(value);
  } catch {
    return undefined;
  }
};

const readOptionalPositiveInt = (
  name: string,
  fallback: number,
  min: number,
  max: number,
) => {
  const value = readOptionalEnv(name);
  const parsed = value ? Number.parseInt(value, 10) : Number.NaN;

  if (!Number.isFinite(parsed)) {
    return fallback;
  }

  return Math.min(max, Math.max(min, parsed));
};

export const serverContactConfig = {
  recipientEmail:
    readOptionalEmail("CONTACT_RECIPIENT_EMAIL") ?? publicContact.email,
  recipientWhatsApp:
    readOptionalWhatsApp("CONTACT_RECIPIENT_WHATSAPP") ??
    publicContact.whatsappNumber,
  rateLimitMaxRequests: readOptionalPositiveInt(
    "CONTACT_RATE_LIMIT_MAX",
    5,
    1,
    20,
  ),
  rateLimitWindowMs: readOptionalPositiveInt(
    "CONTACT_RATE_LIMIT_WINDOW_MS",
    10 * 60 * 1000,
    30_000,
    60 * 60 * 1000,
  ),
  cooldownMs: readOptionalPositiveInt(
    "CONTACT_COOLDOWN_MS",
    30_000,
    5_000,
    10 * 60 * 1000,
  ),
  maxBodySizeBytes: readOptionalPositiveInt(
    "CONTACT_MAX_BODY_SIZE_BYTES",
    8_192,
    1_024,
    32_768,
  ),
} as const;
