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
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top,rgba(98,148,255,0.16),transparent_56%)]" />
      <div className="pointer-events-none absolute right-[-16rem] top-[28rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.12),transparent_72%)] blur-3xl" />
      <SiteHeader />

      <main className="relative">
        <section
          id="inicio"
          className="section-anchor pt-32 pb-24 sm:pt-36 lg:pt-[8.75rem] lg:pb-28"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 lg:px-8">
            <div className="relative z-10 fade-up">
              <NexoraLogo size="lg" />

              <div className="mt-10 max-w-3xl space-y-6">
                <h1 className="text-5xl font-semibold leading-[0.94] text-white sm:text-6xl lg:text-[5rem]">
                  Arquitetura digital sob medida para marcas que precisam
                  crescer com autoridade.
                </h1>

                <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                  Da presença institucional à operação, a Nexora desenvolve
                  sites, sistemas e interfaces exclusivas para negócios que
                  exigem clareza, performance e valor percebido.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {heroHighlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-medium text-slate-100/80"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink
                  href={whatsappUrl}
                  icon={<MessageCircleMore className="h-4 w-4" />}
                  external
                >
                  Falar no WhatsApp
                </ButtonLink>
                <ButtonLink
                  href="#contato"
                  variant="secondary"
                  icon={<ArrowRight className="h-4 w-4" />}
                >
                  Solicitar projeto
                </ButtonLink>
              </div>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-200/68">
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

        <section className="section-anchor py-20 lg:py-24" id="solucoes">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading
              eyebrow="Soluções"
              title="Soluções desenhadas para marcas que precisam parecer tão sólidas quanto operam."
              description="Sites, landing pages, sistemas e estruturas digitais pensados para posicionamento, conversão e evolução com mais clareza."
              align="center"
            />

            <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;

                return (
                  <article
                    key={solution.title}
                    className="panel lift-hover rounded-[2rem] p-6 fade-up"
                    style={{ animationDelay: `${index * 70}ms` }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.06] text-brand-strong">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-slate-200/48">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-6 text-2xl font-semibold leading-tight text-white">
                      {solution.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-muted">
                      {solution.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading
              eyebrow="Processo"
              title="Uma abordagem orientada por negócio, design e execução."
              description="A Nexora estrutura cada etapa para que posicionamento, experiência e implementação avancem com direção clara."
              align="center"
            />

            <div className="mt-12 grid gap-4 lg:grid-cols-4">
              {processSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.title}
                    className="panel rounded-[2rem] p-6 fade-up"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.06] text-brand-strong">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-slate-200/48">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-5 text-xl font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      {step.description}
                    </p>
                    <p className="mt-4 border-t border-white/8 pt-4 text-sm leading-6 text-slate-200/66">
                      {step.note}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-anchor py-20 lg:py-24" id="diferenciais">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading
              eyebrow="Diferenciais"
              title="Exclusividade não é discurso. É método, decisão e acabamento."
              description="Cada entrega parte da identidade da marca, do contexto do negócio e do que a estrutura digital precisa sustentar depois do lançamento."
              align="center"
            />

            <div className="mt-12 grid gap-5 lg:grid-cols-[1.04fr_0.96fr]">
              <article className="panel-strong shine-border rounded-[2.5rem] p-8 sm:p-10">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.08] text-brand-strong">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-200/68">
                    Assinatura Nexora
                  </span>
                </div>

                <h3 className="mt-8 max-w-2xl text-[2rem] font-semibold leading-[1.18] text-white sm:text-[2.35rem]">
                  Na Nexora, cada site e cada sistema é tratado como uma peça
                  de posicionamento e de estrutura.
                </h3>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200/76">
                  Por isso, design, narrativa, usabilidade e desenvolvimento são
                  definidos de forma sob medida. O objetivo não é apenas entregar
                  uma interface bonita, mas uma presença digital que pareça
                  madura, confiável e alinhada ao nível da marca.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Cada projeto nasce do contexto real do negócio.",
                    "Posicionamento visual e função caminham juntos.",
                    "Nada é replicado sem critério ou intenção.",
                    "Acabamento premium em comportamento, tipografia e estrutura.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.45rem] border border-white/10 bg-white/[0.04] px-4 py-4"
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
                      className="panel lift-hover rounded-[2rem] px-6 py-6 fade-up"
                      style={{ animationDelay: `${index * 80}ms` }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/[0.06] text-brand-strong">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-sm leading-7 text-muted">
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

        <section className="section-anchor py-20 lg:py-24" id="projetos">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading
              eyebrow="Projetos"
              title="Cases e modelos que mostram como a estratégia se traduz em estrutura digital."
              description="Projetos reais convivem com exemplos conceituais para demonstrar repertório visual, capacidade técnica e clareza de execução."
              align="center"
            />

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {projects.map((project, index) => (
                <article
                  key={project.name}
                  className="panel group lift-hover overflow-hidden rounded-[2rem] p-4 fade-up"
                  style={{ animationDelay: `${index * 75}ms` }}
                >
                  <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(14,24,48,0.96),rgba(7,13,29,0.92))] p-2.5">
                    <div className="absolute inset-0 grid-mesh opacity-18" />

                    <div className="relative flex items-center justify-between gap-3 px-1 pb-2.5">
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

                    <div className="relative aspect-[16/11] overflow-hidden rounded-[1.2rem] border border-white/10 bg-[#08111f]">
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

                  <div className="mt-4 space-y-3">
                    <div>
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-brand-strong/84">
                        {project.kicker}
                      </p>
                      <h3 className="mt-2 text-[1.32rem] font-semibold leading-tight text-white">
                        {project.name}
                      </h3>
                    </div>

                    <p className="text-sm leading-6 text-muted">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.preview.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1.5 text-[0.72rem] font-medium text-slate-100/80"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <p className="border-t border-white/8 pt-3 text-sm leading-6 text-slate-200/68">
                      {project.outcome}
                    </p>

                    {project.href ? (
                      <ButtonLink
                        href={project.href}
                        variant="ghost"
                        external
                        icon={<ArrowUpRight className="h-4 w-4" />}
                        className="mt-1"
                      >
                        {project.buttonLabel}
                      </ButtonLink>
                    ) : (
                      <p className="text-sm leading-6 text-slate-200/68">
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

        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="panel-strong rounded-[2.7rem] px-8 py-10 text-center sm:px-10 lg:px-12">
              <div className="mx-auto max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-200/62">
                  Próximo passo
                </p>
                <h2 className="mt-5 text-4xl font-semibold leading-[1.04] text-white sm:text-5xl">
                  Quando a presença digital precisa refletir o nível do seu
                  negócio, a execução também precisa subir de padrão.
                </h2>
                <p className="mt-5 text-lg leading-8 text-muted">
                  Se a sua marca precisa comunicar mais valor, organizar melhor
                  a experiência e sustentar crescimento com uma estrutura mais
                  madura, a Nexora conduz esse próximo passo com precisão.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <ButtonLink
                  href={whatsappUrl}
                  icon={<MessageCircleMore className="h-4 w-4" />}
                  external
                >
                  Falar no WhatsApp
                </ButtonLink>
                <ButtonLink
                  href={mailtoUrl}
                  variant="secondary"
                  icon={<Mail className="h-4 w-4" />}
                >
                  Enviar e-mail
                </ButtonLink>
                <ButtonLink
                  href="#contato"
                  variant="ghost"
                  icon={<ArrowRight className="h-4 w-4" />}
                >
                  Solicitar projeto
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>

        <section className="section-anchor py-20 lg:py-24" id="sobre">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="panel-strong rounded-[2.6rem] px-8 py-10 sm:px-10">
              <SectionHeading
                eyebrow="Sobre a Nexora"
                title="Uma agência digital para marcas que não podem parecer genéricas."
                description="A Nexora desenvolve estruturas digitais sob medida para posicionamento, operação e crescimento, unindo estratégia, design e tecnologia em uma execução de alto padrão."
                align="center"
              />

              <div className="mx-auto mt-8 grid max-w-5xl gap-3 md:grid-cols-3">
                {aboutHighlights.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-[1.8rem] border border-white/10 bg-white/[0.05] px-5 py-5 text-center fade-up"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <p className="text-sm leading-7 text-slate-100/84">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="section-anchor pt-20 pb-10 lg:pt-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading
              eyebrow="Contato"
              title="Vamos estruturar o próximo passo digital da sua marca."
              description="Compartilhe contexto, objetivos e o tipo de solução que sua empresa precisa. A partir daí, a conversa fica mais estratégica e mais clara."
              align="center"
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="space-y-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="panel lift-hover rounded-[1.9rem] px-6 py-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/[0.06] text-brand-strong">
                      <MessageCircleMore className="h-5 w-5 shrink-0" />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-200/62">
                        WhatsApp
                      </p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        Canal direto para novos projetos
                      </p>
                      <p className="mt-2 text-sm leading-7 text-muted">
                        Ideal para iniciar uma conversa rápida sobre escopo,
                        momento do negócio e direção desejada.
                      </p>
                    </div>
                  </div>
                </a>

                <a
                  href={mailtoUrl}
                  className="panel lift-hover rounded-[1.9rem] px-6 py-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/[0.06] text-brand-strong">
                      <Mail className="h-5 w-5 shrink-0" />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-200/62">
                        E-mail
                      </p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        {contact.email}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-muted">
                        Melhor opção para enviar briefing, contexto da operação,
                        referências visuais e necessidades com mais profundidade.
                      </p>
                    </div>
                  </div>
                </a>

                <div className="panel-strong rounded-[1.9rem] p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/[0.08] text-brand-strong">
                      <Sparkles className="h-5 w-5 shrink-0" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-white">
                        Direção estratégica, design refinado e execução técnica
                        consistente.
                      </p>
                      <p className="mt-2 text-sm leading-7 text-muted">
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

          <footer className="mx-auto mt-10 max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col gap-6 border-t border-white/10 py-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-md">
                <NexoraLogo size="sm" />
                <p className="mt-4 text-sm leading-7 text-muted">
                  Soluções digitais sob medida para posicionamento, operação e
                  crescimento com mais clareza, autoridade e acabamento.
                </p>
              </div>

              <div className="flex flex-col gap-4 lg:items-end">
                <nav
                  className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-100/74"
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
