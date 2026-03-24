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
      <div className="mx-auto max-w-7xl px-4 pt-3 sm:px-6 sm:pt-4 lg:px-8">
        <div className="lg:hidden">
          <div
            className={[
              "inline-flex rounded-full border p-1.5 transition-all duration-300",
              isScrolled
                ? "border-white/12 bg-[#07101d]/84 shadow-[0_24px_70px_-34px_rgba(3,7,18,0.95)] backdrop-blur-2xl"
                : "border-white/10 bg-[#07101d]/62 backdrop-blur-xl",
            ].join(" ")}
          >
            <button
              type="button"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white transition hover:bg-white/[0.1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-strong/70"
              onClick={() => setIsOpen((current) => !current)}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <div
            id="mobile-navigation"
            aria-hidden={!isOpen}
            className={[
              "origin-top-left pt-3 transition-all duration-300 ease-out",
              isOpen
                ? "pointer-events-auto translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-2 opacity-0",
            ].join(" ")}
          >
            <div
              className={[
                "w-[calc(100vw-2rem)] max-w-[22rem] overflow-hidden rounded-[1.75rem] border bg-[#07101d]/92 shadow-[0_28px_80px_-38px_rgba(3,7,18,0.95)] backdrop-blur-2xl transition-all duration-300 ease-out sm:w-[22rem]",
                isOpen
                  ? "border-white/12 blur-0"
                  : "border-white/0 blur-[6px]",
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
          <div className="items-center px-6 py-3 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-6">
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
        </div>
      </div>
    </header>
  );
}
