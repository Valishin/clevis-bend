import vue from "@vitejs/plugin-vue";
import laravel from "laravel-vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
    plugins: [
        tailwindcss(),
        laravel({ input: ["resources/css/app.css", "resources/js/app.ts"], refresh: true }),
        vue(),
    ],
    resolve: {
        alias: {
            "@":       fileURLToPath(new URL("./resources/js", import.meta.url)),
            "@images": fileURLToPath(new URL("./resources/js/assets/images/index.ts", import.meta.url)),
            "@components": fileURLToPath(new URL("./resources/js/components", import.meta.url)),
            "@pages":  fileURLToPath(new URL("./resources/js/Pages", import.meta.url)),
        },
    },
});
