import type { GatsbyNode } from "gatsby";
import { loadEnv } from "./load-env";

/** Run before config so `process.env` is populated for Gatsby and webpack. */
export const onPreInit: GatsbyNode["onPreInit"] = () => {
  loadEnv();
};
