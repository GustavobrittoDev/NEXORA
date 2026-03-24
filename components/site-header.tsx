"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NexoraLogo } from "@/components/nexora-logo";
import { ButtonLink } from "@/components/ui/button-link";
import { navigation } from "@/data/site-content";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <div className="panel rounded-full px-4 py-3 sm:px-5">
          <div className="flex items-center justify-between gap-4">
            <a
              href="#inicio"
              aria-label="Voltar ao início"
              className="shrink-0"
              onClick={() => setIsOpen(false)}
            >
              <NexoraLogo size="sm" showTagline={false} />
            </a>

            <nav className="hidden items-center gap-7 md:flex">
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

            <div className="hidden md:block">
              <ButtonLink href="#contato" size="sm">
                Solicitar projeto
              </ButtonLink>
            </div>

            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white md:hidden"
              onClick={() => setIsOpen((current) => !current)}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {isOpen ? (
            <div className="mt-4 rounded-[1.8rem] border border-white/10 bg-black/18 p-4 md:hidden">
              <nav className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl px-3 py-3 text-sm font-medium text-slate-100/82 transition hover:bg-white/6 hover:text-white"
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
                  Solicitar projeto
                </ButtonLink>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
