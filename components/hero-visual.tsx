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
    <div className="relative mx-auto w-full max-w-[24.5rem] sm:max-w-[36rem] lg:ml-auto">
      <div className="pointer-events-none absolute -left-5 top-10 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(97,166,255,0.16),transparent_72%)] blur-3xl animate-float-slow sm:-left-8 sm:h-36 sm:w-36" />
      <div className="pointer-events-none absolute -right-6 top-4 h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.12),transparent_72%)] blur-3xl animate-float-delay sm:-right-10 sm:top-6 sm:h-48 sm:w-48" />

      <div className="panel-strong relative overflow-hidden rounded-[2rem] p-3 shadow-[0_40px_120px_-58px_rgba(3,7,18,0.98)] sm:rounded-[2.8rem] sm:p-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(59,130,246,0.05),transparent_42%,rgba(124,58,237,0.04)_100%)]" />

        <div className="relative flex flex-col items-start gap-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
          <span className="chip">Preview de experiência digital</span>
          <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-slate-100/72 sm:text-[0.66rem] sm:tracking-[0.2em]">
            Sob medida
          </span>
        </div>

        <div className="relative mt-3.5 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,14,28,0.97),rgba(7,12,24,0.92))] p-4 sm:mt-4 sm:rounded-[2.2rem] sm:p-5">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.09),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.07),transparent_34%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:56px_56px] opacity-20" />

          <div className="relative flex items-center justify-between gap-4">
            <div className="flex gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-white/26" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/16" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-slate-100/74 sm:text-[0.66rem] sm:tracking-[0.2em]">
              <span className="h-2 w-2 rounded-full bg-brand-strong shadow-[0_0_12px_rgba(97,166,255,0.9)] animate-glow" />
              Projeto ativo
            </div>
          </div>

          <div className="relative mt-5 sm:mt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-200/58">
              Arquitetura digital exclusiva
            </p>
            <h3 className="mt-3 max-w-md text-[1.45rem] font-semibold leading-[1.08] text-white min-[390px]:text-[1.6rem] sm:mt-4 sm:text-[2.2rem] sm:leading-[1.04]">
              Clareza visual, direção estratégica e execução sob medida.
            </h3>
            <p className="mt-3 max-w-lg text-[0.93rem] leading-6 text-slate-200/72 sm:mt-4 sm:text-[0.98rem] sm:leading-7">
              Um exemplo de composição pensada para apresentar valor, conduzir
              leitura e criar percepção de marca com mais precisão.
            </p>
          </div>

          <div className="relative mt-5 overflow-hidden rounded-[1.3rem] border border-white/10 bg-black/12 sm:mt-6 sm:rounded-[1.5rem]">
            {structureRows.map((item, index) => (
              <div
                key={item}
                className={[
                  "items-center justify-between gap-3 px-4 py-3.5",
                  index > 0 ? "border-t border-white/8" : "",
                  index === 2 ? "hidden sm:flex" : "flex",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-brand-strong shadow-[0_0_12px_rgba(97,166,255,0.9)]" />
                  <span className="text-[0.92rem] leading-6 text-slate-100/82 sm:text-sm">
                    {item}
                  </span>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-brand-strong" />
              </div>
            ))}
          </div>

          <div className="relative mt-5 grid gap-3 border-t border-white/8 pt-4 sm:mt-6 sm:grid-cols-[0.7fr_1.3fr] sm:gap-4 sm:pt-5">
            <div className="rounded-[1.3rem] border border-white/8 bg-white/[0.03] px-4 py-4 sm:rounded-none sm:border-0 sm:bg-transparent sm:px-0 sm:py-0">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-200/58">
                Leitura premium
              </p>
              <div className="mt-3 flex items-center gap-3">
                <p className="text-[2.25rem] font-semibold leading-none text-white sm:text-4xl">
                  94
                </p>
                <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-3 text-brand-strong">
                  <Gauge className="h-5 w-5" />
                </div>
              </div>
              <p className="mt-3 max-w-[15rem] text-[0.92rem] leading-6 text-slate-200/70 sm:text-sm">
                Estrutura pronta para valorizar a marca e conduzir a próxima
                ação com mais clareza.
              </p>
            </div>

            <div className="space-y-4">
              <div className="hidden space-y-3 sm:block">
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

              <div className="grid gap-2.5 min-[390px]:grid-cols-2 sm:grid-cols-2 sm:gap-3 sm:pt-1">
                {insightItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className={[
                        "rounded-[1.2rem] border border-white/8 bg-white/[0.03] px-3.5 py-3.5 sm:rounded-none sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:pt-3",
                        index > 0 ? "sm:border-l sm:pl-3" : "",
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
                      <p className="mt-1 text-[0.92rem] leading-6 text-slate-200/70 sm:text-sm">
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
