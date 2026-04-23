import { siteContent } from "@/content/site";

type CtaBandProps = {
  title?: string;
  body?: string;
};

export function CtaBand({ title, body }: CtaBandProps) {
  return (
    <section className="w-full py-10 md:py-16 px-4 sm:px-6 md:px-12">
      <div className="mx-auto w-full max-w-7xl rounded-2xl border border-pink-200 bg-gradient-to-r from-pink-50 to-white p-5 shadow-sm sm:p-8 lg:p-10">
        <div className="grid gap-6 md:grid-cols-[1.15fr_0.85fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pink-600">
              Emergency HVAC Support
            </p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
              {title ?? siteContent.ctas.emergencyHeadline}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-700 sm:text-base">
              {body ?? siteContent.ctas.emergencyBody}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <a
              href={siteContent.business.phoneHref}
              className="inline-flex w-full items-center justify-center rounded-full bg-pink-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-pink-700 shadow-sm sm:w-auto"
            >
              {siteContent.ctas.primary}
            </a>
            <a
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-full border-2 border-pink-300 bg-white px-5 py-3 text-sm font-semibold text-pink-700 transition hover:bg-pink-50 sm:w-auto"
            >
              {siteContent.ctas.secondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
