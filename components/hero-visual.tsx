import { ArrowUpRight, Gauge, Sparkles, Workflow } from "lucide-react";

const highlights = [
  "Presença clara para marcas que precisam vender valor.",
  "Arquitetura visual pensada para conduzir decisões.",
  "Estrutura pronta para evoluir junto com a operação.",
];

const pillars = [
  {
    icon: Sparkles,
    title: "Impacto imediato",
    description: "Visual limpo, premium e memorável desde o primeiro contato.",
  },
  {
    icon: Workflow,
    title: "Fluxo inteligente",
    description: "Navegação, conteúdo e ação organizados com intenção.",
  },
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[40rem] lg:ml-auto">
      <div className="pointer-events-none absolute -left-10 top-12 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(97,166,255,0.2),transparent_72%)] blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute -right-8 top-6 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.18),transparent_72%)] blur-3xl animate-float-delay" />

      <div className="panel-strong relative overflow-hidden rounded-[3rem] p-4 shadow-[0_42px_120px_-50px_rgba(3,7,18,0.94)] sm:p-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_32%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(59,130,246,0.08),transparent_38%,rgba(124,58,237,0.08)_100%)]" />

        <div className="relative flex items-center justify-between gap-4">
          <span className="chip">Preview de experiência digital</span>
          <span className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-slate-100/74">
            Sob medida
          </span>
        </div>

        <div className="relative mt-5 overflow-hidden rounded-[2.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,14,28,0.98),rgba(7,12,24,0.92))] p-4 sm:p-5">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.14),transparent_34%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:44px_44px] opacity-25" />

          <div className="relative flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-200/62">
                Estrutura visual premium
              </p>
              <p className="mt-2 text-sm text-slate-100/78">
                Interface pensada para apresentar, convencer e gerar o próximo passo.
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-slate-100/76">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-strong shadow-[0_0_18px_rgba(97,166,255,0.95)] animate-glow" />
              Projeto ativo
            </div>
          </div>

          <div className="relative mt-5 grid gap-4 xl:grid-cols-[1.02fr_0.98fr]">
            <div className="space-y-4 rounded-[2rem] border border-white/10 bg-white/[0.045] p-5">
              <div className="inline-flex rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-strong">
                Primeira impressão forte
              </div>

              <div className="space-y-3">
                <h3 className="max-w-md text-3xl font-semibold leading-tight text-white sm:text-[2.2rem]">
                  Sua marca pode parecer mais valiosa antes mesmo da primeira conversa.
                </h3>
                <p className="max-w-lg text-base leading-8 text-slate-200/76">
                  Design estratégico, leitura clara e uma jornada construída para transmitir autoridade sem excesso visual.
                </p>
              </div>

              <div className="space-y-2.5">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between gap-4 rounded-[1.2rem] border border-white/8 bg-black/16 px-4 py-3"
                  >
                    <span className="text-sm leading-6 text-slate-100/82">{item}</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-brand-strong" />
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,18,34,0.96),rgba(8,14,26,0.9))] p-4">
              <div className="flex items-center justify-between gap-3">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/32" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/16" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                </div>
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-slate-200/62">
                  Arquitetura em foco
                </span>
              </div>

              <div className="mt-4 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(11,19,35,0.94),rgba(8,13,25,0.88))] p-4">
                <div className="rounded-[1.5rem] border border-white/8 bg-[linear-gradient(135deg,rgba(59,130,246,0.12),rgba(124,58,237,0.12),rgba(255,255,255,0.02))] p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-200/58">
                        Jornada principal
                      </p>
                      <h4 className="mt-3 text-2xl font-semibold leading-tight text-white">
                        Autoridade visual com direção clara.
                      </h4>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/8 p-3 text-brand-strong animate-float-delay">
                      <Gauge className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3">
                    {[
                      { label: "Apresentação", width: "w-[88%]" },
                      { label: "Posicionamento", width: "w-[76%]" },
                      { label: "Conversão", width: "w-[92%]" },
                    ].map((item) => (
                      <div key={item.label} className="space-y-2">
                        <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-200/62">
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

                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {pillars.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="rounded-[1.45rem] border border-white/10 bg-white/[0.045] p-4"
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/8 text-brand-strong">
                          <Icon className="h-4 w-4" />
                        </div>
                        <p className="mt-4 text-base font-semibold text-white">
                          {item.title}
                        </p>
                        <p className="mt-2 text-sm leading-7 text-slate-200/72">
                          {item.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-4 grid gap-2.5 sm:grid-cols-3">
            {[
              "Leitura refinada",
              "Navegação objetiva",
              "Estrutura para crescer",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.3rem] border border-white/10 bg-white/[0.045] px-4 py-4 text-sm font-medium text-slate-100/82"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
