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
  contact,
  differentials,
  mailtoUrl,
  navigation,
  projects,
  solutions,
  whatsappUrl,
} from "@/data/site-content";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top,rgba(98,148,255,0.18),transparent_54%)]" />
      <div className="pointer-events-none absolute right-[-18rem] top-[24rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.18),transparent_72%)] blur-3xl" />
      <SiteHeader />

      <main className="relative">
        <section
          id="inicio"
          className="section-anchor pt-32 pb-22 sm:pt-36 lg:pt-24 lg:pb-28"
        >
          <div className="mx-auto hidden max-w-7xl items-center justify-between gap-8 px-6 lg:flex lg:px-8">
            <a href="#inicio" aria-label="Voltar ao início" className="shrink-0">
              <NexoraLogo size="md" />
            </a>

            <div className="flex items-center gap-8">
              <nav className="flex items-center gap-7">
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-slate-100/78 transition hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <ButtonLink href="#contato" size="sm">
                Solicitar projeto
              </ButtonLink>
            </div>
          </div>

          <div className="mx-auto mt-10 grid max-w-7xl items-start gap-14 px-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:px-8">
            <div className="relative z-10">
              <div className="lg:hidden">
                <NexoraLogo size="lg" />
              </div>

              <div className="mt-8 space-y-6">
                <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] text-white sm:text-6xl lg:text-[4.9rem]">
                  Soluções digitais sob medida para crescer com autoridade e
                  performance.
                </h1>

                <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                  Criamos sites, landing pages, sistemas web e soluções sob
                  medida para empresas que precisam comunicar valor e crescer
                  com estrutura profissional.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Design UI/UX",
                  "Site corporativo",
                  "Landing page",
                  "Ecommerce",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100/82"
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
                  Solicitar orçamento
                </ButtonLink>
              </div>
            </div>

            <HeroVisual />
          </div>
        </section>

        <section className="section-anchor py-20 lg:py-28" id="solucoes">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading
              eyebrow="Soluções"
              title="Serviços desenhados para marcas que exigem mais do que uma presença comum."
              description="Da primeira impressão ao fluxo operacional, a Nexora desenvolve estruturas digitais completas para posicionamento, conversão e evolução do negócio."
              align="center"
            />

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {solutions.map((solution) => {
                const Icon = solution.icon;

                return (
                  <article
                    key={solution.title}
                    className="panel lift-hover rounded-[2rem] p-7"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/6 text-brand-strong">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold text-white">
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

        <section className="section-anchor py-20 lg:py-28" id="diferenciais">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading
              eyebrow="Diferenciais"
              title="Autoridade visual, desenvolvimento sob medida e estrutura pensada para objetivos reais."
              description="A Nexora atua com um nível de personalização que respeita a identidade da empresa, o contexto de mercado e o que precisa acontecer depois do lançamento."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
              <div className="panel-strong shine-border rounded-[2.4rem] p-8 sm:p-10">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/8 text-brand-strong">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-200/72">
                    Assinatura Nexora
                  </span>
                </div>

                <p className="mt-8 text-2xl leading-9 text-white sm:text-[2rem] sm:leading-[1.35]">
                  Na Nexora, cada site e sistema é desenvolvido de forma única,
                  de acordo com a identidade, as necessidades e os objetivos de
                  cada cliente.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Arquitetura pensada para autoridade, usabilidade e performance.",
                    "Design estratégico que valoriza a marca sem excessos visuais.",
                    "Soluções alinhadas ao momento e ao objetivo do negócio.",
                    "Execução técnica com acabamento premium em cada detalhe.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.6rem] border border-white/10 bg-white/5 px-4 py-4"
                    >
                      <p className="text-sm leading-7 text-slate-100/86">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4">
                {differentials.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="panel lift-hover rounded-[1.9rem] px-6 py-6"
                    >
                      <div className="flex items-start gap-4">
                        <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/6 text-brand-strong">
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

        <section className="section-anchor py-20 lg:py-28" id="projetos">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading
              eyebrow="Projetos"
              title="Portfólio com foco em presença digital, credibilidade e estrutura inteligente."
              description="Cada entrega traduz uma necessidade diferente de negócio, mantendo o mesmo padrão de clareza visual, experiência refinada e coerência estratégica."
              align="center"
            />

            <div className="mt-12 grid gap-6 xl:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.name}
                  className="panel group lift-hover overflow-hidden rounded-[2.2rem] p-5 sm:p-6"
                >
                  <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(14,24,48,0.98),rgba(7,13,29,0.92))] p-3 sm:p-4">
                    <div className="absolute inset-0 grid-mesh opacity-20" />

                    <div className="relative flex items-center justify-between px-1 pb-3">
                      <span className="chip">{project.category}</span>
                      {project.href ? (
                        <ArrowUpRight className="h-5 w-5 text-white/70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      ) : (
                        <span className="rounded-full border border-white/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-slate-200/70">
                          Solução interna
                        </span>
                      )}
                    </div>

                    <div className="relative aspect-[4/5] overflow-hidden rounded-[1.45rem] border border-white/10 bg-[#08111f]">
                      <Image
                        src={project.imageSrc}
                        alt={project.imageAlt}
                        fill
                        sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                        className={`transition duration-500 group-hover:scale-[1.02] ${
                          project.imageFit === "contain"
                            ? "object-contain p-4"
                            : "object-cover object-top"
                        }`}
                      />
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#07101b] via-[#07101b]/55 to-transparent" />
                      <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/45 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/82 backdrop-blur-xl">
                        {project.imageBadge}
                      </div>
                    </div>
                  </div>

                  <div className="mt-7 space-y-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-strong/82">
                        {project.kicker}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold text-white">
                        {project.name}
                      </h3>
                    </div>
                    <p className="text-base leading-7 text-muted">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.preview.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-100/80"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    {project.href ? (
                      <ButtonLink
                        href={project.href}
                        variant="ghost"
                        external
                        icon={<ArrowUpRight className="h-4 w-4" />}
                        className="mt-1"
                      >
                        Ver projeto
                      </ButtonLink>
                    ) : (
                      <p className="text-sm leading-7 text-slate-200/72">
                        Exemplo visual de uma interface CRM para demonstrar como
                        a Nexora organiza processos, centraliza informações e
                        transforma operação em clareza.
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
            <div className="panel-strong rounded-[2.6rem] px-8 py-10 sm:px-10 lg:flex lg:items-end lg:justify-between lg:gap-10">
              <div className="max-w-3xl">
                <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                  Seu negócio merece uma presença digital à altura da sua
                  ambição.
                </h2>
                <p className="mt-5 text-lg leading-8 text-muted">
                  Se a sua marca precisa comunicar mais valor, vender com mais
                  clareza e operar com uma estrutura digital superior, a Nexora
                  está pronta para desenhar esse próximo nível com você.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-wrap lg:justify-end">
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
            <div className="panel-strong rounded-[2.6rem] px-8 py-10 sm:px-10 lg:grid lg:grid-cols-[1fr_0.9fr] lg:gap-10">
              <div>
                <SectionHeading
                  eyebrow="Sobre a Nexora"
                  title="Estratégia, design e tecnologia para construir presença digital com autoridade."
                  description="A Nexora desenvolve sites, sistemas e estruturas digitais sob medida para marcas que precisam comunicar valor e crescer com consistência."
                />
              </div>

              <div className="mt-8 grid gap-4 lg:mt-0">
                {[
                  "Projetos sob medida, sem soluções genéricas.",
                  "Design profissional com leitura clara e premium.",
                  "Estrutura pensada para performance, usabilidade e evolução.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.8rem] border border-white/10 bg-white/5 px-5 py-5"
                  >
                    <p className="text-sm leading-7 text-slate-100/84">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="section-anchor pt-20 pb-10 lg:pt-28">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.94fr_1.06fr] lg:px-8">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Contato"
                title="Vamos construir a próxima fase digital da sua empresa."
                description="Converse com a Nexora para estruturar um site premium, uma landing page de alta conversão, um sistema web ou uma solução personalizada para a sua operação."
              />

              <div className="grid gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="panel lift-hover rounded-[1.8rem] px-6 py-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/7 text-brand-strong">
                      <MessageCircleMore className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-200/66">
                        WhatsApp
                      </p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        Atendimento direto para novos projetos
                      </p>
                      <p className="mt-2 text-sm leading-7 text-muted">
                        Abra a conversa com uma mensagem pronta e alinhe escopo,
                        objetivos e próximos passos com rapidez.
                      </p>
                    </div>
                  </div>
                </a>

                <a
                  href={mailtoUrl}
                  className="panel lift-hover rounded-[1.8rem] px-6 py-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/7 text-brand-strong">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-200/66">
                        E-mail
                      </p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        {contact.email}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-muted">
                        Ideal para enviar briefing, contexto do negócio e
                        referências do projeto com mais profundidade.
                      </p>
                    </div>
                  </div>
                </a>

                <div className="panel-strong rounded-[1.8rem] p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/8 text-brand-strong">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-white">
                        Atendimento com visão estratégica e execução técnica
                        refinada.
                      </p>
                      <p className="mt-2 text-sm leading-7 text-muted">
                        A proposta da Nexora é entregar uma solução que fortaleça
                        sua marca, organize a experiência do usuário e sustente
                        crescimento com clareza visual e consistência estrutural.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm email={contact.email} />
          </div>

          <footer className="mx-auto mt-10 max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col gap-5 border-t border-white/10 py-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col gap-2">
                <NexoraLogo size="sm" showTagline={false} />
                <p className="text-sm text-muted">
                  Tecnologia que impulsiona negócios.
                </p>
              </div>

              <p className="text-sm text-muted">
                © {year} Nexora. Estruturas digitais premium para marcas que
                querem crescer com presença, performance e exclusividade.
              </p>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}
