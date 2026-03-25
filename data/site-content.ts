import type { LucideIcon } from "lucide-react";
import {
  Blocks,
  Code2,
  Gauge,
  LayoutTemplate,
  MonitorSmartphone,
  Palette,
  Rocket,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Waypoints,
  Workflow,
} from "lucide-react";
import {
  publicContact,
  publicMailtoUrl,
  publicWhatsappUrl,
} from "@/lib/contact-config";

type NavigationItem = {
  label: string;
  href: `#${string}`;
};

type ItemWithIcon = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type ProcessStep = {
  icon: LucideIcon;
  title: string;
  description: string;
  note: string;
};

type Project = {
  name: string;
  category: string;
  kindLabel: string;
  kicker: string;
  description: string;
  outcome: string;
  preview: string[];
  imageSrc: string;
  imageAlt: string;
  imageBadge: string;
  imageFit?: "cover" | "contain";
  href?: string;
  buttonLabel?: string;
};

export const contact = publicContact;

export const whatsappUrl = publicWhatsappUrl;

export const mailtoUrl = publicMailtoUrl;

export const navigation: NavigationItem[] = [
  { label: "Início", href: "#inicio" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Projetos", href: "#projetos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

export const heroHighlights = [
  "Sites institucionais",
  "Landing pages",
  "Sistemas web",
  "Estruturas sob medida",
];

export const solutions: ItemWithIcon[] = [
  {
    icon: MonitorSmartphone,
    title: "Sites institucionais",
    description:
      "Estruturas institucionais com leitura premium para marcas que precisam transmitir autoridade, clareza e consistência.",
  },
  {
    icon: LayoutTemplate,
    title: "Landing pages",
    description:
      "Páginas desenhadas para campanhas, ofertas e captação com narrativa precisa, ritmo visual refinado e foco em conversão.",
  },
  {
    icon: Workflow,
    title: "Sistemas web",
    description:
      "Interfaces para operação, gestão e produtividade, organizadas para tornar processos mais claros, eficientes e escaláveis.",
  },
  {
    icon: Blocks,
    title: "Soluções personalizadas",
    description:
      "Funcionalidades, fluxos, áreas restritas e integrações construídos a partir da realidade do negócio, não de estruturas prontas.",
  },
  {
    icon: Sparkles,
    title: "Interfaces modernas",
    description:
      "Experiências digitais com acabamento sofisticado, boa hierarquia de informação e sensação de produto maduro desde a primeira interação.",
  },
  {
    icon: Gauge,
    title: "Estruturas para crescimento",
    description:
      "Projetos pensados para posicionamento, performance e evolução contínua da presença digital e da operação.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    icon: ScanSearch,
    title: "Diagnóstico e direção",
    description:
      "Entendimento do contexto da marca, do momento do negócio e do papel estratégico que a estrutura digital precisa cumprir.",
    note: "Base conceitual e comercial antes do layout.",
  },
  {
    icon: Palette,
    title: "Arquitetura e interface",
    description:
      "Definição de narrativa, hierarquia visual e experiência para que a percepção de valor seja clara e coerente.",
    note: "Design orientado por posicionamento e leitura.",
  },
  {
    icon: Code2,
    title: "Desenvolvimento e refinamento",
    description:
      "Construção técnica com cuidado de acabamento, consistência visual e estrutura pronta para operar com fluidez.",
    note: "Execução limpa, responsiva e sob medida.",
  },
  {
    icon: Rocket,
    title: "Entrega pronta para crescer",
    description:
      "Publicação com base sólida para evolução, facilitando novos ajustes, campanhas, integrações ou expansão operacional.",
    note: "Clareza hoje, escalabilidade depois.",
  },
];

export const differentials: ItemWithIcon[] = [
  {
    icon: Sparkles,
    title: "Cada entrega parte do negócio",
    description:
      "A direção visual e funcional nasce da identidade da marca, do objetivo comercial e do nível de maturidade da operação.",
  },
  {
    icon: Blocks,
    title: "Nada é encaixado em modelo pronto",
    description:
      "A estrutura é desenhada para o projeto, sem reaproveitar soluções genéricas que diluem posicionamento e percepção de valor.",
  },
  {
    icon: Waypoints,
    title: "Decisões guiadas por clareza",
    description:
      "Narrativa, usabilidade e arquitetura caminham juntas para conduzir leitura, reforçar autoridade e facilitar o próximo passo.",
  },
  {
    icon: ShieldCheck,
    title: "Acabamento visual e técnico de alto padrão",
    description:
      "A experiência é refinada em tipografia, ritmo, comportamento e implementação para que a entrega pareça madura em cada detalhe.",
  },
];

export const projects: Project[] = [
  {
    name: "Sistema CRM sob medida",
    category: "Sistema web",
    kindLabel: "Exemplo visual",
    kicker: "Pipeline, operação e gestão em uma só interface",
    description:
      "Exemplo visual criado para mostrar como a Nexora organiza relacionamento comercial, tarefas e indicadores em uma estrutura mais clara e madura.",
    outcome:
      "Posiciona a Nexora além da vitrine institucional e evidencia capacidade para desenhar sistemas sob medida com leitura premium.",
    preview: [
      "Pipeline visual",
      "Gestão operacional",
      "Visão estratégica",
    ],
    imageSrc: "/project-previews/crm-example.svg",
    imageAlt:
      "Exemplo visual de um sistema CRM com pipeline comercial, indicadores e acompanhamento operacional.",
    imageBadge: "Exemplo visual",
  },
  {
    name: "Landing page para delivery",
    category: "Landing page",
    kindLabel: "Projeto real",
    kicker: "Cardápio, posicionamento e contato rápido",
    description:
      "Estrutura criada para valorizar produtos, organizar a apresentação da marca e facilitar o contato direto com o cliente.",
    outcome:
      "Mostra como uma landing page pode unir apelo comercial, leitura clara e operação simples sem parecer genérica.",
    href: "https://marmitasdanida.vercel.app/",
    buttonLabel: "Abrir projeto",
    preview: [
      "Cardápio em destaque",
      "Contato simplificado",
      "Leitura mobile",
    ],
    imageSrc: "/project-previews/marmitas-da-nida.png",
    imageAlt:
      "Preview de uma landing page para delivery com cardápio, destaques e blocos institucionais.",
    imageBadge: "Projeto real",
  },
  {
    name: "Site institucional para serviços",
    category: "Site institucional",
    kindLabel: "Projeto real",
    kicker: "Credibilidade, clareza e geração de contato",
    description:
      "Modelo pensado para apresentar serviços com mais peso visual, reforçar percepção de valor e apoiar a captação de novos contatos.",
    outcome:
      "Demonstra como uma estrutura institucional pode elevar confiança, leitura e autoridade comercial.",
    href: "https://fortlar.vercel.app/",
    buttonLabel: "Abrir projeto",
    preview: [
      "Apresentação de serviços",
      "Posicionamento sólido",
      "Captação de leads",
    ],
    imageSrc: "/project-previews/fortlar.png",
    imageAlt:
      "Preview de um site institucional para serviços com hero comercial, formulário de orçamento e blocos de apresentação.",
    imageBadge: "Projeto real",
  },
  {
    name: "Vitrine digital para loja premium",
    category: "Catálogo / Ecommerce",
    kindLabel: "Projeto real",
    kicker: "Produto, prova social e atendimento direto",
    description:
      "Projeto voltado para valorizar catálogo, acelerar atendimento comercial e construir uma experiência mais forte para marcas de varejo premium.",
    outcome:
      "Reforça como design, curadoria visual e fluxo de contato podem trabalhar juntos para aumentar percepção de valor.",
    href: "https://ciaphone.vercel.app/",
    buttonLabel: "Abrir projeto",
    preview: [
      "Vitrine de produtos",
      "Prova social",
      "Contato via WhatsApp",
    ],
    imageSrc: "/project-previews/ciaphone.png",
    imageAlt:
      "Preview de uma vitrine digital para loja premium com hero de produtos, seções comerciais e destaque para conversão.",
    imageBadge: "Projeto real",
  },
];

export const aboutHighlights = [
  "Projetos sob medida, sem soluções genéricas.",
  "Design estratégico com leitura premium e alto valor percebido.",
  "Estrutura técnica pensada para performance, usabilidade e evolução.",
];
