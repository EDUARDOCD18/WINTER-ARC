// Función auxiliar para resolver la ruta de asset mediante Vite
const getAssetUrl = (path) => new URL(`../assets/${path}`, import.meta.url).href;

export const projectsData = [
  {
    id: "proj-1",
    title: "Portafolio Web Modular (Vite + ESM)",
    category: "Arquitectura Web",
    description:
      "Currículum profesional construido con Vanilla JS, módulos CSS, arquitectura BEM y bundle optimizado con Vite.",
    tools: ["HTML5", "CSS Modules", "JavaScript ES6", "Vite"],
    link: "https://github.com/tu-usuario/portafolio-vite",
  },
  {
    id: "proj-2",
    title: "Landing Page Pizzería Responsiva",
    category: "Layout Mobile-First",
    description:
      "Sitio comercial optimizado para motores de búsqueda, con navegación adaptativa, componentes UI aislados y metodología BEM.",
    tools: ["HTML5", "CSS Grid", "JavaScript", "BEM"],
    link: "#",
  },
  {
    id: "proj-3",
    title: "Currículum vitae con Vite",
    category: "Layout Mobile-First",
    description:
      "Hoja de vida creada con la tecnología Vite",
    tools: ["HTML5", "CSS Grid", "JavaScript", "BEM"],
    link: "#",
  },
];
