import { ArrowUpRight, Gauge, Sparkles, Workflow } from "lucide-react";

const structureRows = [
  "Clareza de posicionamento desde a primeira dobra",
  "Arquitetura visual pensada para leitura e decisão",
  "Experiência construída para evoluir com o negócio",
];

const insightItems = [
  {
    icon: Sparkles,
    title: "Leitura premium",
    description: "Direção visual limpa, precisa e madura.",
  },
  {
    icon: Workflow,
    title: "Estrutura sob medida",
    description: "Narrativa, fluxo e função organizados com intenção.",
  },
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[36rem] lg:ml-auto">
      <div className="pointer-events-none absolute -left-8 top-10 h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(97,166,255,0.16),transparent_72%)] blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute -right-10 top-6 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.12),transparent_72%)] blur-3xl animate-float-delay" />

      <div className="panel-strong relative overflow-hidden rounded-[2.8rem] p-4 shadow-[0_40px_120px_-58px_rgba(3,7,18,0.98)] sm:p-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(59,130,246,0.05),transparent_42%,rgba(124,58,237,0.04)_100%)]" />

        <div className="relative flex items-center justify-between gap-3">
          <span className="chip">Preview de experiência digital</span>
          <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-slate-100/72">
            Sob medida
          </span>
        </div>

        <div className="relative mt-4 overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,14,28,0.97),rgba(7,12,24,0.92))] p-5">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.09),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.07),transparent_34%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:56px_56px] opacity-20" />

          <div className="relative flex items-center justify-between gap-4">
            <div className="flex gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-white/26" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/16" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-slate-100/74">
              <span className="h-2 w-2 rounded-full bg-brand-strong shadow-[0_0_12px_rgba(97,166,255,0.9)] animate-glow" />
              Projeto ativo
            </div>
          </div>

          <div className="relative mt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-200/58">
              Arquitetura digital exclusiva
            </p>
            <h3 className="mt-4 max-w-md text-[1.95rem] font-semibold leading-[1.04] text-white sm:text-[2.2rem]">
              Clareza visual, direção estratégica e execução sob medida.
            </h3>
            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-200/72 sm:text-[0.98rem]">
              Um exemplo de composição pensada para apresentar valor, conduzir
              leitura e criar percepção de marca com mais precisão.
            </p>
          </div>

          <div className="relative mt-6 overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/12">
            {structureRows.map((item, index) => (
              <div
                key={item}
                className={`flex items-center justify-between gap-3 px-4 py-3.5 ${
                  index > 0 ? "border-t border-white/8" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-brand-strong shadow-[0_0_12px_rgba(97,166,255,0.9)]" />
                  <span className="text-sm text-slate-100/82">{item}</span>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-brand-strong" />
              </div>
            ))}
          </div>

          <div className="relative mt-6 grid gap-4 border-t border-white/8 pt-5 sm:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-200/58">
                Leitura premium
              </p>
              <div className="mt-3 flex items-center gap-3">
                <p className="text-4xl font-semibold leading-none text-white">
                  94
                </p>
                <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-3 text-brand-strong">
                  <Gauge className="h-5 w-5" />
                </div>
              </div>
              <p className="mt-3 max-w-[14rem] text-sm leading-6 text-slate-200/70">
                Estrutura pronta para valorizar a marca e conduzir a próxima
                ação com mais clareza.
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-3">
                {[
                  { label: "Clareza", width: "w-[90%]" },
                  { label: "Direção", width: "w-[84%]" },
                  { label: "Conversão", width: "w-[88%]" },
                ].map((item) => (
                  <div key={item.label} className="space-y-2">
                    <div className="flex items-center justify-between text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-slate-200/62">
                      <span>{item.label}</span>
                      <span>Ativo</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/8">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r from-brand via-brand-strong to-accent ${item.width}`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid gap-3 pt-1 sm:grid-cols-2">
                {insightItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className={[
                        "pt-3",
                        index > 0 ? "border-t border-white/8 sm:border-l sm:border-t-0 sm:pl-3" : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-white/[0.06] text-brand-strong">
                        <Icon className="h-4 w-4" />
                      </div>
                      <p className="mt-3 text-sm font-semibold text-white">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-200/70">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
