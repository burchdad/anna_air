import { AlertCircle, Phone } from "lucide-react";

import { siteContent } from "@/content/site";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-pink-200 bg-gradient-to-r from-pink-600 to-pink-500 p-3 shadow-2xl md:hidden">
      <div className="text-center mb-2">
        <p className="text-xs font-semibold text-white/90 flex items-center justify-center gap-1">
          <AlertCircle size={14} />
          Emergency service available 24/7
        </p>
      </div>
      <div className="mx-auto flex w-full max-w-md gap-2">
        <a
          href={siteContent.business.phoneHref}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-3 py-3 text-sm font-bold text-pink-600 transition hover:bg-pink-50 active:scale-95"
        >
          <Phone size={16} />
          {siteContent.business.phoneDisplay}
        </a>
        <a
          href="/contact"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-white text-white px-3 py-3 text-sm font-semibold transition hover:bg-white/15 active:scale-95"
        >
          Book Service
        </a>
      </div>
    </div>
  );
}
