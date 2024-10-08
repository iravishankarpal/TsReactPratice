import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import { resolve } from "path"

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"), // Ensure this points to your 'src' directory
        },
    },
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: ["vite.setup.ts"], // Ensure this points to your setup file
    },
})
