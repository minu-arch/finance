import { reactRouter } from "@react-router/dev/vite"
import tailwindcss from "@tailwindcss/vite"
import path from "node:path"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
	plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./source"),
		},
	},
	server: {
		host: true,
		allowedHosts: ["minu.localdev"],
		strictPort: true,
	},
})
