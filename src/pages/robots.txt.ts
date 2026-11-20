import type { APIRoute } from "astro";
import { APP_ENV } from "astro:env/server";

// Non-production builds must never be indexable (staging/preview).
export const GET: APIRoute = ({ site }) => {
  const body = [
    "User-agent: *",
    APP_ENV === "production" ? "Allow: /" : "Disallow: /",
    `Sitemap: ${new URL("sitemap-index.xml", site)}`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
