import Link from "next/link";

import { siteContent } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:px-8">
        <div className="space-y-4">
          <p className="text-xl font-semibold tracking-tight">{siteContent.business.name}</p>
          <p className="max-w-md text-sm text-slate-300">
            Premium local HVAC support with urgency, honesty, and professional care for
            Texas families.
          </p>
          <a
            href={siteContent.business.phoneHref}
            className="inline-flex rounded-full bg-rose-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-400"
          >
            {siteContent.hero.primaryCta}
          </a>
        </div>

        <div className="grid grid-cols-2 gap-8 text-sm">
          <div className="space-y-2">
            <p className="font-semibold text-white">Company</p>
            {siteContent.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-slate-300 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-white">Trust</p>
            <p>License: {siteContent.business.licenseNumber}</p>
            <p>{siteContent.business.insuredStatus}</p>
            <p>{siteContent.business.emergencyLabel}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 px-4 py-4 text-center text-xs text-slate-400">
        <p>
          © {new Date().getFullYear()} {siteContent.business.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
