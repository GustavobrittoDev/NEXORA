export const CONTACT_FIELD_LIMITS = {
  name: 80,
  company: 100,
  phone: 24,
  email: 254,
  message: 1600,
} as const;

export const CONTACT_FIELD_NAMES = [
  "name",
  "company",
  "phone",
  "email",
  "message",
  "website",
] as const;

export type ContactFieldName = (typeof CONTACT_FIELD_NAMES)[number];

export type ContactSubmissionInput = Record<ContactFieldName, string>;

export type ContactFieldErrors = Partial<
  Record<Exclude<ContactFieldName, "website">, string>
>;

export type ContactValidationResult =
  | {
      success: true;
      data: ContactSubmissionInput;
    }
  | {
      success: false;
      fieldErrors: ContactFieldErrors;
      formError: string;
    };

const DANGEROUS_INPUT_PATTERN =
  /<[^>]*>|javascript:|data:text\/html|vbscript:|on[a-z]+\s*=|srcdoc=|document\.cookie|window\.location|%3c|%3e|&#x?0*3c;|iframe/iu;
const URL_PATTERN = /(https?:\/\/|www\.)/giu;
const EMAIL_PATTERN =
  /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/i;

const sanitizeSingleLine = (value: unknown) =>
  String(value ?? "")
    .normalize("NFKC")
    .replace(/[\u0000-\u001F\u007F]+/g, " ")
    .replace(/[<>`{}[\]\\]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const sanitizeMultiline = (value: unknown) =>
  String(value ?? "")
    .normalize("NFKC")
    .replace(/\r\n?/g, "\n")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]+/g, "")
    .replace(/[<>`]/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

const sanitizePhone = (value: unknown) =>
  sanitizeSingleLine(value).replace(/[^+\d()\-\s]/g, "").trim();

const hasSuspiciousPattern = (value: string) =>
  value.length > 0 && DANGEROUS_INPUT_PATTERN.test(value);

const hasTooManyLinks = (value: string) => {
  const matches = value.match(URL_PATTERN);
  return (matches?.length ?? 0) > 2;
};

const clampLength = (value: string, maxLength: number) =>
  value.length > maxLength ? value.slice(0, maxLength) : value;

export function getEmptyContactSubmission(): ContactSubmissionInput {
  return {
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
    website: "",
  };
}

export function buildContactEmailSubject(data: ContactSubmissionInput) {
  return `Briefing inicial | ${data.company || data.name}`;
}

export function buildContactEmailBody(data: ContactSubmissionInput) {
  return [
    `Nome: ${data.name}`,
    `Empresa: ${data.company || "Não informado"}`,
    `Telefone: ${data.phone || "Não informado"}`,
    `E-mail: ${data.email}`,
    "",
    "Mensagem:",
    data.message,
  ].join("\n");
}

export function validateContactSubmission(
  input: unknown,
): ContactValidationResult {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return {
      success: false,
      fieldErrors: {},
      formError: "Não foi possível processar o briefing.",
    };
  }

  const record = input as Partial<Record<ContactFieldName, unknown>>;
  const keys = Object.keys(record);
  const unexpectedKeys = keys.filter(
    (key) => !CONTACT_FIELD_NAMES.includes(key as ContactFieldName),
  );

  if (unexpectedKeys.length > 0) {
    return {
      success: false,
      fieldErrors: {},
      formError: "Não foi possível processar o briefing.",
    };
  }

  const normalized: ContactSubmissionInput = {
    name: clampLength(sanitizeSingleLine(record.name), CONTACT_FIELD_LIMITS.name),
    company: clampLength(
      sanitizeSingleLine(record.company),
      CONTACT_FIELD_LIMITS.company,
    ),
    phone: clampLength(sanitizePhone(record.phone), CONTACT_FIELD_LIMITS.phone),
    email: clampLength(
      sanitizeSingleLine(record.email).toLowerCase(),
      CONTACT_FIELD_LIMITS.email,
    ),
    message: clampLength(
      sanitizeMultiline(record.message),
      CONTACT_FIELD_LIMITS.message,
    ),
    website: sanitizeSingleLine(record.website),
  };

  const fieldErrors: ContactFieldErrors = {};

  if (!normalized.name) {
    fieldErrors.name = "Informe seu nome.";
  } else if (normalized.name.length < 2 || !/\p{L}/u.test(normalized.name)) {
    fieldErrors.name = "Informe um nome válido.";
  } else if (hasSuspiciousPattern(normalized.name)) {
    fieldErrors.name = "Revise o nome informado.";
  }

  if (normalized.company) {
    if (normalized.company.length < 2) {
      fieldErrors.company = "Informe um nome de empresa válido.";
    } else if (hasSuspiciousPattern(normalized.company)) {
      fieldErrors.company = "Revise o nome da empresa.";
    }
  }

  if (normalized.phone) {
    const phoneDigits = normalized.phone.replace(/\D/g, "");

    if (phoneDigits.length < 8 || phoneDigits.length > 15) {
      fieldErrors.phone = "Informe um telefone válido.";
    } else if (hasSuspiciousPattern(normalized.phone)) {
      fieldErrors.phone = "Revise o telefone informado.";
    }
  }

  if (!normalized.email) {
    fieldErrors.email = "Informe seu e-mail.";
  } else if (!EMAIL_PATTERN.test(normalized.email)) {
    fieldErrors.email = "Informe um e-mail válido.";
  } else if (hasSuspiciousPattern(normalized.email)) {
    fieldErrors.email = "Revise o e-mail informado.";
  }

  if (!normalized.message) {
    fieldErrors.message = "Descreva o contexto do projeto.";
  } else if (normalized.message.length < 20) {
    fieldErrors.message = "A mensagem precisa de um pouco mais de contexto.";
  } else if (
    hasSuspiciousPattern(normalized.message) ||
    hasTooManyLinks(normalized.message)
  ) {
    fieldErrors.message = "Revise a mensagem antes de enviar.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      success: false,
      fieldErrors,
      formError: "Revise os dados informados e tente novamente.",
    };
  }

  return {
    success: true,
    data: normalized,
  };
}
