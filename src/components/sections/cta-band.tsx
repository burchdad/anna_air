import { siteContent } from "@/content/site";

type CtaBandProps = {
  title?: string;
  body?: string;
};

export function CtaBand({ title, body }: CtaBandProps) {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto w-full max-w-6xl rounded-3xl border border-pink-200 bg-gradient-to-r from-pink-600 via-pink-500 to-pink-600 p-5 text-white shadow-[0_28px_60px_rgba(236,72,153,0.3)] sm:p-8 lg:p-10">
        <div className="grid gap-6 md:grid-cols-[1.15fr_0.85fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/90">
              Emergency HVAC Support
            </p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              {title ?? siteContent.ctas.emergencyHeadline}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
              {body ?? siteContent.ctas.emergencyBody}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <a
              href={siteContent.business.phoneHref}
              className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-pink-600 transition hover:bg-pink-50 shadow-lg sm:w-auto"
            >
              {siteContent.ctas.primary}
            </a>
            <a
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-full border-2 border-white/60 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15 sm:w-auto"
            >
              {siteContent.ctas.secondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
