import {
  ArrowUpRight,
  Blocks,
  Gauge,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { NexoraLogo } from "@/components/nexora-logo";

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[40rem] lg:ml-auto">
      <div className="pointer-events-none absolute -left-8 top-12 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(97,166,255,0.18),transparent_72%)] blur-3xl" />
      <div className="pointer-events-none absolute -right-10 top-6 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.18),transparent_72%)] blur-3xl" />

      <div className="panel-strong relative overflow-hidden rounded-[2.8rem] p-5 shadow-[0_42px_120px_-50px_rgba(3,7,18,0.96)] sm:p-6">
        <div className="absolute inset-0 grid-mesh opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_32%)]" />
        <div className="absolute right-0 top-0 h-64 w-64 bg-[radial-gradient(circle,rgba(59,130,246,0.12),transparent_70%)] blur-3xl" />

        <div className="relative">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="chip">Arquitetura digital exclusiva</span>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-slate-100/76">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-brand to-accent" />
              Sob medida
            </div>
          </div>

          <div className="mt-6 grid gap-4 xl:grid-cols-[1.16fr_0.84fr]">
            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(9,17,33,0.94),rgba(7,13,28,0.84))] p-5">
              <div className="flex items-center justify-between gap-4">
                <NexoraLogo size="md" showTagline={false} />
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/7 text-brand-strong">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>

              <p className="mt-5 max-w-md text-sm leading-7 text-slate-100/80 sm:text-base">
                Sites, sistemas e estruturas digitais criados para fortalecer
                autoridade, organizar a experiência do usuário e sustentar
                crescimento com clareza.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  ["Sites premium", "Presença digital com leitura sofisticada."],
                  ["Sistemas web", "Fluxos organizados e operação mais inteligente."],
                  ["Soluções sob medida", "Estrutura pensada conforme o negócio."],
                ].map(([title, description]) => (
                  <div
                    key={title}
                    className="flex items-center justify-between gap-4 rounded-[1.4rem] border border-white/8 bg-white/[0.04] px-4 py-3"
                  >
                    <div>
                      <p className="text-sm font-semibold text-white">{title}</p>
                      <p className="text-xs leading-6 text-muted">{description}</p>
                    </div>
                    <span className="h-2 w-16 rounded-full bg-gradient-to-r from-brand to-accent" />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(30,58,138,0.24),rgba(124,58,237,0.18),rgba(9,17,33,0.88))] p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-200/62">
                      Performance visual
                    </p>
                    <p className="mt-3 text-5xl font-semibold leading-none text-white">
                      94
                    </p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-brand-strong">
                    <Gauge className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-5 h-2 rounded-full bg-white/8">
                  <div className="h-full w-[94%] rounded-full bg-gradient-to-r from-brand via-brand-strong to-accent" />
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-100/82">
                  Direção visual refinada, ritmo de leitura forte e acabamento
                  pensado para marcas que exigem alto padrão.
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-200/62">
                  Estrutura
                </p>

                <div className="mt-4 grid gap-3">
                  {[
                    {
                      icon: ShieldCheck,
                      title: "Design estratégico",
                      text: "Autoridade visual sem excesso.",
                    },
                    {
                      icon: Workflow,
                      title: "Arquitetura clara",
                      text: "Navegação intuitiva e objetiva.",
                    },
                    {
                      icon: Blocks,
                      title: "Sob medida",
                      text: "Nada encaixado em modelo pronto.",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="flex items-start gap-3 rounded-[1.35rem] border border-white/8 bg-black/18 px-4 py-3"
                      >
                        <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/8 text-brand-strong">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {item.title}
                          </p>
                          <p className="text-xs leading-6 text-muted">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: Sparkles,
                title: "Leitura premium",
                text: "Layout limpo, sofisticado e fácil de entender.",
              },
              {
                icon: Workflow,
                title: "Experiência fluida",
                text: "Estrutura pensada para usabilidade e conversão.",
              },
              {
                icon: ShieldCheck,
                title: "Execução sólida",
                text: "Base pronta para evoluir com o negócio.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[1.7rem] border border-white/10 bg-white/[0.045] p-4"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/8 text-brand-strong">
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="mt-4 text-sm font-semibold text-white">
                    {item.title}
                  </p>
                  <p className="mt-2 text-xs leading-6 text-muted">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
