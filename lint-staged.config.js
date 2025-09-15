export default {
  "**/*.{ts,tsx,astro}": () => "bun run type-check",

  "**/*.astro": (filenames) => [
    `bunx eslint --fix ${filenames.join(" ")}`,
    `bunx prettier --write ${filenames.join(" ")}`,
  ],

  "**/*.{ts,tsx,js,jsx}": (filenames) => [
    `bunx eslint --fix ${filenames.join(" ")}`,
    `bunx prettier --write ${filenames.join(" ")}`,
  ],

  "**/*.{md,json,yaml,yml,css,scss,sass}": (filenames) =>
    `bunx prettier --write ${filenames.join(" ")}`,
};
