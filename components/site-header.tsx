"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-2 sm:px-6 sm:pt-4 lg:px-8">
        <div className="lg:hidden">
          <button
            type="button"
            className={[
              "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-strong/70",
              isScrolled ? "bg-[#07101d]/70 backdrop-blur-xl" : "bg-transparent",
            ].join(" ")}
            onClick={() => setIsOpen((current) => !current)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <div
            id="mobile-navigation"
            aria-hidden={!isOpen}
            className={[
              "origin-top-left pt-2 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
              isOpen
                ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                : "pointer-events-none -translate-y-2 scale-[0.97] opacity-0",
            ].join(" ")}
          >
            <div
              className={[
                "w-[calc(100vw-2rem)] max-w-[21rem] overflow-hidden rounded-[1.5rem] bg-[#07101d]/90 shadow-[0_28px_80px_-38px_rgba(3,7,18,0.95)] backdrop-blur-2xl transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:w-[21rem]",
                isOpen
                  ? "border border-white/10 blur-0"
                  : "border border-white/0 blur-[6px]",
              ].join(" ")}
            >
              <div className="px-4 py-4 sm:px-5">
                <nav className="flex flex-col gap-2" aria-label="Menu mobile">
                  {navigation.map((item, index) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="rounded-[1.1rem] px-3.5 py-3.5 text-[0.95rem] font-medium text-slate-100/82 transition hover:bg-white/[0.06] hover:text-white"
                      onClick={() => setIsOpen(false)}
                      style={{
                        transitionDelay: isOpen ? `${index * 35}ms` : "0ms",
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>

                <div className="mt-4">
                  <ButtonLink
                    href="#contato"
                    size="sm"
                    className="h-12 w-full justify-center"
                  >
                    Iniciar projeto
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={[
            "hidden rounded-full border transition-all duration-300 lg:block",
            isScrolled
              ? "border-white/12 bg-[#07101d]/82 shadow-[0_24px_70px_-34px_rgba(3,7,18,0.95)] backdrop-blur-2xl"
              : "border-white/10 bg-[#07101d]/58 backdrop-blur-xl",
          ].join(" ")}
        >
          <div className="items-center px-6 py-3 lg:grid lg:grid-cols-[1fr_auto] lg:gap-8">
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
        </div>
      </div>
    </header>
  );
}
