// @ts-check
import sitemap from "@astrojs/sitemap";
import { defineConfig, envField } from "astro/config";
import { loadEnv } from "vite";

const { SITE_URL } = loadEnv(
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
  ],
  env: {
    schema: {
      SITE_URL: envField.string({
        context: "server",
        access: "public",
        default: "https://astro-starter.piry.dev",
      }),
      APP_ENV: envField.enum({
        values: ["development", "production"],
        context: "server",
        access: "public",
        default: "development",
      }),
    },
  },
});
