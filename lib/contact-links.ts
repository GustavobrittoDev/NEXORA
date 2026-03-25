const EMAIL_PATTERN =
  /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/i;

const sanitizeQueryText = (value: string) =>
  value.replace(/[\u0000-\u001F\u007F]+/g, " ").trim();

const sanitizeMultilineQueryText = (value: string) =>
  value
    .replace(/\r\n?/g, "\n")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]+/g, " ")
    .trim();

export function normalizeEmailAddress(value: string) {
  const normalized = sanitizeQueryText(value).toLowerCase();

  if (!EMAIL_PATTERN.test(normalized)) {
    throw new Error("Invalid contact email.");
  }

  return normalized;
}

export function normalizeWhatsAppNumber(value: string) {
  const digits = value.replace(/\D/g, "");

  if (digits.length < 10 || digits.length > 15) {
    throw new Error("Invalid WhatsApp number.");
  }

  return digits;
}

export function buildMailtoUrl(
  recipient: string,
  payload?: {
    subject?: string;
    body?: string;
  },
) {
  const query = new URLSearchParams();

  if (payload?.subject) {
    query.set("subject", sanitizeQueryText(payload.subject));
  }

  if (payload?.body) {
    query.set("body", sanitizeMultilineQueryText(payload.body));
  }

  const queryString = query.toString();

  return `mailto:${normalizeEmailAddress(recipient)}${
    queryString ? `?${queryString}` : ""
  }`;
}

export function buildWhatsAppUrl(number: string, message: string) {
  return `https://wa.me/${normalizeWhatsAppNumber(number)}?text=${encodeURIComponent(
    sanitizeMultilineQueryText(message),
  )}`;
}
