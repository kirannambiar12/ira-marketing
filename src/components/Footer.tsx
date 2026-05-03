import * as React from "react";
import { BrandLogo } from "./BrandLogo";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

export function Footer() {
  const site = useSiteMetadata();
  const instagram = site.organization.sameAs[0];

  return (
    <footer
      className="border-t border-gold/15 bg-gradient-to-b from-ink to-ink-soft text-ivory"
      role="contentinfo"
    >
      <div className="mx-auto max-w-content px-6 py-20 sm:px-10 lg:px-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <BrandLogo variant="footer" />
            <p className="mt-8 max-w-sm font-sans text-sm font-light leading-relaxed text-ivory/65">
              Luxury piercing jewellery—minimal in form, exacting in execution. Based in India,
              shipping worldwide.
            </p>
            <p className="mt-8 font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-gold">
              Private list
            </p>
            <p className="mt-3 font-sans text-sm text-ivory/80">
              <a href="#private-list" className="transition-colors hover:text-ivory">
                Request early access
              </a>
            </p>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-gold">
              Contact
            </p>
            <p className="mt-6 font-sans text-sm">
              <a className="text-ivory/85 underline-offset-4 hover:underline" href={`mailto:${site.organization.email}`}>
                {site.organization.email}
              </a>
            </p>
            {instagram ? (
              <>
                <p className="mt-6 font-sans text-[11px] uppercase tracking-[0.28em] text-ivory/45">
                  Social
                </p>
                <ul className="mt-3 font-sans text-sm">
                  <li>
                    <a
                      href={instagram}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-ivory/80 transition-colors hover:text-ivory"
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </>
            ) : null}
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-ivory/10 pt-8 font-sans text-xs text-ivory/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.brand}. All rights reserved.</p>
          <p className="max-w-md leading-relaxed">
            Luxury piercing jewellery India · Titanium piercing jewellery · Surgical stainless steel body
            jewellery · Hypoallergenic piercing jewellery
          </p>
        </div>
      </div>
    </footer>
  );
}
