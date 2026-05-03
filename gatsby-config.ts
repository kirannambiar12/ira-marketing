import type { GatsbyConfig } from "gatsby";
import { loadEnv } from "./load-env";

loadEnv();

const siteUrl = process.env.GATSBY_SITE_URL ?? "https://iraluxe.in";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Ira Luxe",
    titleTemplate: "%s | Ira Luxe",
    description:
      "Discover luxury piercing jewellery in India—hypoallergenic titanium and surgical stainless steel, precision-crafted for refined, skin-safe wear. Join Ira Luxe.",
    siteUrl,
    lang: "en-IN",
    locale: "en_IN",
    brand: "Ira Luxe",
    twitterUsername: "@iraluxe",
    defaultImage: "/og-default.svg",
    organization: {
      name: "Ira Luxe",
      legalName: "Ira Luxe",
      url: siteUrl,
      logo: `${siteUrl}/black-png.png`,
      email: "care@iraluxe.in",
      foundingLocation: {
        addressCountry: "IN",
      },
      sameAs: ["https://www.instagram.com/iraluxeofficial/"],
    },
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
          }
        `,
        resolveSiteUrl: () => siteUrl,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap-index.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    "gatsby-plugin-react-helmet",
  ],
};

export default config;
