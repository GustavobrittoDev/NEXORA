"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import {
  CONTACT_FIELD_LIMITS,
  ContactFieldErrors,
  ContactFieldName,
  ContactSubmissionInput,
  getEmptyContactSubmission,
  validateContactSubmission,
} from "@/lib/contact-validation";

type SubmitFeedback =
  | {
      tone: "success";
      message: string;
    }
  | {
      tone: "error";
      message: string;
    }
  | null;

type ContactApiResponse = {
  ok?: boolean;
  message?: string;
  fieldErrors?: ContactFieldErrors;
  mailtoUrl?: string;
};

const initialState = getEmptyContactSubmission();

const fieldClassName =
  "h-12 w-full rounded-[1.1rem] border border-white/10 bg-white/[0.05] px-3.5 text-[0.98rem] text-white outline-none transition duration-300 placeholder:text-slate-300/36 focus:border-brand-strong/55 focus:bg-white/[0.08] focus:shadow-[0_0_0_4px_rgba(97,166,255,0.12)] sm:h-[3.25rem] sm:rounded-[1.25rem] sm:px-4 sm:text-base";

const fieldErrorClassName =
  "border-rose-400/40 bg-rose-500/[0.08] focus:border-rose-300/60 focus:shadow-[0_0_0_4px_rgba(244,63,94,0.12)]";

function getFieldId(field: ContactFieldName) {
  return `contact-${field}`;
}

export function ContactForm() {
  const [form, setForm] = useState<ContactSubmissionInput>(initialState);
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});
  const [feedback, setFeedback] = useState<SubmitFeedback>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [preparedMailtoUrl, setPreparedMailtoUrl] = useState<string | null>(
    null,
  );

  const updateField = (field: ContactFieldName, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));

    if (field !== "website") {
      setFieldErrors((current) => ({ ...current, [field]: undefined }));
    }

    setFeedback(null);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback(null);
    setPreparedMailtoUrl(null);

    const clientValidation = validateContactSubmission(form);

    if (!clientValidation.success) {
      setFieldErrors(clientValidation.fieldErrors);
      setFeedback({
        tone: "error",
        message: clientValidation.formError,
      });
      return;
    }

    setForm(clientValidation.data);
    setFieldErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(clientValidation.data),
      });

      const result = (await response.json().catch(() => null)) as
        | ContactApiResponse
        | null;

      if (!response.ok || !result?.ok) {
        setFieldErrors(result?.fieldErrors ?? {});
        setFeedback({
          tone: "error",
          message:
            result?.message ??
            "Não foi possível validar o briefing agora. Tente novamente em instantes.",
        });
        return;
      }

      setFeedback({
        tone: "success",
        message:
          result.message ??
          "Briefing validado com sucesso. Abra o e-mail preparado para revisar e enviar.",
      });

      if (result.mailtoUrl) {
        setPreparedMailtoUrl(result.mailtoUrl);
        window.location.assign(result.mailtoUrl);
      }
    } catch {
      setFeedback({
        tone: "error",
        message:
          "Não foi possível validar o briefing agora. Tente novamente em instantes.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderFieldError = (field: Exclude<ContactFieldName, "website">) => {
    const message = fieldErrors[field];

    if (!message) {
      return null;
    }

    return (
      <p
        id={`${getFieldId(field)}-error`}
        className="mt-2 text-sm leading-6 text-rose-200/92"
      >
        {message}
      </p>
    );
  };

  return (
    <div className="panel-strong rounded-[2rem] p-5 sm:rounded-[2.4rem] sm:p-7">
      <div className="mb-5 sm:mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-200/62">
          Briefing inicial
        </p>
        <h3 className="mt-3 text-[1.9rem] font-semibold leading-[1.08] text-white sm:text-3xl sm:leading-tight">
          Descreva o contexto do projeto com clareza.
        </h3>
        <p className="mt-3 max-w-xl text-[0.98rem] leading-7 text-muted sm:text-base">
          O briefing passa por validação antes de abrir o e-mail, reduz abuso
          automatizado e mantém o contato mais limpo desde o primeiro passo.
        </p>
      </div>

      <form className="grid gap-4 sm:gap-3.5" noValidate onSubmit={handleSubmit}>
        <div className="sr-only" aria-hidden="true">
          <label htmlFor={getFieldId("website")}>Site</label>
          <input
            id={getFieldId("website")}
            autoComplete="off"
            tabIndex={-1}
            type="text"
            value={form.website}
            onChange={(event) => updateField("website", event.target.value)}
          />
        </div>

        <div className="grid gap-3.5 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-[0.92rem] font-medium text-slate-100/84 sm:text-sm">
              Nome
            </span>
            <input
              id={getFieldId("name")}
              autoComplete="name"
              maxLength={CONTACT_FIELD_LIMITS.name}
              type="text"
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
              aria-invalid={Boolean(fieldErrors.name)}
              aria-describedby={
                fieldErrors.name ? `${getFieldId("name")}-error` : undefined
              }
              className={[
                fieldClassName,
                fieldErrors.name ? fieldErrorClassName : "",
              ]
                .filter(Boolean)
                .join(" ")}
              placeholder="Seu nome"
            />
            {renderFieldError("name")}
          </label>

          <label className="block">
            <span className="mb-2 block text-[0.92rem] font-medium text-slate-100/84 sm:text-sm">
              Empresa
            </span>
            <input
              id={getFieldId("company")}
              autoComplete="organization"
              maxLength={CONTACT_FIELD_LIMITS.company}
              type="text"
              value={form.company}
              onChange={(event) => updateField("company", event.target.value)}
              aria-invalid={Boolean(fieldErrors.company)}
              aria-describedby={
                fieldErrors.company
                  ? `${getFieldId("company")}-error`
                  : undefined
              }
              className={[
                fieldClassName,
                fieldErrors.company ? fieldErrorClassName : "",
              ]
                .filter(Boolean)
                .join(" ")}
              placeholder="Nome da empresa"
            />
            {renderFieldError("company")}
          </label>
        </div>

        <div className="grid gap-3.5 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-[0.92rem] font-medium text-slate-100/84 sm:text-sm">
              E-mail
            </span>
            <input
              id={getFieldId("email")}
              autoComplete="email"
              inputMode="email"
              maxLength={CONTACT_FIELD_LIMITS.email}
              type="email"
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              aria-invalid={Boolean(fieldErrors.email)}
              aria-describedby={
                fieldErrors.email ? `${getFieldId("email")}-error` : undefined
              }
              className={[
                fieldClassName,
                fieldErrors.email ? fieldErrorClassName : "",
              ]
                .filter(Boolean)
                .join(" ")}
              placeholder="voce@empresa.com"
            />
            {renderFieldError("email")}
          </label>

          <label className="block">
            <span className="mb-2 block text-[0.92rem] font-medium text-slate-100/84 sm:text-sm">
              Telefone
            </span>
            <input
              id={getFieldId("phone")}
              autoComplete="tel"
              inputMode="tel"
              maxLength={CONTACT_FIELD_LIMITS.phone}
              type="tel"
              value={form.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              aria-invalid={Boolean(fieldErrors.phone)}
              aria-describedby={
                fieldErrors.phone ? `${getFieldId("phone")}-error` : undefined
              }
              className={[
                fieldClassName,
                fieldErrors.phone ? fieldErrorClassName : "",
              ]
                .filter(Boolean)
                .join(" ")}
              placeholder="(11) 99999-9999"
            />
            {renderFieldError("phone")}
          </label>
        </div>

        <label className="block">
          <span className="mb-2 block text-[0.92rem] font-medium text-slate-100/84 sm:text-sm">
            Mensagem
          </span>
          <textarea
            id={getFieldId("message")}
            rows={6}
            maxLength={CONTACT_FIELD_LIMITS.message}
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            aria-invalid={Boolean(fieldErrors.message)}
            aria-describedby={
              fieldErrors.message ? `${getFieldId("message")}-error` : undefined
            }
            className={[
              "w-full rounded-[1.25rem] border border-white/10 bg-white/[0.05] px-3.5 py-3.5 text-[0.98rem] text-white outline-none transition duration-300 placeholder:text-slate-300/36 focus:border-brand-strong/55 focus:bg-white/[0.08] focus:shadow-[0_0_0_4px_rgba(97,166,255,0.12)] sm:rounded-[1.45rem] sm:px-4 sm:py-4 sm:text-base",
              fieldErrors.message ? fieldErrorClassName : "",
            ]
              .filter(Boolean)
              .join(" ")}
            placeholder="Explique o que sua marca precisa comunicar, qual estrutura você imagina e o que precisa acontecer depois do lançamento."
          />
          {renderFieldError("message")}
        </label>

        <div className="mt-1 grid gap-3 sm:flex sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex h-[3.125rem] w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-[linear-gradient(135deg,rgba(59,130,246,0.96),rgba(124,58,237,0.92))] px-6 text-sm font-semibold text-white shadow-[0_18px_40px_-20px_rgba(59,130,246,0.75)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-24px_rgba(124,58,237,0.72)] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-strong/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#040713] sm:w-auto"
          >
            {isSubmitting ? "Validando briefing..." : "Validar e abrir e-mail"}
            <ArrowUpRight className="h-4 w-4" />
          </button>

          <div className="flex max-w-xs items-start gap-2.5 text-[0.92rem] leading-6 text-muted sm:text-sm">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" />
            <p>
              Abertura protegida com validação, sanitização, honeypot e limite
              de tentativas.
            </p>
          </div>
        </div>

        {feedback ? (
          <div
            role={feedback.tone === "error" ? "alert" : "status"}
            className={[
              "rounded-[1.35rem] border px-4 py-3 text-sm leading-6",
              feedback.tone === "success"
                ? "border-brand/18 bg-brand/[0.08] text-slate-100/90"
                : "border-rose-400/22 bg-rose-500/[0.08] text-rose-100/92",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {feedback.message}
          </div>
        ) : null}

        {preparedMailtoUrl ? (
          <a
            href={preparedMailtoUrl}
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-strong transition hover:text-white"
          >
            Abrir e-mail preparado manualmente
            <ArrowUpRight className="h-4 w-4" />
          </a>
        ) : null}
      </form>
    </div>
  );
}
