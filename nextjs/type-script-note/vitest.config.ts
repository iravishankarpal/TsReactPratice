import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import { resolve } from "path"

// https://vitejs.dev/config/

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": resolve(__dirname, "src"), // Ensure this points to your 'src' directory
		},
	},
	test: {
		include: ["**/*.test.{ts,tsx}", "tests/**/*.feature"],
		globals: true,
		environment: "jsdom",
		setupFiles: ["vite.setup.ts"], // Ensure this points to your setup file
	},
})
