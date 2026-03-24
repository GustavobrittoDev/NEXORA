"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight } from "lucide-react";

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

const fieldClassName =
  "h-[3.25rem] w-full rounded-[1.25rem] border border-white/10 bg-white/[0.05] px-4 text-base text-white outline-none transition duration-300 placeholder:text-slate-300/36 focus:border-brand-strong/55 focus:bg-white/[0.08] focus:shadow-[0_0_0_4px_rgba(97,166,255,0.12)]";

export function ContactForm({ email }: ContactFormProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Briefing inicial | ${form.company || form.name}`,
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
    setFeedback("Seu e-mail será aberto com o briefing inicial já estruturado.");
  };

  return (
    <div className="panel-strong rounded-[2.4rem] p-6 sm:p-7">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-200/62">
          Briefing inicial
        </p>
        <h3 className="mt-3 text-3xl font-semibold leading-tight text-white">
          Descreva o contexto do projeto com clareza.
        </h3>
        <p className="mt-3 max-w-xl text-base leading-7 text-muted">
          Use este formulário para abrir um e-mail já estruturado e adiantar
          escopo, objetivos, referências e necessidades do negócio.
        </p>
      </div>

      <form className="grid gap-3.5" onSubmit={handleSubmit}>
        <div className="grid gap-3.5 sm:grid-cols-2">
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
              className={fieldClassName}
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
              className={fieldClassName}
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
            className={fieldClassName}
            placeholder="voce@empresa.com"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-100/84">
            Mensagem
          </span>
          <textarea
            required
            rows={6}
            value={form.message}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                message: event.target.value,
              }))
            }
            className="w-full rounded-[1.45rem] border border-white/10 bg-white/[0.05] px-4 py-4 text-base text-white outline-none transition duration-300 placeholder:text-slate-300/36 focus:border-brand-strong/55 focus:bg-white/[0.08] focus:shadow-[0_0_0_4px_rgba(97,166,255,0.12)]"
            placeholder="Explique o que sua marca precisa comunicar, qual estrutura você imagina e o que precisa acontecer depois do lançamento."
          />
        </label>

        <div className="mt-1 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            className="inline-flex h-[3.125rem] items-center justify-center gap-2 rounded-full border border-white/10 bg-[linear-gradient(135deg,rgba(59,130,246,0.96),rgba(124,58,237,0.92))] px-6 text-sm font-semibold text-white shadow-[0_18px_40px_-20px_rgba(59,130,246,0.75)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-24px_rgba(124,58,237,0.72)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-strong/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#040713]"
          >
            Abrir briefing no e-mail
            <ArrowUpRight className="h-4 w-4" />
          </button>

          <p className="max-w-xs text-sm leading-6 text-muted">
            Ideal para iniciar a conversa com contexto mais completo e direção
            mais precisa.
          </p>
        </div>

        {feedback ? (
          <p className="rounded-[1.35rem] border border-brand/18 bg-brand/[0.08] px-4 py-3 text-sm leading-6 text-slate-100/90">
            {feedback}
          </p>
        ) : null}
      </form>
    </div>
  );
}
