"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, PhoneCall, X } from "lucide-react";

import { siteContent } from "@/content/site";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const mobileLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about-us" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-pink-100 bg-white/90 backdrop-blur">
      <div className="mx-auto w-full max-w-7xl px-4 py-2 sm:px-6 sm:py-3 md:px-12">
        <div className="flex items-center justify-between">
          <Link href="/" className="group inline-flex items-center gap-1.5 sm:gap-2">
            <Image
              src="/images/Triangledot logo.png"
              alt="Triangledot logo"
              width={645}
              height={219}
              className="h-auto w-[150px] shrink-0 sm:w-[200px] md:w-[240px]"
              priority
            />
            <div>
              <p className="text-sm font-semibold tracking-tight text-pink-700 sm:text-base">
                {siteContent.business.name}
              </p>
              <p className="hidden text-xs font-medium text-pink-600 sm:block">Heating and Cooling</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {siteContent.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700 transition hover:text-pink-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href={siteContent.business.phoneHref}
            className="hidden items-center gap-2 rounded-full bg-pink-600 px-5 py-2.5 text-base font-semibold text-white shadow-lg transition hover:bg-pink-700 md:inline-flex"
          >
            <PhoneCall size={16} />
            Call Now
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-pink-200 bg-white text-pink-700 md:hidden"
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-drawer"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-[60] bg-slate-950/40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.aside
              id="mobile-nav-drawer"
              className="fixed right-0 top-0 z-[70] h-dvh w-[85%] max-w-sm border-l border-pink-100 bg-white p-6 shadow-2xl md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 280, damping: 32 }}
            >
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-900">Menu</p>
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="space-y-2">
                {mobileLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-pink-300 hover:text-pink-700"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <a
                href={siteContent.business.phoneHref}
                onClick={() => setIsMenuOpen(false)}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-pink-600 px-4 py-3 text-base font-bold text-white transition hover:bg-pink-700"
              >
                <PhoneCall size={16} />
                Call Now
              </a>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
