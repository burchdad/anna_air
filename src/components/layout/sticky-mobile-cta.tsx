import { AlertCircle, Phone } from "lucide-react";

import { siteContent } from "@/content/site";

export function StickyMobileCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-pink-200 bg-white px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 shadow-[0_-10px_28px_rgba(15,23,42,0.12)] md:hidden">
      <div className="text-center mb-2">
        <p className="flex items-center justify-center gap-1 text-xs font-semibold text-pink-700">
          <AlertCircle size={14} className="text-pink-600" />
          Emergency service available 24/7
        </p>
      </div>
      <div className="mx-auto flex w-full max-w-md gap-2">
        <a
          href={siteContent.business.phoneHref}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-pink-600 px-2.5 py-3 text-[13px] font-bold text-white transition hover:bg-pink-700 active:scale-95"
        >
          <Phone size={16} />
          Call Now
        </a>
        <a
          href="/contact"
          className="inline-flex flex-1 items-center justify-center rounded-xl border-2 border-pink-200 px-2.5 py-3 text-[13px] font-semibold text-pink-700 transition hover:bg-pink-50 active:scale-95"
        >
          Book Service
        </a>
      </div>
    </div>
  );
}
