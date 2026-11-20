// @ts-check
import sitemap from "@astrojs/sitemap";
import { defineConfig, envField } from "astro/config";
import { loadEnv } from "vite";

const DEFAULT_SITE_URL = "https://astro-starter.piry.dev";

const { SITE_URL } = loadEnv(
  process.env.NODE_ENV || "development",
  process.cwd(),
  "",
);

// https://astro.build/config
export default defineConfig({
  site: SITE_URL || DEFAULT_SITE_URL,
  integrations: [sitemap()],
  env: {
    schema: {
      SITE_URL: envField.string({
        context: "server",
        access: "public",
        default: DEFAULT_SITE_URL,
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
