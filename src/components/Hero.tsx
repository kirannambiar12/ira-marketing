import * as React from "react";
import { BrandLogo } from "./BrandLogo";
import { LuxuryImage } from "./LuxuryImage";

export function Hero({ onJoinList }: { onJoinList: () => void }) {
  return (
    <header className="relative overflow-hidden border-b border-ink/10">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-ivory via-ivory-warm/40 to-gold-faint grain vignette-hero"
        aria-hidden
      />
      <div className="pointer-events-none absolute right-0 top-0 h-[70%] w-[45%] max-w-2xl bg-gradient-to-bl from-gold-faint to-transparent opacity-80 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-content px-6 pb-28 pt-24 sm:px-10 md:pb-36 md:pt-32 lg:px-16">
        <div className="grid items-start justify-items-center gap-14 text-center lg:grid-cols-12 lg:gap-x-12 lg:gap-y-12">
          <div className="flex w-full max-w-2xl flex-col items-center lg:col-span-7 lg:max-w-none">
            <BrandLogo variant="hero" />
            <h1 className="mt-8 font-serif text-display-xl text-balance text-ink opacity-0 animate-fade-up motion-reduce:opacity-100 motion-reduce:animate-none [animation-delay:40ms] sm:mt-10 lg:mt-12">
              Luxury Piercing Jewellery by Ira Luxe
            </h1>
            <div className="mt-8 flex w-full justify-center" aria-hidden>
              <div className="h-px w-24 max-w-[6rem] bg-gradient-to-r from-gold via-gold-bright/80 to-transparent opacity-0 animate-line-grow motion-reduce:opacity-100 motion-reduce:animate-none" />
            </div>
            <p className="mx-auto mt-10 w-full max-w-prose font-sans text-lg font-light leading-[1.75] text-ink/72 opacity-0 animate-fade-up motion-reduce:opacity-100 motion-reduce:animate-none md:text-xl [animation-delay:100ms]">
              Skin-safe, precision-crafted jewellery for modern elegance—quiet luxury for ears, nose, and
              curated piercings.
            </p>
            <div className="mt-12 flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-8">
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.32em] text-gold">
                Launching Soon
              </p>
              <span className="hidden h-px w-16 bg-gradient-to-r from-ink/20 to-transparent sm:block" aria-hidden />
              <button
                type="button"
                onClick={onJoinList}
                className="group inline-flex w-fit items-center gap-4 border border-ink bg-ink px-10 py-4 font-sans text-[11px] font-semibold uppercase tracking-[0.26em] text-ivory shadow-lux-soft transition-all duration-500 hover:-translate-y-0.5 hover:bg-ink-soft hover:shadow-lux"
              >
                Join the Private List
                <span
                  className="inline-block h-px w-9 bg-ivory/75 transition-all duration-500 group-hover:w-12 group-hover:bg-gold-bright"
                  aria-hidden
                />
              </button>
            </div>
          </div>

          <div className="relative flex w-full max-w-lg flex-col items-center lg:col-span-5 lg:max-w-none">
            <div className="absolute left-1/2 top-0 hidden h-24 w-px -translate-x-1/2 hairline-y lg:block" aria-hidden />
            <LuxuryImage variant="hero" className="w-full max-w-[min(100%,420px)]" />
            <div className="relative mx-auto mt-10 w-full max-w-md border border-ink/10 bg-ivory/40 px-8 py-7 text-center backdrop-blur-sm lg:-mt-16 lg:max-w-sm">
              <p className="font-serif text-2xl font-normal italic leading-snug text-ink md:text-3xl">
                Refined silhouettes. Impeccable finish.
              </p>
              <p className="mt-5 font-sans text-sm font-light leading-relaxed text-ink/58">
                Implant-grade titanium and surgical stainless steel—executed with editorial restraint and
                uncompromising material discipline.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
