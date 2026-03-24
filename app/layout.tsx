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
    "Agência digital premium especializada em sites profissionais, landing pages, sistemas web e soluções digitais sob medida para empresas que buscam presença, performance e crescimento.",
  keywords: [
    "agência digital",
    "sites profissionais",
    "landing pages",
    "sistemas web",
    "soluções digitais",
    "desenvolvimento sob medida",
    "Nexora",
  ],
  category: "technology",
  authors: [{ name: "Nexora" }],
  openGraph: {
    title: "Nexora | Tecnologia que impulsiona negócios.",
    description:
      "Sites profissionais, landing pages, sistemas web e soluções digitais exclusivas para negócios que querem crescer com alto padrão.",
    locale: "pt_BR",
    type: "website",
    siteName: "Nexora",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexora | Tecnologia que impulsiona negócios.",
    description:
      "Soluções digitais sob medida para marcas que exigem presença, performance e sofisticação.",
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
