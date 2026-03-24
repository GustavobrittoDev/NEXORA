import {
  Activity,
  ArrowUpRight,
  Blocks,
  Gauge,
  LayoutPanelTop,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { NexoraLogo } from "@/components/nexora-logo";

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[40rem] pb-6 pt-8 lg:ml-auto lg:pt-2">
      <div className="animate-glow absolute -left-14 top-20 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(97,166,255,0.22),transparent_72%)] blur-2xl" />
      <div className="absolute -right-8 top-10 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.22),transparent_72%)] blur-3xl" />
      <div className="absolute bottom-14 right-6 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.16),transparent_72%)] blur-3xl" />

      <div className="hidden lg:block absolute inset-x-10 top-8 h-48 rounded-[2.6rem] border border-white/8 bg-[linear-gradient(135deg,rgba(19,34,68,0.72),rgba(11,19,37,0.2))] backdrop-blur-2xl" />

      <div className="animate-float-slow absolute left-4 top-16 hidden md:block w-[15rem] rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-4 shadow-[0_24px_60px_-32px_rgba(2,6,23,0.88)] backdrop-blur-2xl">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/8 text-brand-strong">
            <LayoutPanelTop className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Presença premium</p>
            <p className="text-xs leading-6 text-muted">
              Estrutura clara e sofisticada.
            </p>
          </div>
        </div>
        <div className="mt-4 rounded-[1.4rem] border border-white/8 bg-black/20 px-4 py-3">
          <p className="text-xs uppercase tracking-[0.24em] text-slate-200/62">
            Entrega
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-100/84">
            Layout autoral, alto padrão visual e leitura estratégica da marca.
          </p>
        </div>
      </div>

      <div className="animate-float-delay absolute right-0 top-0 hidden sm:block w-[17rem] rounded-[2rem] border border-white/12 bg-[linear-gradient(140deg,rgba(30,58,138,0.24),rgba(124,58,237,0.16),rgba(7,15,30,0.88))] p-5 shadow-[0_28px_70px_-34px_rgba(5,10,24,0.95)] backdrop-blur-2xl">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-200/60">
              Performance visual
            </p>
            <p className="mt-2 text-3xl font-semibold text-white">94</p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-brand-strong">
            <Gauge className="h-5 w-5" />
          </div>
        </div>
        <div className="mt-4 h-2 rounded-full bg-white/8">
          <div className="h-full w-[94%] rounded-full bg-gradient-to-r from-brand to-accent" />
        </div>
        <div className="mt-4 grid gap-3">
          {[
            "Arquitetura sob medida",
            "Leitura clara e elegante",
            "Base pronta para evoluir",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[1.2rem] border border-white/8 bg-white/6 px-3 py-2 text-sm text-slate-100/84"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="panel-strong relative mt-20 overflow-hidden rounded-[2.7rem] p-5 shadow-[0_40px_120px_-48px_rgba(3,7,18,0.95)] sm:mt-24 sm:p-6">
        <div className="absolute inset-0 grid-mesh opacity-25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_44%)]" />

        <div className="relative flex items-center justify-between gap-4">
          <span className="chip">Arquitetura digital exclusiva</span>
          <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-slate-100/76">
            Sob medida
          </span>
        </div>

        <div className="relative mt-6 rounded-[2.1rem] border border-white/10 bg-[linear-gradient(180deg,rgba(9,17,33,0.92),rgba(7,13,28,0.82))] p-5 backdrop-blur-2xl">
          <div className="flex items-center justify-between gap-4">
            <NexoraLogo size="md" showTagline={false} />
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/7 text-brand-strong">
              <ArrowUpRight className="h-5 w-5" />
            </div>
          </div>

          <div className="mt-6 grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[1.8rem] border border-white/10 bg-white/6 p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-200/64">
                    Presença digital
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    Sites premium
                  </h3>
                </div>
                <LayoutPanelTop className="h-5 w-5 text-brand-strong" />
              </div>

              <div className="mt-5 grid gap-3">
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
                    <span className="h-2 w-16 rounded-full bg-gradient-to-r from-brand to-accent" />
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-[1.5rem] border border-white/8 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-200/60">
                  Direção visual
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-100/82">
                  Interfaces desenhadas para comunicar valor, autoridade e alto
                  nível de execução.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[1.7rem] border border-white/10 bg-white/6 p-4 backdrop-blur-xl">
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

              <div className="rounded-[1.7rem] border border-white/10 bg-white/6 p-4 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/8 text-brand-strong">
                    <Activity className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Performance e fluidez
                    </p>
                    <p className="text-xs leading-6 text-muted">
                      Estruturas rápidas, leves e escaláveis.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.7rem] border border-white/10 bg-[linear-gradient(135deg,rgba(59,130,246,0.18),rgba(124,58,237,0.18))] p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-100/62">
                  Alto padrão
                </p>
                <p className="mt-2 text-sm leading-7 text-white/86">
                  Cada projeto recebe acabamento visual e técnico compatível com
                  marcas que querem crescer com força.
                </p>
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
