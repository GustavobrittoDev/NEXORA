import {
  buildMailtoUrl,
  buildWhatsAppUrl,
  normalizeEmailAddress,
  normalizeWhatsAppNumber,
} from "@/lib/contact-links";

const PUBLIC_CONTACT_EMAIL = normalizeEmailAddress("contato@nexora.com.br");
const PUBLIC_WHATSAPP_NUMBER = normalizeWhatsAppNumber("5500000000000");
const PUBLIC_WHATSAPP_MESSAGE =
  "Olá, quero conversar sobre um projeto digital com a Nexora.";

export const publicContact = {
  email: PUBLIC_CONTACT_EMAIL,
  whatsappNumber: PUBLIC_WHATSAPP_NUMBER,
  whatsappMessage: PUBLIC_WHATSAPP_MESSAGE,
} as const;

export const publicWhatsappUrl = buildWhatsAppUrl(
  publicContact.whatsappNumber,
  publicContact.whatsappMessage,
);

export const publicMailtoUrl = buildMailtoUrl(publicContact.email, {
  subject: "Projeto digital com a Nexora",
});
