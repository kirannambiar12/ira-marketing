import * as React from "react";
import { BrandLogo } from "./BrandLogo";

const gallery = [
  {
    src: "/ph2.avif",
    alt: "Ira Luxe piercing jewellery — comfort and wear detail",
  },
  {
    src: "/ph1.avif",
    alt: "Ira Luxe piercing jewellery — craft and silhouette study",
  },
  {
    src: "/ph3.avif",
    alt: "Ira Luxe piercing jewellery — curation and finish",
  },
] as const;

const items = [
  {
    title: "Luxury piercing jewellery India",
    body:
      "Designed for discerning clients who expect European atelier standards with local relevance—" +
      "subtle scale, brushed and mirror steel, and silhouettes suited to tropical light and global wardrobes.",
  },
  {
    title: "Premium body jewellery",
    body:
      "Threadless and precision mechanisms engineered for daily wear. Mirror finishes, hand-inspected " +
      "stones, and tolerances that keep piercings comfortable through travel, work, and evening.",
  },
  {
    title: "Hypoallergenic piercing jewellery",
    body:
      "Biocompatible titanium and surgical stainless steel, transparent sourcing, and nickel-conscious " +
      "finishing—ideal for first piercings, stacked curation, and clients who react to mass-market alloys.",
  },
  {
    title: "Titanium and stainless steel piercing jewellery India",
    body:
      "Every Ira Luxe piece is titanium or surgical stainless steel—no mixed base metals—so you know " +
      "exactly what touches your skin: cool precision, warm light on polish, and longevity you can feel.",
  },
] as const;

export function ValueHighlights() {
  return (
    <section className="relative bg-gradient-to-b from-ivory-warm/50 via-ivory to-ivory" aria-labelledby="values-heading">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent" aria-hidden />
      <div className="mx-auto max-w-content px-6 py-28 sm:px-10 lg:px-16">
        <div className="max-full">
          <BrandLogo variant="onLight" className="mb-8 sm:mb-10" />
          <p className="label-caps text-gold/90">The edit</p>
          <h2
            id="values-heading"
            className="mt-5 font-serif text-4xl font-normal tracking-tight text-ink sm:text-5xl lg:text-[3.35rem]"
          >
            Craft, Comfort, Curation
          </h2>
          <p className="mt-6 max-w-prose font-sans text-sm font-light uppercase tracking-[0.28em] text-ink/42">
            Value highlights
          </p>
        </div>

        <div
          className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:mt-20 lg:gap-6"
          role="group"
          aria-label="Craft, comfort, and curation photography"
        >
          {gallery.map((shot, i) => (
            <div
              key={shot.src}
              className={`lux-frame aspect-[4/5] overflow-hidden motion-safe:opacity-0 motion-safe:animate-image-reveal motion-reduce:opacity-100 sm:aspect-[3/4] ${i === 0 ? "[animation-delay:80ms]" : i === 1 ? "[animation-delay:170ms]" : "[animation-delay:260ms]"
                }`}
            >
              <img
                src={shot.src}
                alt={shot.alt}
                width={640}
                height={800}
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>

        <ul className="mt-20 grid gap-14 sm:grid-cols-2 lg:mt-24 lg:gap-x-16 lg:gap-y-16">
          {items.map((item, i) => (
            <li
              key={item.title}
              className="group border-t border-ink/10 pt-10 transition-colors duration-500 hover:border-gold/40"
            >
              <span className="font-mono text-[10px] font-medium tabular-nums text-gold/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-serif text-[1.35rem] font-normal leading-snug tracking-tight text-ink sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-5 font-sans text-sm font-light leading-relaxed text-ink/66">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
