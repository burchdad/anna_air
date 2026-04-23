import { CalendarCheck2, Phone } from "lucide-react";

import { siteContent } from "@/content/site";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-3 shadow-2xl backdrop-blur md:hidden">
      <div className="mx-auto flex w-full max-w-md gap-2">
        <a
          href={siteContent.business.phoneHref}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-950 px-3 py-3 text-sm font-semibold text-white"
        >
          <Phone size={16} />
          Call Now
        </a>
        <a
          href="/contact"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-rose-500 px-3 py-3 text-sm font-semibold text-white"
        >
          <CalendarCheck2 size={16} />
          Book Service
        </a>
      </div>
    </div>
  );
}
