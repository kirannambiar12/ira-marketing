import * as React from "react";
import { BrandLogo } from "./BrandLogo";

export function Philosophy() {
  return (
    <section className="border-b border-ink/10 bg-ivory/80" aria-labelledby="philosophy-heading">
      <div className="mx-auto max-w-content px-6 py-28 sm:px-10 lg:px-16">
        <div className="grid items-start gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <div
                className="lux-frame mx-auto aspect-[3/4] w-full max-w-md overflow-hidden motion-safe:opacity-0 motion-safe:animate-image-reveal motion-reduce:opacity-100 [animation-delay:0.12s] lg:mx-0 lg:max-w-none"
              >
                <img
                  src="/philo.avif"
                  alt="Ira Luxe brand mood — refined piercing jewellery in soft light"
                  width={720}
                  height={960}
                  className="h-full w-full object-cover object-bottom"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="label-caps mt-8 text-center text-ink/40 lg:text-left">Atelier mood</p>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <BrandLogo variant="onLight" className="mb-8 sm:mb-10" />
            <p className="label-caps text-gold/90">Philosophy</p>
            <h2
              id="philosophy-heading"
              className="mt-4 font-serif text-4xl font-normal tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]"
            >
              Brand Philosophy
            </h2>
            <p className="mt-6 font-sans text-xs font-medium uppercase tracking-[0.3em] text-ink/40">
              Material truth, sculptural calm
            </p>
            <div className="mt-12 space-y-10 border-l border-gold/25 pl-8 font-sans text-lg font-light leading-[1.8] text-ink/78">
              <p>
                Ira Luxe is a house for{" "}
                <strong className="font-medium text-ink">premium piercing jewellery</strong>—where
                surgical-grade discipline meets couture proportion. Each piece is composed for longevity:
                balanced weight, mirror-polished surfaces, and settings that respect the body&apos;s
                geometry.
              </p>
              <p>
                Our edit of{" "}
                <strong className="font-medium text-ink">hypoallergenic piercing jewellery</strong>{" "}
                is built on two metals only: implant-grade titanium and surgical stainless steel—chosen so
                sensitive skin can wear luxury with confidence. This is adornment without compromise:
                refined for helix, conch, tragus, and intimate piercings alike.
              </p>
              <p>
                As{" "}
                <strong className="font-medium text-ink">luxury body jewellery India</strong>{" "}
                matures, we lead with restraint—limited capsules, editorial campaigns, and a private list
                for collectors who value rarity over noise. Discover a wardrobe of studs, hoops, and
                threadless ends designed to layer, mix finishes, and age beautifully.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
