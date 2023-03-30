const esbuild = require("esbuild");

esbuild.build({
    entryPoints: ["src/index.cjs"],
    bundle: true,
    outfile: "dist/index.cjs",
    format: "cjs",
    minify: true,
});
