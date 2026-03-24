import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
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
  aboutPillars,
  contact,
  differentials,
  mailtoUrl,
  process,
  projects,
  solutions,
  stats,
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
          className="section-anchor pt-32 pb-22 sm:pt-36 lg:pt-40 lg:pb-28"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
            <div className="relative z-10">
              <div className="chip w-fit">
                Estratégia, design e desenvolvimento sob medida
              </div>

              <div className="mt-8">
                <NexoraLogo size="lg" />
              </div>

              <div className="mt-8 space-y-6">
                <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] text-white sm:text-6xl lg:text-[5.3rem]">
                  Soluções digitais sob medida para negócios que querem crescer
                  com presença, performance e alto padrão.
                </h1>

                <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                  A Nexora desenvolve sites profissionais, landing pages,
                  sistemas web e soluções digitais personalizadas para empresas
                  que não aceitam estruturas genéricas. Cada entrega nasce da
                  identidade, dos objetivos e do estágio de crescimento do
                  cliente.
                </p>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Sites profissionais que comunicam valor e credibilidade.",
                  "Sistemas web construídos para organizar, vender e escalar.",
                  "Interfaces modernas com experiência refinada e intuitiva.",
                  "Projetos exclusivos, sem replicar modelos prontos.",
                ].map((item) => (
                  <div
                    key={item}
                    className="panel flex items-start gap-3 rounded-2xl px-4 py-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-strong" />
                    <p className="text-sm leading-6 text-slate-100/88">{item}</p>
                  </div>
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

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="panel lift-hover rounded-[1.75rem] px-5 py-5"
                  >
                    <p className="text-3xl font-semibold text-white">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <HeroVisual />
          </div>
        </section>

        <section className="section-anchor py-20 lg:py-28" id="sobre">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_1.02fr] lg:px-8">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Sobre a Nexora"
                title="Presença digital forte nasce da união entre visão estratégica, design preciso e tecnologia bem executada."
                description="A Nexora foi posicionada para entregar mais do que presença online: criamos estruturas digitais com linguagem premium, performance consistente e arquitetura preparada para acompanhar a evolução real de cada negócio."
              />

              <p className="max-w-2xl text-lg leading-8 text-slate-100/86">
                Cada projeto é pensado para fortalecer credibilidade, elevar a
                percepção de valor da marca e construir uma base profissional
                capaz de gerar novas oportunidades com clareza, usabilidade e
                consistência técnica.
              </p>

              <div className="panel-strong rounded-[2rem] p-7 sm:p-8">
                <p className="text-xl leading-8 text-white sm:text-2xl">
                  Estruturamos experiências digitais que sustentam crescimento,
                  melhoram a leitura da marca e acompanham a ambição do cliente
                  com fluidez e sofisticação.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {aboutPillars.map((pillar) => {
                const Icon = pillar.icon;

                return (
                  <article
                    key={pillar.title}
                    className="panel lift-hover rounded-[2rem] p-6"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/6 text-brand-strong">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      {pillar.description}
                    </p>
                  </article>
                );
              })}

              <article className="panel-strong shine-border rounded-[2rem] p-7 sm:col-span-2">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="chip">Posicionamento premium</span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-200/78">
                    Estrutura profissional
                  </span>
                </div>
                <p className="mt-7 text-xl leading-8 text-white sm:text-2xl">
                  A entrega da Nexora combina estética de alto padrão, leitura
                  estratégica do negócio e execução técnica limpa para que a
                  presença digital acompanhe o ritmo da empresa, hoje e na
                  próxima fase de crescimento.
                </p>
              </article>
            </div>
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
                  <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(14,24,48,0.98),rgba(7,13,29,0.92))] p-5">
                    <div className="absolute inset-0 grid-mesh opacity-25" />
                    <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(97,166,255,0.16),transparent_68%)] blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative flex items-center justify-between">
                      <span className="chip">{project.category}</span>
                      {project.href ? (
                        <ArrowUpRight className="h-5 w-5 text-white/70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      ) : (
                        <span className="rounded-full border border-white/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-slate-200/70">
                          Solução interna
                        </span>
                      )}
                    </div>

                    <div className="relative mt-8 rounded-[1.45rem] border border-white/10 bg-black/25 p-4 backdrop-blur-xl">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
                      </div>

                      <div className="mt-5 space-y-3">
                        {project.preview.map((line) => (
                          <div
                            key={line}
                            className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/4 px-4 py-3"
                          >
                            <span className="text-sm font-medium text-slate-100/82">
                              {line}
                            </span>
                            <span className="h-2 w-16 rounded-full bg-gradient-to-r from-brand/65 to-accent/55" />
                          </div>
                        ))}
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
                        Projeto apresentado como solução digital desenvolvida
                        para organização operacional e gestão inteligente.
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="panel-strong relative overflow-hidden rounded-[2.8rem] px-8 py-10 sm:px-10 lg:px-12 lg:py-14">
              <div className="pointer-events-none absolute left-0 top-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(97,166,255,0.18),transparent_72%)] blur-2xl" />
              <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.18),transparent_72%)] blur-2xl" />

              <div className="relative grid gap-10 lg:grid-cols-[1fr_1.03fr] lg:gap-14">
                <div>
                  <SectionHeading
                    eyebrow="Exclusividade"
                    title="Projetos que nascem da realidade do cliente, não de modelos prontos."
                    description="A Nexora não replica estruturas genéricas. Cada solução é desenhada conforme o posicionamento, a identidade visual, o fluxo de negócio e as funcionalidades que realmente fazem sentido para a operação."
                  />

                  <p className="mt-6 text-lg leading-8 text-slate-100/86">
                    Isso significa uma entrega mais coerente, mais valiosa e
                    muito mais alinhada ao que a marca precisa transmitir agora
                    e sustentar nos próximos ciclos de crescimento.
                  </p>
                </div>

                <div className="grid gap-4">
                  {process.map((step, index) => (
                    <div
                      key={step.title}
                      className="rounded-[1.9rem] border border-white/10 bg-white/5 px-5 py-5 backdrop-blur-xl"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/7 text-sm font-semibold text-white">
                          0{index + 1}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            {step.title}
                          </h3>
                          <p className="mt-2 text-sm leading-7 text-muted">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="panel-strong rounded-[2.6rem] px-8 py-10 sm:px-10 lg:flex lg:items-end lg:justify-between lg:gap-10">
              <div className="max-w-3xl">
                <div className="chip w-fit">
                  Presença digital premium para negócios ambiciosos
                </div>
                <h2 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl">
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
