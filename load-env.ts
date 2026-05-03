import path from "path";
import dotenv from "dotenv";

/**
 * Gatsby only auto-loads `.env.development` / `.env.production`. This also loads `.env` and
 * `.env.local` so a single `.env` file works for local development.
 *
 * Browser code only receives variables prefixed with `GATSBY_`. We map common unprefixed
 * Klaviyo keys so they still get inlined into the client bundle.
 */
export function loadEnv(): void {
  const root = process.cwd();
  const mode = process.env.NODE_ENV || "development";

  dotenv.config({ path: path.join(root, ".env") });
  dotenv.config({ path: path.join(root, `.env.${mode}`) });
  dotenv.config({ path: path.join(root, ".env.local"), override: true });
  dotenv.config({ path: path.join(root, `.env.${mode}.local`), override: true });

  if (!process.env.GATSBY_KLAVIYO_PUBLIC_API_KEY && process.env.KLAVIYO_PUBLIC_API_KEY) {
    process.env.GATSBY_KLAVIYO_PUBLIC_API_KEY = process.env.KLAVIYO_PUBLIC_API_KEY;
  }
  if (!process.env.GATSBY_KLAVIYO_PUBLIC_API_KEY && process.env.GATSBY_KLAVIYO_COMPANY_ID) {
    process.env.GATSBY_KLAVIYO_PUBLIC_API_KEY = process.env.GATSBY_KLAVIYO_COMPANY_ID;
  }
  if (!process.env.GATSBY_KLAVIYO_LIST_ID && process.env.KLAVIYO_LIST_ID) {
    process.env.GATSBY_KLAVIYO_LIST_ID = process.env.KLAVIYO_LIST_ID;
  }
  if (!process.env.GATSBY_SITE_URL && process.env.SITE_URL) {
    process.env.GATSBY_SITE_URL = process.env.SITE_URL;
  }
}
