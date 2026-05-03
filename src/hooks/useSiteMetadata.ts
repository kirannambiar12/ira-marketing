import { graphql, useStaticQuery } from "gatsby";

export type SiteMetadata = {
  title: string;
  titleTemplate: string;
  description: string;
  siteUrl: string;
  lang: string;
  locale: string;
  brand: string;
  twitterUsername?: string;
  defaultImage?: string;
  organization: {
    name: string;
    legalName: string;
    url: string;
    logo: string;
    email: string;
    foundingLocation: { addressCountry: string };
    sameAs: string[];
  };
};

export function useSiteMetadata(): SiteMetadata {
  const data = useStaticQuery<{
    site: { siteMetadata: SiteMetadata };
  }>(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          titleTemplate
          description
          siteUrl
          lang
          locale
          brand
          twitterUsername
          defaultImage
          organization {
            name
            legalName
            url
            logo
            email
            foundingLocation {
              addressCountry
            }
            sameAs
          }
        }
      }
    }
  `);

  return data.site.siteMetadata;
}
