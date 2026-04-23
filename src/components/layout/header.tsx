import Image from "next/image";
import Link from "next/link";

import { PhoneCall } from "lucide-react";

import { siteContent } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-pink-100 bg-white/90 backdrop-blur">
      <div className="mx-auto w-full max-w-6xl px-4 py-2 sm:px-6 sm:py-3 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="group inline-flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Anna's Air LLC logo"
              width={48}
              height={48}
              className="h-10 w-auto sm:h-12"
            />
            <div>
              <p className="text-sm font-semibold tracking-tight text-slate-950 sm:text-base">
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
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-600 to-pink-500 px-3 py-2 text-sm font-semibold text-white transition hover:from-pink-700 hover:to-pink-600 shadow-lg sm:px-4"
          >
            <PhoneCall size={16} />
            <span className="hidden sm:inline">{siteContent.hero.primaryCta}</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>

        <nav className="mt-2 flex gap-1.5 overflow-x-auto pb-1 md:hidden">
          {siteContent.navigation.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full border border-pink-200 bg-pink-50 px-2.5 py-1.5 text-[11px] font-semibold text-pink-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
