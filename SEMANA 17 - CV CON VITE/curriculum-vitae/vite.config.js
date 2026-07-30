import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  // Configuración de empaquetado para múltiples páginas (MPA)
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        acerca: resolve(__dirname, "acerca.html"),
        formaciones: resolve(__dirname, "formaciones.html"),
        experiencia: resolve(__dirname, "experiencia.html"),
      },
    },
  },
  // Servidor de desarrollo
  server: {
    open: true, // Abre el navegador automáticamente
    port: 3000,
  },
});
