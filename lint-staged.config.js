export default {
  "**/*.{ts,tsx,astro}": () => "pnpm run type-check",

  "**/*.astro": (filenames) => [
    `pnpm exec eslint --fix ${filenames.join(" ")}`,
    `pnpm exec prettier --write ${filenames.join(" ")}`,
  ],

  "**/*.{ts,tsx,js,jsx}": (filenames) => [
    `pnpm exec eslint --fix ${filenames.join(" ")}`,
    `pnpm exec prettier --write ${filenames.join(" ")}`,
  ],

  "**/*.{md,json,yaml,yml,css,scss,sass}": (filenames) => [
    `pnpm exec prettier --write ${filenames.join(" ")}`,
  ],
};
