import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nexora | Tecnologia que impulsiona negócios.",
    template: "%s | Nexora",
  },
  description:
    "Agência digital premium especializada em sites institucionais, landing pages, sistemas web e soluções digitais sob medida para marcas que buscam clareza, autoridade e performance.",
  keywords: [
    "agência digital premium",
    "sites institucionais",
    "landing pages",
    "sistemas web",
    "soluções digitais sob medida",
    "desenvolvimento web premium",
    "Nexora",
  ],
  category: "technology",
  authors: [{ name: "Nexora" }],
  applicationName: "Nexora",
  openGraph: {
    title: "Nexora | Tecnologia que impulsiona negócios.",
    description:
      "Arquitetura digital sob medida para marcas que precisam crescer com autoridade, clareza e alto padrão.",
    locale: "pt_BR",
    type: "website",
    siteName: "Nexora",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexora | Tecnologia que impulsiona negócios.",
    description:
      "Sites, sistemas e estruturas digitais sob medida para negócios que não podem parecer genéricos.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
