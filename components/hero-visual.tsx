import { ArrowUpRight, Gauge, Sparkles, Workflow } from "lucide-react";
import { NexoraLogo } from "@/components/nexora-logo";

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[38rem] lg:ml-auto">
      <div className="pointer-events-none absolute -left-8 top-16 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(97,166,255,0.16),transparent_72%)] blur-3xl" />
      <div className="pointer-events-none absolute -right-10 top-4 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.18),transparent_72%)] blur-3xl" />

      <div className="panel-strong relative overflow-hidden rounded-[2.8rem] p-5 shadow-[0_42px_120px_-50px_rgba(3,7,18,0.96)] sm:p-6">
        <div className="absolute inset-0 grid-mesh opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_34%)]" />

        <div className="relative flex items-center justify-between gap-4">
          <span className="chip">Preview de estrutura digital</span>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/7 text-brand-strong">
            <ArrowUpRight className="h-5 w-5" />
          </div>
        </div>

        <div className="relative mt-6 overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(9,17,33,0.96),rgba(7,13,28,0.88))] p-5">
          <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_70%)]" />

          <div className="relative flex items-center justify-between gap-3">
            <NexoraLogo size="md" showTagline={false} />
            <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-slate-100/74">
              Sob medida
            </div>
          </div>

          <div className="relative mt-6 grid gap-4">
            <div className="grid gap-4 sm:grid-cols-[1.12fr_0.88fr]">
              <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.05] p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-200/62">
                  Presença digital
                </p>
                <h3 className="mt-3 max-w-xs text-3xl font-semibold leading-tight text-white">
                  Design premium com leitura clara.
                </h3>
                <div className="mt-5 space-y-3">
                  {[
                    "Sites e landing pages",
                    "Sistemas web",
                    "Estrutura pronta para evoluir",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-2xl border border-white/8 bg-black/18 px-4 py-3"
                    >
                      <span className="text-sm text-slate-100/82">{item}</span>
                      <span className="h-2 w-14 rounded-full bg-gradient-to-r from-brand to-accent" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-[1.7rem] border border-white/10 bg-[linear-gradient(135deg,rgba(30,58,138,0.24),rgba(124,58,237,0.18),rgba(9,17,33,0.88))] p-5">
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
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    { icon: Sparkles, title: "Visual limpo" },
                    { icon: Workflow, title: "Fluxo inteligente" },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="rounded-[1.4rem] border border-white/10 bg-white/[0.05] p-4"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/8 text-brand-strong">
                          <Icon className="h-4 w-4" />
                        </div>
                        <p className="mt-3 text-sm font-semibold text-white">
                          {item.title}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                "Autoridade visual",
                "Usabilidade refinada",
                "Execução sob medida",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm font-medium text-slate-100/84"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
