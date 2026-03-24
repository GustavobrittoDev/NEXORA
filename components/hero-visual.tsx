import { ArrowUpRight, Gauge, Sparkles, Workflow } from "lucide-react";

const journeySteps = [
  "Leitura imediata da proposta",
  "Estrutura visual com foco em valor",
  "Navegação construída para conversão",
];

const insights = [
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
      <div className="pointer-events-none absolute -left-8 top-8 h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(97,166,255,0.2),transparent_72%)] blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute -right-6 top-10 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.16),transparent_72%)] blur-3xl animate-float-delay" />

      <div className="panel-strong relative overflow-hidden rounded-[2.8rem] p-4 shadow-[0_42px_120px_-54px_rgba(3,7,18,0.94)] sm:p-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(59,130,246,0.06),transparent_42%,rgba(124,58,237,0.06)_100%)]" />

        <div className="relative flex items-center justify-between gap-3">
          <span className="chip">Preview de experiência digital</span>
          <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-slate-100/74">
            Sob medida
          </span>
        </div>

        <div className="relative mt-4 overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,14,28,0.97),rgba(7,12,24,0.92))] p-4 sm:p-5">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.08),transparent_34%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:56px_56px] opacity-18" />

          <div className="relative flex items-center justify-between gap-3">
            <div className="flex gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-white/28" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/16" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-slate-100/76">
              <span className="h-2 w-2 rounded-full bg-brand-strong shadow-[0_0_16px_rgba(97,166,255,0.95)] animate-glow" />
              Projeto ativo
            </div>
          </div>

          <div className="relative mt-5 grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <div className="inline-flex rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-brand-strong">
                Estrutura premium
              </div>

              <h3 className="mt-4 max-w-sm text-[2rem] font-semibold leading-[1.02] text-white">
                Presença digital com direção clara e alto valor percebido.
              </h3>

              <p className="mt-3 max-w-md text-sm leading-7 text-slate-200/76 sm:text-[0.98rem]">
                Uma composição pensada para apresentar, posicionar e conduzir a
                atenção sem excesso visual.
              </p>

              <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/12">
                {journeySteps.map((item, index) => (
                  <div
                    key={item}
                    className={`flex items-center justify-between gap-3 px-4 py-3 ${
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
            </div>

            <div className="lg:border-l lg:border-white/10 lg:pl-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-200/58">
                    Leitura premium
                  </p>
                  <p className="mt-3 text-4xl font-semibold leading-none text-white">
                    94
                  </p>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-slate-200/70">
                    Estrutura clara para apresentar valor e conduzir ação com
                    mais precisão.
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

              <div className="mt-5 space-y-3 border-t border-white/8 pt-4">
                {insights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl bg-white/8 text-brand-strong">
                        <Icon className="h-4 w-4" />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-white">
                          {item.title}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-slate-200/70">
                          {item.description}
                        </p>
                      </div>
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
