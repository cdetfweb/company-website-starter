module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
    {
      files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
      rules: {
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              [
                // Side effect imports.
                "^\\u0000",
                // Packages.
                // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
                "^@?\\w",
                // Absolute imports and other imports.
                // Anything not matched in another group.
                "^",
                // Relative imports.
                // Anything that starts with a dot.
                "^\\.",
              ],
            ],
          },
        ],
        "simple-import-sort/exports": "error",
        "tsdoc/syntax": "warn",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "react",
    "simple-import-sort",
    "eslint-plugin-tsdoc",
  ],
  rules: {
    "react/prop-types": "off",
  },
};
