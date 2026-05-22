import { defineConfig } from "vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    tanstackStart({
      server: {
        preset: 'node-server'
      }
    }),
    tailwindcss(),
    tsConfigPaths(),
  ],
});
