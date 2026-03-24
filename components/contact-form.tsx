"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";

type ContactFormProps = {
  email: string;
};

type FormState = {
  name: string;
  company: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  message: "",
};

export function ContactForm({ email }: ContactFormProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Solicitação de projeto | ${form.company || form.name}`,
    );

    const body = encodeURIComponent(
      [
        `Nome: ${form.name}`,
        `Empresa: ${form.company || "Não informado"}`,
        `E-mail: ${form.email}`,
        "",
        "Mensagem:",
        form.message,
      ].join("\n"),
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setFeedback(
      "Seu aplicativo de e-mail será aberto com a mensagem pronta para envio.",
    );
  };

  return (
    <div className="panel-strong rounded-[2.2rem] p-6 sm:p-7">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.26em] text-slate-200/68">
          Formulário de contato
        </p>
        <h3 className="mt-3 text-3xl font-semibold text-white">
          Conte um pouco sobre o seu projeto.
        </h3>
        <p className="mt-2 max-w-xl text-base leading-7 text-muted">
          Preencha os dados abaixo para abrir uma mensagem estruturada no seu
          e-mail e adiantar o briefing com a Nexora.
        </p>
      </div>

      <form className="grid gap-3" onSubmit={handleSubmit}>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-100/84">
              Nome
            </span>
            <input
              required
              type="text"
              value={form.name}
              onChange={(event) =>
                setForm((current) => ({ ...current, name: event.target.value }))
              }
              className="h-13 w-full rounded-2xl border border-white/10 bg-white/6 px-4 text-base text-white outline-none transition focus:border-brand/60 focus:bg-white/8"
              placeholder="Seu nome"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-100/84">
              Empresa
            </span>
            <input
              type="text"
              value={form.company}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  company: event.target.value,
                }))
              }
              className="h-13 w-full rounded-2xl border border-white/10 bg-white/6 px-4 text-base text-white outline-none transition focus:border-brand/60 focus:bg-white/8"
              placeholder="Nome da empresa"
            />
          </label>
        </div>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-100/84">
            E-mail
          </span>
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) =>
              setForm((current) => ({ ...current, email: event.target.value }))
            }
            className="h-13 w-full rounded-2xl border border-white/10 bg-white/6 px-4 text-base text-white outline-none transition focus:border-brand/60 focus:bg-white/8"
            placeholder="voce@empresa.com"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-100/84">
            Mensagem
          </span>
          <textarea
            required
            rows={5}
            value={form.message}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                message: event.target.value,
              }))
            }
            className="w-full rounded-[1.6rem] border border-white/10 bg-white/6 px-4 py-4 text-base text-white outline-none transition focus:border-brand/60 focus:bg-white/8"
            placeholder="Descreva o contexto, os objetivos e o tipo de solução que você quer desenvolver."
          />
        </label>

        <div className="mt-1 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand to-accent px-6 text-sm font-semibold text-white shadow-[0_18px_40px_-20px_rgba(59,130,246,0.9)] transition hover:scale-[1.01] hover:shadow-[0_24px_50px_-22px_rgba(124,58,237,0.85)]"
          >
            Enviar mensagem
            <ArrowRight className="h-4 w-4" />
          </button>

          <p className="text-sm leading-6 text-muted">
            Resposta inicial com foco em direcionamento, escopo e próximos
            passos.
          </p>
        </div>

        {feedback ? (
          <p className="rounded-2xl border border-brand/20 bg-brand/10 px-4 py-3 text-sm leading-6 text-slate-100/90">
            {feedback}
          </p>
        ) : null}
      </form>
    </div>
  );
}
