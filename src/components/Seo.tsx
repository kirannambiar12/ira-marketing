import * as React from "react";
import { Helmet } from "react-helmet";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

export type SeoProps = {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
  noindex?: boolean;
  children?: React.ReactNode;
};

export function Seo({
  title,
  description,
  pathname = "/",
  image,
  noindex = false,
  children,
}: SeoProps) {
  const site = useSiteMetadata();
  const pageTitle =
    title ??
    "Ira Luxe | Luxury Piercing Jewellery India";
  const metaDescription = description ?? site.description;
  const canonical = `${site.siteUrl.replace(/\/$/, "")}${pathname}`;
  const ogImage = image
    ? image.startsWith("http")
      ? image
      : `${site.siteUrl.replace(/\/$/, "")}${image}`
    : `${site.siteUrl.replace(/\/$/, "")}${site.defaultImage ?? "/og-default.svg"}`;

  return (
    <Helmet
      htmlAttributes={{ lang: site.lang }}
      title={title ? `${title} | ${site.brand}` : pageTitle}
      link={[{ rel: "canonical", href: canonical }]}
      meta={[
        { name: "description", content: metaDescription },
        { name: "theme-color", content: "#0B0B0B" },
        { name: "robots", content: noindex ? "noindex,nofollow" : "index,follow" },
        { property: "og:site_name", content: site.brand },
        { property: "og:title", content: pageTitle },
        { property: "og:description", content: metaDescription },
        { property: "og:url", content: canonical },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: site.locale.replace("_", "-") },
        { property: "og:image", content: ogImage },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: pageTitle },
        { name: "twitter:description", content: metaDescription },
        { name: "twitter:image", content: ogImage },
        ...(site.twitterUsername
          ? [{ name: "twitter:site", content: site.twitterUsername } as const]
          : []),
      ]}
    >
      {children}
    </Helmet>
  );
}
