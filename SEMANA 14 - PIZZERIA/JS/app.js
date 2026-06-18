/**
 * NAPOLI PIZZA / E-COMMERCE - Lógica de Interfaz
 */

document.addEventListener("DOMContentLoaded", () => {
  // =========================================
  // 1. MENÚ HAMBURGUESA (NAVEGACIÓN)
  // =========================================
  const menuBtn = document.getElementById("menu-toggle");
  const mainNav = document.getElementById("main-nav");

  if (menuBtn && mainNav) {
    menuBtn.addEventListener("click", () => {
      mainNav.classList.toggle("is-open");
      const isMenuOpen = mainNav.classList.contains("is-open");
      menuBtn.setAttribute("aria-expanded", isMenuOpen);

      if (isMenuOpen) {
        menuBtn.innerHTML = "✖";
        menuBtn.style.fontSize = "2.5rem";
      } else {
        menuBtn.innerHTML = "☰";
        menuBtn.style.fontSize = "3rem";
      }
    });
  }

  // ⚡ ¡AQUÍ QUEDA TU BLOQUE DE RESIZE! ⚡
  // Control de Resize (Limpieza de estados móviles en Desktop)
  window.addEventListener("resize", () => {
    // Si la pantalla supera los 768px y los elementos existen en el DOM
    if (window.innerWidth >= 768 && mainNav && menuBtn) {
      mainNav.classList.remove("is-open");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.innerHTML = "☰";
      menuBtn.style.fontSize = "3rem";
    }
  });

  // =========================================
  // 2. VALIDACIÓN DE FORMULARIO
  // =========================================
  const form = document.getElementById("contact-form");
  if (form) {
    // ... resto de la lógica de validación ...
  }

  // ... demás componentes (Tabs, Accordions, etc.) ...
}); // Cierre definitivo de DOMContentLoaded
