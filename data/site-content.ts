import type { LucideIcon } from "lucide-react";
import {
  Blocks,
  Gauge,
  LayoutTemplate,
  MonitorSmartphone,
  Palette,
  ScanSearch,
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
  href?: string;
};

type Stat = {
  value: string;
  label: string;
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

export const stats: Stat[] = [
  {
    value: "100%",
    label: "Projetos concebidos sob medida para a realidade de cada cliente.",
  },
  {
    value: "UI + UX",
    label: "Interfaces modernas com leitura premium, fluidez e clareza.",
  },
  {
    value: "Web",
    label: "Sites, sistemas e estruturas digitais preparados para evoluir.",
  },
];

export const aboutPillars: ItemWithIcon[] = [
  {
    icon: ScanSearch,
    title: "Leitura estratégica",
    description:
      "Entendimento profundo do negócio, do momento da marca e da função real que o projeto precisa cumprir.",
  },
  {
    icon: Palette,
    title: "Design com posicionamento",
    description:
      "Construção visual refinada, coerente com o nível de mercado da empresa e com o valor que ela precisa transmitir.",
  },
  {
    icon: Workflow,
    title: "Tecnologia aplicada",
    description:
      "Desenvolvimento com foco em performance, usabilidade e facilidade de expansão conforme a operação cresce.",
  },
  {
    icon: ShieldCheck,
    title: "Estrutura profissional",
    description:
      "Cada interface é organizada para gerar confiança, facilitar decisões e sustentar uma experiência mais madura.",
  },
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
    name: "Marmitas da Nida",
    category: "Landing page",
    kicker: "Cardápio e presença online",
    description:
      "Projeto digital desenvolvido para apresentar cardápio, fortalecer presença online e facilitar o contato com clientes.",
    href: "https://marmitasdanida.vercel.app/",
    preview: ["Cardápio em destaque", "Contato simplificado", "Experiência mobile"],
  },
  {
    name: "Fortlar",
    category: "Site profissional",
    kicker: "Serviços e credibilidade",
    description:
      "Site profissional voltado para apresentação de serviços, fortalecimento da credibilidade e geração de contatos.",
    href: "https://fortlar.vercel.app/",
    preview: ["Apresentação de serviços", "Posicionamento sólido", "Captação de leads"],
  },
  {
    name: "CRM",
    category: "Sistema web",
    kicker: "Gestão operacional",
    description:
      "Sistema desenvolvido para organizar processos, centralizar informações e melhorar a gestão operacional do negócio.",
    preview: ["Processos centralizados", "Visão operacional", "Rotina mais inteligente"],
  },
];

export const process = [
  {
    title: "Imersão no negócio",
    description:
      "Entendimento do posicionamento, das dores, do cenário atual e do que a solução precisa resolver de verdade.",
  },
  {
    title: "Estrutura e identidade",
    description:
      "Definição da narrativa, da arquitetura da interface e dos elementos que tornam o projeto coerente com a marca.",
  },
  {
    title: "Desenvolvimento com propósito",
    description:
      "Implementação técnica orientada por performance, usabilidade e longevidade, sem recorrer a soluções genéricas.",
  },
];
