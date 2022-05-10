import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "./src/index.tsx",
    api: "./src/api.ts",
  },
  format: ["cjs", "esm"],
  clean: true,
  bundle: true,
  dts: true,
});
