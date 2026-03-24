import {
  Activity,
  ArrowUpRight,
  Blocks,
  LayoutPanelTop,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { NexoraLogo } from "@/components/nexora-logo";

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[34rem] lg:ml-auto">
      <div className="animate-glow absolute -left-14 top-12 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(97,166,255,0.22),transparent_72%)] blur-2xl" />
      <div className="absolute -right-10 bottom-12 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.2),transparent_72%)] blur-2xl" />

      <div className="panel-strong relative overflow-hidden rounded-[2.6rem] p-5 shadow-[0_40px_120px_-48px_rgba(3,7,18,0.95)] sm:p-6">
        <div className="absolute inset-0 grid-mesh opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_44%)]" />

        <div className="relative flex items-center justify-between gap-4">
          <span className="chip">Arquitetura digital exclusiva</span>
          <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-slate-100/76">
            Sob medida
          </span>
        </div>

        <div className="relative mt-8 rounded-[2rem] border border-white/10 bg-black/22 p-5 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4">
            <NexoraLogo size="md" showTagline={false} />
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/7 text-brand-strong">
              <ArrowUpRight className="h-5 w-5" />
            </div>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-[1.12fr_0.88fr]">
            <div className="rounded-[1.6rem] border border-white/10 bg-white/6 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-200/64">
                    Presença digital
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    Sites premium
                  </h3>
                </div>
                <LayoutPanelTop className="h-5 w-5 text-brand-strong" />
              </div>

              <div className="mt-5 space-y-3">
                {[
                  "Narrativa clara",
                  "Estrutura profissional",
                  "Experiência refinada",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-2xl border border-white/8 bg-black/20 px-4 py-3"
                  >
                    <span className="text-sm text-slate-100/82">{item}</span>
                    <span className="h-2 w-14 rounded-full bg-gradient-to-r from-brand to-accent" />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="animate-float-slow rounded-[1.6rem] border border-white/10 bg-white/6 p-4 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/8 text-brand-strong">
                    <Blocks className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Soluções personalizadas
                    </p>
                    <p className="text-xs leading-6 text-muted">
                      Fluxos, integrações e estruturas próprias.
                    </p>
                  </div>
                </div>
              </div>

              <div className="animate-float-delay rounded-[1.6rem] border border-white/10 bg-white/6 p-4 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/8 text-brand-strong">
                    <Activity className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Performance e fluidez
                    </p>
                    <p className="text-xs leading-6 text-muted">
                      Estruturas leves, rápidas e escaláveis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.6rem] border border-white/10 bg-white/6 p-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-brand-strong" />
                <p className="text-sm font-semibold text-white">
                  Design estratégico e profissional
                </p>
              </div>
              <p className="mt-3 text-sm leading-7 text-muted">
                A interface valoriza a marca, simplifica a leitura e reforça
                autoridade em cada interação.
              </p>
            </div>

            <div className="rounded-[1.6rem] border border-white/10 bg-white/6 p-4">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-brand-strong" />
                <p className="text-sm font-semibold text-white">
                  Desenvolvimento com acabamento premium
                </p>
              </div>
              <p className="mt-3 text-sm leading-7 text-muted">
                Cada bloco é pensado para parecer exclusivo, elegante e pronto
                para evoluir com o negócio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
