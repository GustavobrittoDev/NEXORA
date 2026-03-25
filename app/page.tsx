import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MessageCircleMore,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { HeroVisual } from "@/components/hero-visual";
import { NexoraLogo } from "@/components/nexora-logo";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";
import { ButtonLink } from "@/components/ui/button-link";
import {
  aboutHighlights,
  contact,
  differentials,
  heroHighlights,
  mailtoUrl,
  navigation,
  processSteps,
  projects,
  solutions,
  whatsappUrl,
} from "@/data/site-content";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(98,148,255,0.16),transparent_56%)] sm:h-[42rem]" />
      <div className="pointer-events-none absolute right-[-12rem] top-[22rem] h-[18rem] w-[18rem] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.12),transparent_72%)] blur-3xl sm:right-[-16rem] sm:top-[28rem] sm:h-[24rem] sm:w-[24rem]" />
      <SiteHeader />

      <main className="relative">
        <section
          id="inicio"
          className="section-anchor pt-2 pb-16 sm:pt-36 sm:pb-20 lg:pt-[8.75rem] lg:pb-28"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-9 px-4 sm:gap-12 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 lg:px-8">
            <div className="relative z-10 flex flex-col items-center text-center fade-up lg:block lg:text-left">
              <NexoraLogo
                size="lg"
                className="mx-auto max-w-[16.4rem] items-center pt-0 min-[360px]:max-w-[18.2rem] min-[390px]:max-w-[20.25rem] lg:mx-0 lg:max-w-none lg:items-start"
              />

              <div className="mt-6 max-w-3xl space-y-5 sm:mt-10 sm:space-y-6">
                <h1 className="max-w-[13ch] text-[2.95rem] font-semibold leading-[0.92] text-white min-[390px]:text-[3.25rem] sm:max-w-none sm:text-6xl lg:text-[5rem]">
                  Soluções digitais sob medida para crescer com autoridade.
                </h1>

                <p className="max-w-xl text-[1rem] leading-7 text-muted sm:max-w-2xl sm:text-xl sm:leading-8">
                  Da presença institucional à operação, a Nexora desenvolve
                  sites, sistemas e interfaces exclusivas para negócios que
                  exigem clareza, performance e valor percebido.
                </p>
              </div>

              <div className="order-3 mt-7 grid max-w-md grid-cols-2 gap-2.5 sm:mt-8 sm:flex sm:max-w-none sm:flex-wrap sm:gap-3 lg:mx-0">
                {heroHighlights.map((item) => (
                  <span
                    key={item}
                    className="flex min-h-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-2 text-center text-[0.8rem] font-medium text-slate-100/80 sm:block sm:min-h-0 sm:px-4 sm:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="order-2 mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-9 sm:max-w-none sm:flex-row lg:w-auto">
                <ButtonLink
                  href={whatsappUrl}
                  icon={<MessageCircleMore className="h-4 w-4" />}
                  external
                  className="w-full justify-center sm:w-auto"
                >
                  Falar no WhatsApp
                </ButtonLink>
                <ButtonLink
                  href="#contato"
                  variant="secondary"
                  icon={<ArrowRight className="h-4 w-4" />}
                  className="w-full justify-center sm:w-auto"
                >
                  Solicitar projeto
                </ButtonLink>
              </div>

              <p className="mt-5 hidden max-w-xl text-sm leading-7 text-slate-200/68 sm:block lg:mx-0">
                Cada projeto parte do contexto da marca, não de um modelo
                pronto. A proposta é construir presença, operação e percepção de
                valor com o nível de acabamento que o negócio exige.
              </p>
            </div>

            <div className="fade-up fade-delay-1">
              <HeroVisual />
            </div>
          </div>
        </section>

        <section className="section-anchor py-16 sm:py-20 lg:py-24" id="solucoes">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Soluções"
              title="Soluções desenhadas para marcas que precisam parecer tão sólidas quanto operam."
              description="Sites, landing pages, sistemas e estruturas digitais pensados para posicionamento, conversão e evolução com mais clareza."
              align="center"
            />

            <div className="mt-10 grid gap-3.5 sm:mt-12 sm:gap-4 md:grid-cols-2 xl:grid-cols-3">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;

                return (
                  <article
                    key={solution.title}
                    className="panel lift-hover rounded-[1.7rem] p-5 fade-up sm:rounded-[2rem] sm:p-6"
                    style={{ animationDelay: `${index * 70}ms` }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.06] text-brand-strong sm:h-14 sm:w-14">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-slate-200/48">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-5 text-[1.35rem] font-semibold leading-tight text-white sm:mt-6 sm:text-2xl">
                      {solution.title}
                    </h3>
                    <p className="mt-3 text-[0.98rem] leading-7 text-muted sm:mt-4 sm:text-base">
                      {solution.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-anchor py-16 sm:py-20 lg:py-24" id="projetos">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Projetos"
              title="Cases e modelos que mostram como a estratégia se traduz em estrutura digital."
              description="Projetos reais convivem com exemplos conceituais para demonstrar repertório visual, capacidade técnica e clareza de execução."
              align="center"
            />

            <div className="project-scrollbar -mx-4 mt-10 flex snap-x snap-mandatory gap-3.5 overflow-x-auto px-4 pb-4 sm:mx-0 sm:mt-12 sm:gap-4 sm:px-0 sm:pb-0 md:grid md:overflow-visible lg:grid-cols-4">
              {projects.map((project, index) => (
                <article
                  key={project.name}
                  className="panel group lift-hover w-[85vw] max-w-[22rem] shrink-0 snap-start overflow-hidden rounded-[1.7rem] p-3 fade-up sm:w-[22rem] sm:rounded-[2rem] sm:p-4 md:w-auto md:max-w-none md:shrink md:snap-none"
                  style={{ animationDelay: `${index * 75}ms` }}
                >
                  <div className="relative overflow-hidden rounded-[1.3rem] border border-white/10 bg-[linear-gradient(180deg,rgba(14,24,48,0.96),rgba(7,13,29,0.92))] p-2 sm:rounded-[1.5rem] sm:p-2.5">
                    <div className="absolute inset-0 grid-mesh opacity-18" />

                    <div className="relative flex flex-wrap items-start justify-between gap-2 px-1 pb-2.5 sm:flex-nowrap sm:items-center sm:gap-3">
                      <span
                        className={`rounded-full border px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] ${
                          project.kindLabel === "Projeto real"
                            ? "border-brand-strong/24 bg-brand-strong/[0.08] text-brand-strong"
                            : "border-white/10 bg-white/[0.05] text-slate-100/72"
                        }`}
                      >
                        {project.kindLabel}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-slate-100/74">
                        {project.category}
                      </span>
                    </div>

                    <div className="relative aspect-[16/10] overflow-hidden rounded-[1.15rem] border border-white/10 bg-[#08111f] sm:aspect-[16/11] sm:rounded-[1.2rem]">
                      <Image
                        src={project.imageSrc}
                        alt={project.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 22vw, (min-width: 768px) 48vw, 100vw"
                        className={`transition duration-500 group-hover:scale-[1.02] ${
                          project.imageFit === "contain"
                            ? "object-contain p-3"
                            : "object-cover object-top"
                        }`}
                      />
                      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#07101b] via-[#07101b]/55 to-transparent" />
                      <div className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/45 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/82 backdrop-blur-xl">
                        {project.imageBadge}
                      </div>
                    </div>
                  </div>

                  <div className="mt-3.5 space-y-3 sm:mt-4">
                    <div>
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-brand-strong/84 sm:text-[0.72rem] sm:tracking-[0.24em]">
                        {project.kicker}
                      </p>
                      <h3 className="mt-2 text-[1.15rem] font-semibold leading-tight text-white sm:text-[1.32rem]">
                        {project.name}
                      </h3>
                    </div>

                    <p className="text-[0.95rem] leading-6 text-muted sm:text-sm">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.preview.map((item, previewIndex) => (
                        <span
                          key={item}
                          className={[
                            "rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1.5 text-[0.68rem] font-medium text-slate-100/80 sm:text-[0.72rem]",
                            previewIndex === 2 ? "hidden sm:inline-flex" : "",
                          ]
                            .filter(Boolean)
                            .join(" ")}
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <p className="hidden border-t border-white/8 pt-3 text-[0.95rem] leading-6 text-slate-200/68 sm:block sm:text-sm">
                      {project.outcome}
                    </p>

                    {project.href ? (
                      <ButtonLink
                        href={project.href}
                        variant="ghost"
                        external
                        icon={<ArrowUpRight className="h-4 w-4" />}
                        className="mt-1 justify-start"
                      >
                        {project.buttonLabel}
                      </ButtonLink>
                    ) : (
                      <p className="text-[0.95rem] leading-6 text-slate-200/68 sm:text-sm">
                        Exemplo conceitual para demonstrar lógica de interface,
                        organização visual e amplitude da atuação da Nexora.
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Processo"
              title="Uma abordagem orientada por negócio, design e execução."
              description="A Nexora estrutura cada etapa para que posicionamento, experiência e implementação avancem com direção clara."
              align="center"
            />

            <div className="mt-10 grid gap-3.5 sm:mt-12 sm:gap-4 lg:grid-cols-4">
              {processSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.title}
                    className="panel rounded-[1.7rem] p-5 fade-up sm:rounded-[2rem] sm:p-6"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.06] text-brand-strong sm:h-12 sm:w-12">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-slate-200/48">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-4 text-[1.12rem] font-semibold text-white sm:mt-5 sm:text-xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[0.95rem] leading-7 text-muted sm:text-sm">
                      {step.description}
                    </p>
                    <p className="mt-4 border-t border-white/8 pt-4 text-[0.92rem] leading-6 text-slate-200/66 sm:text-sm">
                      {step.note}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-anchor py-16 sm:py-20 lg:py-24" id="diferenciais">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Diferenciais"
              title="Exclusividade não é discurso. É método, decisão e acabamento."
              description="Cada entrega parte da identidade da marca, do contexto do negócio e do que a estrutura digital precisa sustentar depois do lançamento."
              align="center"
            />

            <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 lg:grid-cols-[1.04fr_0.96fr]">
              <article className="panel-strong shine-border rounded-[2rem] p-6 sm:rounded-[2.5rem] sm:p-8 lg:p-10">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.08] text-brand-strong sm:h-12 sm:w-12">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-200/68">
                    Assinatura Nexora
                  </span>
                </div>

                <h3 className="mt-6 max-w-2xl text-[1.7rem] font-semibold leading-[1.12] text-white sm:mt-8 sm:text-[2.35rem] sm:leading-[1.18]">
                  Na Nexora, cada site e cada sistema é tratado como uma peça
                  de posicionamento e de estrutura.
                </h3>

                <p className="mt-4 max-w-2xl text-[1rem] leading-7 text-slate-200/76 sm:mt-6 sm:text-lg sm:leading-8">
                  Por isso, design, narrativa, usabilidade e desenvolvimento são
                  definidos de forma sob medida. O objetivo não é apenas entregar
                  uma interface bonita, mas uma presença digital que pareça
                  madura, confiável e alinhada ao nível da marca.
                </p>

                <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2">
                  {[
                    "Cada projeto nasce do contexto real do negócio.",
                    "Posicionamento visual e função caminham juntos.",
                    "Nada é replicado sem critério ou intenção.",
                    "Acabamento premium em comportamento, tipografia e estrutura.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] px-4 py-4 sm:rounded-[1.45rem]"
                    >
                      <p className="text-sm leading-7 text-slate-100/82">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </article>

              <div className="grid gap-4">
                {differentials.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="panel lift-hover rounded-[1.7rem] px-5 py-5 fade-up sm:rounded-[2rem] sm:px-6 sm:py-6"
                      style={{ animationDelay: `${index * 80}ms` }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/[0.06] text-brand-strong">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div>
                          <h3 className="text-[1.02rem] font-semibold text-white sm:text-lg">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-[0.95rem] leading-7 text-muted sm:text-sm">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="hidden" aria-hidden="true">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Projetos"
              title="Cases e modelos que mostram como a estratégia se traduz em estrutura digital."
              description="Projetos reais convivem com exemplos conceituais para demonstrar repertório visual, capacidade técnica e clareza de execução."
              align="center"
            />

            <div className="project-scrollbar -mx-4 mt-10 flex snap-x snap-mandatory gap-3.5 overflow-x-auto px-4 pb-4 sm:mx-0 sm:mt-12 sm:gap-4 sm:px-0 sm:pb-0 md:grid md:overflow-visible lg:grid-cols-4">
              {projects.map((project, index) => (
                <article
                  key={project.name}
                  className="panel group lift-hover w-[85vw] max-w-[22rem] shrink-0 snap-start overflow-hidden rounded-[1.7rem] p-3 fade-up sm:w-[22rem] sm:rounded-[2rem] sm:p-4 md:w-auto md:max-w-none md:shrink md:snap-none"
                  style={{ animationDelay: `${index * 75}ms` }}
                >
                  <div className="relative overflow-hidden rounded-[1.3rem] border border-white/10 bg-[linear-gradient(180deg,rgba(14,24,48,0.96),rgba(7,13,29,0.92))] p-2 sm:rounded-[1.5rem] sm:p-2.5">
                    <div className="absolute inset-0 grid-mesh opacity-18" />

                    <div className="relative flex flex-wrap items-start justify-between gap-2 px-1 pb-2.5 sm:flex-nowrap sm:items-center sm:gap-3">
                      <span
                        className={`rounded-full border px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] ${
                          project.kindLabel === "Projeto real"
                            ? "border-brand-strong/24 bg-brand-strong/[0.08] text-brand-strong"
                            : "border-white/10 bg-white/[0.05] text-slate-100/72"
                        }`}
                      >
                        {project.kindLabel}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-slate-100/74">
                        {project.category}
                      </span>
                    </div>

                    <div className="relative aspect-[16/10] overflow-hidden rounded-[1.15rem] border border-white/10 bg-[#08111f] sm:aspect-[16/11] sm:rounded-[1.2rem]">
                      <Image
                        src={project.imageSrc}
                        alt={project.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 22vw, (min-width: 768px) 48vw, 100vw"
                        className={`transition duration-500 group-hover:scale-[1.02] ${
                          project.imageFit === "contain"
                            ? "object-contain p-3"
                            : "object-cover object-top"
                        }`}
                      />
                      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#07101b] via-[#07101b]/55 to-transparent" />
                      <div className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/45 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/82 backdrop-blur-xl">
                        {project.imageBadge}
                      </div>
                    </div>
                  </div>

                  <div className="mt-3.5 space-y-3 sm:mt-4">
                    <div>
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-brand-strong/84 sm:text-[0.72rem] sm:tracking-[0.24em]">
                        {project.kicker}
                      </p>
                      <h3 className="mt-2 text-[1.15rem] font-semibold leading-tight text-white sm:text-[1.32rem]">
                        {project.name}
                      </h3>
                    </div>

                    <p className="text-[0.95rem] leading-6 text-muted sm:text-sm">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.preview.map((item, previewIndex) => (
                        <span
                          key={item}
                          className={[
                            "rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1.5 text-[0.68rem] font-medium text-slate-100/80 sm:text-[0.72rem]",
                            previewIndex === 2 ? "hidden sm:inline-flex" : "",
                          ]
                            .filter(Boolean)
                            .join(" ")}
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <p className="hidden border-t border-white/8 pt-3 text-[0.95rem] leading-6 text-slate-200/68 sm:block sm:text-sm">
                      {project.outcome}
                    </p>

                    {project.href ? (
                      <ButtonLink
                        href={project.href}
                        variant="ghost"
                        external
                        icon={<ArrowUpRight className="h-4 w-4" />}
                        className="mt-1 justify-start"
                      >
                        {project.buttonLabel}
                      </ButtonLink>
                    ) : (
                      <p className="text-[0.95rem] leading-6 text-slate-200/68 sm:text-sm">
                        Exemplo conceitual para demonstrar lógica de interface,
                        organização visual e amplitude da atuação da Nexora.
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="panel-strong rounded-[2rem] px-5 py-8 text-center sm:rounded-[2.7rem] sm:px-10 sm:py-10 lg:px-12">
              <div className="mx-auto max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-200/62">
                  Próximo passo
                </p>
                <h2 className="mt-4 text-[2rem] font-semibold leading-[1.06] text-white sm:mt-5 sm:text-5xl sm:leading-[1.04]">
                  Quando a presença digital precisa refletir o nível do seu
                  negócio, a execução também precisa subir de padrão.
                </h2>
                <p className="mt-4 text-base leading-7 text-muted sm:mt-5 sm:text-lg sm:leading-8">
                  Se a sua marca precisa comunicar mais valor, organizar melhor
                  a experiência e sustentar crescimento com uma estrutura mais
                  madura, a Nexora conduz esse próximo passo com precisão.
                </p>
              </div>

              <div className="mx-auto mt-7 flex w-full max-w-md flex-col gap-3 sm:mt-8 sm:max-w-none sm:flex-row sm:justify-center">
                <ButtonLink
                  href={whatsappUrl}
                  icon={<MessageCircleMore className="h-4 w-4" />}
                  external
                  className="w-full justify-center sm:w-auto"
                >
                  Falar no WhatsApp
                </ButtonLink>
                <ButtonLink
                  href={mailtoUrl}
                  variant="secondary"
                  icon={<Mail className="h-4 w-4" />}
                  className="w-full justify-center sm:w-auto"
                >
                  Enviar e-mail
                </ButtonLink>
                <ButtonLink
                  href="#contato"
                  variant="ghost"
                  icon={<ArrowRight className="h-4 w-4" />}
                  className="w-full justify-center sm:w-auto"
                >
                  Solicitar projeto
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>

        <section className="section-anchor py-16 sm:py-20 lg:py-24" id="sobre">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="panel-strong rounded-[2rem] px-5 py-8 sm:rounded-[2.6rem] sm:px-10 sm:py-10">
              <SectionHeading
                eyebrow="Sobre a Nexora"
                title="Uma agência digital para marcas que não podem parecer genéricas."
                description="A Nexora desenvolve estruturas digitais sob medida para posicionamento, operação e crescimento, unindo estratégia, design e tecnologia em uma execução de alto padrão."
                align="center"
              />

              <div className="mx-auto mt-6 grid max-w-5xl gap-3 sm:mt-8 md:grid-cols-3">
                {aboutHighlights.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] px-4 py-4 text-center fade-up sm:rounded-[1.8rem] sm:px-5 sm:py-5"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <p className="text-sm leading-7 text-slate-100/84">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="section-anchor pt-16 pb-8 sm:pt-20 lg:pt-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Contato"
              title="Vamos estruturar o próximo passo digital da sua marca."
              description="Compartilhe contexto, objetivos e o tipo de solução que sua empresa precisa. A partir daí, a conversa fica mais estratégica e mais clara."
              align="center"
            />

            <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-6 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="space-y-3.5 sm:space-y-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="panel lift-hover block w-full rounded-[1.55rem] px-5 py-5 sm:rounded-[1.9rem] sm:px-6 sm:py-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/[0.06] text-brand-strong">
                      <MessageCircleMore className="h-5 w-5 shrink-0" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-200/62">
                        WhatsApp
                      </p>
                      <p className="mt-2 text-base font-semibold text-white sm:text-lg">
                        Canal direto para novos projetos
                      </p>
                      <p className="mt-2 text-[0.95rem] leading-6 text-muted sm:text-sm sm:leading-7">
                        Ideal para iniciar uma conversa rápida sobre escopo,
                        momento do negócio e direção desejada.
                      </p>
                    </div>
                  </div>
                </a>

                <a
                  href={mailtoUrl}
                  className="panel lift-hover block w-full rounded-[1.55rem] px-5 py-5 sm:rounded-[1.9rem] sm:px-6 sm:py-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/[0.06] text-brand-strong">
                      <Mail className="h-5 w-5 shrink-0" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-200/62">
                        E-mail
                      </p>
                      <p className="mt-2 text-base font-semibold text-white sm:text-lg">
                        {contact.email}
                      </p>
                      <p className="mt-2 text-[0.95rem] leading-6 text-muted sm:text-sm sm:leading-7">
                        Melhor opção para enviar briefing, contexto da operação,
                        referências visuais e necessidades com mais profundidade.
                      </p>
                    </div>
                  </div>
                </a>

                <div className="panel-strong w-full rounded-[1.55rem] p-5 sm:rounded-[1.9rem] sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/[0.08] text-brand-strong">
                      <Sparkles className="h-5 w-5 shrink-0" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-base font-semibold text-white sm:text-lg">
                        Direção estratégica, design refinado e execução técnica
                        consistente.
                      </p>
                      <p className="mt-2 text-[0.95rem] leading-6 text-muted sm:text-sm sm:leading-7">
                        A proposta da Nexora é transformar complexidade em uma
                        estrutura clara, elegante e pronta para sustentar
                        percepção de valor e crescimento com mais maturidade.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <ContactForm email={contact.email} />
            </div>
          </div>

          <footer className="mx-auto mt-8 max-w-7xl px-4 sm:mt-10 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 border-t border-white/10 py-7 text-center sm:py-8 lg:flex-row lg:items-end lg:justify-between lg:text-left">
              <div className="mx-auto max-w-md lg:mx-0">
                <NexoraLogo size="sm" />
                <p className="mt-4 text-sm leading-7 text-muted">
                  Soluções digitais sob medida para posicionamento, operação e
                  crescimento com mais clareza, autoridade e acabamento.
                </p>
              </div>

              <div className="flex flex-col gap-4 lg:items-end">
                <nav
                  className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-slate-100/74 lg:justify-end"
                  aria-label="Links do rodapé"
                >
                  {navigation.map((item) => (
                    <a key={item.href} href={item.href} className="hover:text-white">
                      {item.label}
                    </a>
                  ))}
                </nav>

                <p className="text-sm text-muted">
                  © {year} Nexora. Tecnologia que impulsiona negócios.
                </p>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}
