import type { LucideIcon } from "lucide-react";
import {
  Blocks,
  Gauge,
  LayoutTemplate,
  MonitorSmartphone,
  Palette,
  ShieldCheck,
  Sparkles,
  Waypoints,
  Workflow,
} from "lucide-react";

type NavigationItem = {
  label: string;
  href: `#${string}`;
};

type ItemWithIcon = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type Project = {
  name: string;
  category: string;
  kicker: string;
  description: string;
  preview: string[];
  imageSrc: string;
  imageAlt: string;
  imageBadge: string;
  imageFit?: "cover" | "contain";
  href?: string;
};

export const contact = {
  email: "contato@nexora.com.br",
  whatsappNumber: "5500000000000",
  whatsappMessage:
    "Olá, quero conversar sobre um projeto digital com a Nexora.",
};

const normalizedWhatsapp = contact.whatsappNumber.replace(/\D/g, "");

export const whatsappUrl = `https://wa.me/${normalizedWhatsapp}?text=${encodeURIComponent(
  contact.whatsappMessage,
)}`;

export const mailtoUrl = `mailto:${contact.email}?subject=${encodeURIComponent(
  "Projeto digital com a Nexora",
)}`;

export const navigation: NavigationItem[] = [
  { label: "Início", href: "#inicio" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Projetos", href: "#projetos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

export const solutions: ItemWithIcon[] = [
  {
    icon: MonitorSmartphone,
    title: "Sites institucionais",
    description:
      "Presenças digitais premium para empresas que precisam comunicar valor, autoridade e consistência profissional.",
  },
  {
    icon: LayoutTemplate,
    title: "Landing pages",
    description:
      "Páginas de alta conversão com copy estratégica, ritmo visual sofisticado e foco absoluto em performance.",
  },
  {
    icon: Workflow,
    title: "Sistemas web",
    description:
      "Plataformas desenvolvidas para organizar processos, centralizar informações e apoiar a operação com inteligência.",
  },
  {
    icon: Blocks,
    title: "Soluções personalizadas",
    description:
      "Fluxos, áreas restritas, integrações e funcionalidades criadas conforme o contexto real do negócio.",
  },
  {
    icon: Sparkles,
    title: "Interfaces modernas",
    description:
      "Experiências digitais elegantes, intuitivas e alinhadas à expectativa de marcas que buscam alto padrão.",
  },
  {
    icon: Gauge,
    title: "Estruturas digitais para negócios",
    description:
      "Ecossistemas pensados para autoridade, usabilidade, velocidade e evolução contínua da presença online.",
  },
];

export const differentials: ItemWithIcon[] = [
  {
    icon: Sparkles,
    title: "Cada projeto é único",
    description:
      "A solução nasce da identidade da marca, da maturidade do negócio e do resultado que o projeto precisa gerar.",
  },
  {
    icon: Blocks,
    title: "Desenvolvimento sob medida",
    description:
      "Nada é encaixado à força em estruturas prontas. A construção respeita escopo, contexto e prioridades reais.",
  },
  {
    icon: Palette,
    title: "Design estratégico e profissional",
    description:
      "A estética trabalha a favor do posicionamento, da credibilidade e da experiência, sem ruído visual desnecessário.",
  },
  {
    icon: Waypoints,
    title: "Soluções alinhadas ao objetivo do cliente",
    description:
      "Cada decisão de estrutura, funcionalidade e narrativa é pensada para responder a uma meta concreta do projeto.",
  },
  {
    icon: Gauge,
    title: "Autoridade, usabilidade e performance",
    description:
      "A base técnica e visual é planejada para transmitir confiança, facilitar navegação e sustentar boa velocidade.",
  },
  {
    icon: ShieldCheck,
    title: "Alto padrão visual e técnico",
    description:
      "O acabamento combina linguagem premium, execução limpa e coerência de ponta a ponta na experiência digital.",
  },
];

export const projects: Project[] = [
  {
    name: "Landing page para delivery",
    category: "Landing page",
    kicker: "Cardápio e geração de contato",
    description:
      "Estrutura criada para valorizar produtos, reforçar presença digital e transformar interesse em contato com mais rapidez.",
    href: "https://marmitasdanida.vercel.app/",
    preview: [
      "Cardápio em destaque",
      "Contato simplificado",
      "Experiência mobile",
    ],
    imageSrc: "/project-previews/marmitas-da-nida.png",
    imageAlt:
      "Preview de uma landing page para delivery com cardápio, destaques e blocos institucionais.",
    imageBadge: "Preview real",
  },
  {
    name: "Site institucional para serviços",
    category: "Site institucional",
    kicker: "Credibilidade e captação",
    description:
      "Modelo pensado para apresentar serviços com clareza, fortalecer a percepção de valor da marca e apoiar a entrada de novos contatos.",
    href: "https://fortlar.vercel.app/",
    preview: [
      "Apresentação de serviços",
      "Posicionamento sólido",
      "Captação de leads",
    ],
    imageSrc: "/project-previews/fortlar.png",
    imageAlt:
      "Preview de um site institucional para serviços com hero comercial, formulário de orçamento e blocos de apresentação.",
    imageBadge: "Preview real",
  },
  {
    name: "Vitrine digital para loja premium",
    category: "Catálogo / Ecommerce",
    kicker: "Produto em destaque e atendimento rápido",
    description:
      "Projeto voltado para valorizar produtos, acelerar o atendimento comercial e criar uma experiência mais forte para marcas de varejo premium.",
    href: "https://ciaphone.vercel.app/",
    preview: [
      "Vitrine de produtos",
      "Prova social",
      "Contato via WhatsApp",
    ],
    imageSrc: "/project-previews/ciaphone.png",
    imageAlt:
      "Preview de uma vitrine digital para loja premium com hero de produtos, seções comerciais e destaque para conversão.",
    imageBadge: "Preview real",
  },
  {
    name: "Sistema CRM sob medida",
    category: "Sistema web",
    kicker: "Gestão operacional",
    description:
      "Interface desenvolvida para organizar processos, centralizar informações e dar mais clareza à rotina operacional do negócio.",
    preview: [
      "Processos centralizados",
      "Visão operacional",
      "Rotina mais inteligente",
    ],
    imageSrc: "/project-previews/crm-example.svg",
    imageAlt:
      "Exemplo visual de um sistema CRM com métricas, pipeline comercial e tabela de clientes.",
    imageBadge: "Exemplo visual",
    imageFit: "contain",
  },
];
