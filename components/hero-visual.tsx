import { ArrowUpRight, Gauge, Sparkles, Workflow } from "lucide-react";

const journeySteps = [
  "Leitura imediata da proposta",
  "Estrutura visual com foco em valor",
  "Navegação construída para conversão",
];

const sideHighlights = [
  {
    icon: Sparkles,
    title: "Impacto visual",
    description: "Design limpo, premium e direto ao ponto.",
  },
  {
    icon: Workflow,
    title: "Fluxo inteligente",
    description: "Conteúdo e ação organizados com clareza.",
  },
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[35rem] lg:ml-auto">
      <div className="pointer-events-none absolute -left-8 top-8 h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(97,166,255,0.22),transparent_72%)] blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute -right-6 top-10 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.18),transparent_72%)] blur-3xl animate-float-delay" />

      <div className="panel-strong relative overflow-hidden rounded-[2.8rem] p-4 shadow-[0_42px_120px_-54px_rgba(3,7,18,0.94)] sm:p-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(59,130,246,0.08),transparent_42%,rgba(124,58,237,0.08)_100%)]" />

        <div className="relative flex items-center justify-between gap-3">
          <span className="chip">Preview de experiência digital</span>
          <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-slate-100/74">
            Sob medida
          </span>
        </div>

        <div className="relative mt-4 overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,14,28,0.98),rgba(7,12,24,0.92))] p-4 sm:p-5">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.12),transparent_34%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:52px_52px] opacity-20" />

          <div className="relative flex items-center justify-between gap-3">
            <div className="flex gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-white/28" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/16" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-slate-100/76">
              <span className="h-2 w-2 rounded-full bg-brand-strong shadow-[0_0_16px_rgba(97,166,255,0.95)] animate-glow" />
              Projeto ativo
            </div>
          </div>

          <div className="relative mt-4 grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="rounded-[1.9rem] border border-white/10 bg-white/[0.045] p-5">
              <div className="inline-flex rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-strong">
                Estrutura premium
              </div>

              <h3 className="mt-4 max-w-sm text-[2rem] font-semibold leading-[1.02] text-white">
                Presença digital com direção clara e alto valor percebido.
              </h3>

              <p className="mt-3 max-w-md text-sm leading-7 text-slate-200/76 sm:text-[0.98rem]">
                Uma composição pensada para apresentar, posicionar e conduzir a
                atenção sem excesso visual.
              </p>

              <div className="mt-5 space-y-2.5">
                {journeySteps.map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between gap-3 rounded-[1.15rem] border border-white/8 bg-black/16 px-4 py-3"
                  >
                    <span className="text-sm text-slate-100/82">{item}</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-brand-strong" />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              <div className="rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(11,19,35,0.94),rgba(8,13,25,0.88))] p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-200/58">
                      Leitura premium
                    </p>
                    <p className="mt-3 text-4xl font-semibold leading-none text-white">
                      94
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/8 p-3 text-brand-strong">
                    <Gauge className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {[
                    { label: "Clareza", width: "w-[90%]" },
                    { label: "Direção", width: "w-[82%]" },
                    { label: "Conversão", width: "w-[88%]" },
                  ].map((item) => (
                    <div key={item.label} className="space-y-2">
                      <div className="flex items-center justify-between text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-slate-200/62">
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
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {sideHighlights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-[1.6rem] border border-white/10 bg-white/[0.045] p-4"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/8 text-brand-strong">
                        <Icon className="h-4 w-4" />
                      </div>
                      <p className="mt-3 text-base font-semibold text-white">
                        {item.title}
                      </p>
                      <p className="mt-1.5 text-sm leading-6 text-slate-200/72">
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
