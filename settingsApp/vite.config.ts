import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import federation from "@originjs/vite-plugin-federation";
import modules from "./modules.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    federation({
      name: "settingsApp",
      filename: "settingsApp.js",
      remotes: modules,
      exposes: {
        "./index": "./src/App.tsx",
        "./method": "./src/method.ts",
      },
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
