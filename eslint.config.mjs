import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import tankstackQuery from "@eslint/eslint-plugin-query";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...tankstackQuery.config["flat/recommended"],
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
