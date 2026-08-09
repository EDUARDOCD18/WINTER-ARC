/* -- importación de estilos css -- */
import "./styles/index.css";

/* -- importación de datos -- */
import { educationData } from "./data/education";
import { skillsData } from "./data/skills";
import { experienceData } from "./data/experience";
import { projectsData } from "./data/projects";

/* -- importación de componentes -- */

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ProjectCard } from "./components/ProjectCard";
import { TimeLineItem } from "./components/TimeLineItem";

console.log("Datos cargados:", {
  educationData,
  skillsData,
  experienceData,
  projectsData,
});

/**
 * Renderización
 */
const renderApp = () => {
  // 1. Inyectar cascarón global
  const appContainer = document.querySelector("#app");
  if (appContainer) {
    appContainer.insertAdjacentHTML("beforebegin", Header());
    appContainer.insertAdjacentHTML("afterend", Footer());
  }

  // 2. Inyectar Proyectos (si existe el contenedor)
  const projectsContainer = document.querySelector("#projects-grid");
  if (projectsContainer) {
    projectsContainer.innerHTML = projectsData.map(ProjectCard).join("");
  }

  // 3. Inyectar Educación (si existe el contenedor)
  const educationContainer = document.querySelector("#education-timeline");
  if (educationContainer) {
    educationContainer.innerHTML = educationData.map(TimelineItem).join("");
  }

  // 4. Lógica de Interacción: Menú Hamburguesa
  const menuToggle = document.querySelector("#menu-toggle");
  const mainNav = document.querySelector("#main-nav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("is-active");
      mainNav.classList.toggle("is-open");
    });
  }
};

document.addEventListener("DOMContentLoaded", renderApp);

/**
 * Arquitectura de Interacción y Control de Estado (Día 6)
 */
document.addEventListener("DOMContentLoaded", () => {
  // Inicialización de componentes UI
  initMobileMenu();
  initActiveNavLink();
});

/**
 * 1. Control de Navegación Responsiva (Menú Hamburguesa)
 */
function initMobileMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const headerNav = document.getElementById("header-nav");

  if (!menuToggle || !headerNav) return;

  // Alternar apertura/cierre al hacer clic en el botón
  menuToggle.addEventListener("click", () => {
    const isOpen = headerNav.classList.toggle("is-open");
    menuToggle.classList.toggle("is-active");

    // Actualización de estado accesible para lectores de pantalla
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Cerrar menú con la tecla 'Escape' (Mejora de Accesibilidad)
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && headerNav.classList.contains("is-open")) {
      closeMenu(headerNav, menuToggle);
      menuToggle.focus(); // Devuelve el foco al botón para navegación por teclado
    }
  });

  // Cerrar menú si el usuario hace clic fuera de la navegación
  document.addEventListener("click", (event) => {
    const isClickInside =
      headerNav.contains(event.target) || menuToggle.contains(event.target);

    if (!isClickInside && headerNav.classList.contains("is-open")) {
      closeMenu(headerNav, menuToggle);
    }
  });

  // Restablecer estados si se amplía la ventana por encima del breakpoint de escritorio (768px / 48rem)
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768 && headerNav.classList.contains("is-open")) {
      closeMenu(headerNav, menuToggle);
    }
  });
}

/**
 * Función auxiliar para unificar el cierre del menú
 */
function closeMenu(navElement, toggleButton) {
  navElement.classList.remove("is-open");
  toggleButton.classList.remove("is-active");
  toggleButton.setAttribute("aria-expanded", "false");
}

/**
 * 2. Resaltado Dinámico de la Página Activa en el Header
 */
function initActiveNavLink() {
  const navLinks = document.querySelectorAll(".header__link");
  // Obtiene el nombre del archivo actual desde la URL (ej: "acerca.html")
  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach((link) => {
    const linkHref = link.getAttribute("href");

    // Limpia cualquier estado activo estático previo
    link.classList.remove("header__link--active");
    link.removeAttribute("aria-current");

    // Compara la ruta actual con el atributo href del enlace
    if (
      linkHref === currentPath ||
      (currentPath === "" && linkHref === "index.html")
    ) {
      link.classList.add("header__link--active");
      link.setAttribute("aria-current", "page"); // Estándar de accesibilidad HTML5
    }
  });
}
