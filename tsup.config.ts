import { defineConfig } from "tsup"

export default defineConfig({
    entry: ["src/index.ts"],
    outDir: "dist",
    format: ["cjs", "esm"],
    dts: true,
    minify: true,
    sourcemap: true,
    clean: true,
    tsconfig: "tsconfig.build.json",
    esbuildOptions(options) {
        options.jsxFactory = "React.createElement";
        options.jsxFragment = "React.Fragment";
    },
})