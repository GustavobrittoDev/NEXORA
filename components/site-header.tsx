"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NexoraLogo } from "@/components/nexora-logo";
import { ButtonLink } from "@/components/ui/button-link";
import { navigation } from "@/data/site-content";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <div
          className={[
            "rounded-full border transition-all duration-300",
            isScrolled
              ? "border-white/12 bg-[#07101d]/82 shadow-[0_24px_70px_-34px_rgba(3,7,18,0.95)] backdrop-blur-2xl"
              : "border-white/10 bg-[#07101d]/58 backdrop-blur-xl",
          ].join(" ")}
        >
          <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-5 lg:hidden">
            <a
              href="#inicio"
              aria-label="Voltar ao início"
              className="shrink-0"
              onClick={() => setIsOpen(false)}
            >
              <NexoraLogo size="sm" showTagline={false} />
            </a>

            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white transition hover:bg-white/[0.1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-strong/70"
              onClick={() => setIsOpen((current) => !current)}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <div className="hidden items-center px-6 py-3 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-6">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-slate-200/56">
              Tecnologia que impulsiona negócios.
            </p>

            <nav
              className="flex items-center justify-center gap-7"
              aria-label="Navegação principal"
            >
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-slate-100/74 transition hover:text-white focus-visible:outline-none focus-visible:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="justify-self-end">
              <ButtonLink href="#contato" size="sm">
                Iniciar projeto
              </ButtonLink>
            </div>
          </div>

          {isOpen ? (
            <div
              id="mobile-navigation"
              className="border-t border-white/8 px-4 pb-4 pt-2 sm:px-5 lg:hidden"
            >
              <nav className="flex flex-col gap-2" aria-label="Menu mobile">
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl px-3 py-3 text-sm font-medium text-slate-100/82 transition hover:bg-white/[0.06] hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mt-4">
                <ButtonLink
                  href="#contato"
                  size="sm"
                  className="w-full justify-center"
                >
                  Iniciar projeto
                </ButtonLink>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
