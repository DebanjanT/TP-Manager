import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    outDir: "dist-react",
  },
  server: {
    port: 6851,
    strictPort: true,
  },
});