import * as React from "react";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

export function JsonLd({ pathname = "/" }: { pathname?: string }) {
  const site = useSiteMetadata();
  const url = `${site.siteUrl.replace(/\/$/, "")}${pathname}`;

  const graph = [
    {
      "@type": "Organization",
      "@id": `${site.siteUrl}#organization`,
      name: site.organization.name,
      legalName: site.organization.legalName,
      url: site.organization.url,
      logo: {
        "@type": "ImageObject",
        url: site.organization.logo,
      },
      email: site.organization.email,
      foundingLocation: {
        "@type": "Place",
        addressCountry: site.organization.foundingLocation.addressCountry,
      },
      sameAs: site.organization.sameAs,
      description:
        "Ira Luxe crafts premium piercing jewellery and luxury body jewellery in India—implant-grade titanium, surgical stainless steel, hypoallergenic, design-led, and skin-safe.",
    },
    {
      "@type": "WebSite",
      "@id": `${site.siteUrl}#website`,
      url: site.siteUrl,
      name: site.brand,
      publisher: { "@id": `${site.siteUrl}#organization` },
      inLanguage: site.lang,
    },
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: "Luxury Piercing Jewellery by Ira Luxe",
      isPartOf: { "@id": `${site.siteUrl}#website` },
      about: {
        "@type": "Thing",
        name: "Luxury piercing jewellery and premium body jewellery",
      },
      description: site.description,
      inLanguage: site.lang,
    },
    {
      "@type": "Product",
      "@id": `${site.siteUrl}#signature-line`,
      name: "Ira Luxe Signature Piercing Jewellery",
      description:
        "Ultra-premium piercing jewellery in implant-grade titanium and surgical stainless steel—refined silhouettes and limited releases for discerning collectors in India.",
      brand: { "@type": "Brand", name: site.brand },
      category: "Luxury piercing jewellery",
      material: ["Implant-grade titanium", "Surgical stainless steel"],
      audience: {
        "@type": "PeopleAudience",
        audienceType: "Affluent consumers seeking skin-safe luxury body jewellery",
      },
      offers: {
        "@type": "Offer",
        url: site.siteUrl,
        availability: "https://schema.org/PreOrder",
        priceValidUntil: "2027-12-31",
        seller: { "@id": `${site.siteUrl}#organization` },
      },
    },
  ];

  const json = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
