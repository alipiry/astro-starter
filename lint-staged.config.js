// String commands: lint-staged appends the filenames shell-quoted, so
// paths like src/pages/[slug].astro are safe. Typecheck runs on pre-push.
export default {
  "*.{js,mjs,cjs,ts,tsx,astro}": [
    "eslint --fix --no-warn-ignored",
    "prettier --write",
  ],
  "*.{md,mdx,json,yaml,yml,css,scss,sass}": "prettier --write",
};
