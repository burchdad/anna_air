import Link from "next/link";

import { PhoneCall } from "lucide-react";

import { siteContent } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto w-full max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="group inline-flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-fuchsia-600 text-sm font-bold text-white shadow-sm">
              AA
            </span>
            <div>
              <p className="text-base font-semibold tracking-tight text-slate-950">
                {siteContent.business.name}
              </p>
              <p className="text-xs text-slate-600">Heating and Cooling</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {siteContent.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700 transition hover:text-rose-700"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href={siteContent.business.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            <PhoneCall size={16} />
            <span className="hidden sm:inline">{siteContent.hero.primaryCta}</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>

        <nav className="mt-3 flex gap-2 overflow-x-auto pb-1 md:hidden">
          {siteContent.navigation.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-slate-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
