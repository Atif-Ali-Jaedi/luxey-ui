import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import mdx from "@mdx-js/rollup";
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		{ enforce: "pre", ...mdx() },
		react({ include: /\.(jsx|js|mdx|md)$/ })
	],
	resolve: { alias: { "@": path.resolve(__dirname, "./src/") } }
});
