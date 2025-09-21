// @ts-check
import { fileURLToPath, URL } from "node:url";

import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";
import { loadEnv } from "vite";

const { SITE_URL, APP_ENV } = loadEnv(
  process.env.NODE_ENV || "development",
  process.cwd(),
  "",
);

// https://astro.build/config
export default defineConfig({
  site: SITE_URL || "https://astro-starter.piry.dev",
  integrations: [
    sitemap({
      changefreq: "monthly",
      priority: 0.7,
      lastmod: new Date(),
    }),
    robotsTxt({
      policy:
        APP_ENV === "production"
          ? [{ userAgent: "*", allow: "/" }]
          : [{ userAgent: "*", disallow: "/" }],
    }),
  ],
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
});
