/**
 * NAPOLI PIZZA - Lógica de Interfaz
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Seleccionamos los elementos del DOM
  const menuBtn = document.getElementById("menu-toggle");
  const mainNav = document.getElementById("main-nav");

  // 2. Verificamos que existan para evitar errores en la consola
  if (menuBtn && mainNav) {
    // 3. Agregamos el evento de escucha
    menuBtn.addEventListener("click", () => {
      // Alternamos la clase que abre/cierra el menú
      mainNav.classList.toggle("is-open");

      // Lógica de Accesibilidad: Le decimos al navegador si el menú está abierto o cerrado
      const isMenuOpen = mainNav.classList.contains("is-open");
      menuBtn.setAttribute("aria-expanded", isMenuOpen);

      // Opcional: Cambiar el ícono a una 'X' cuando esté abierto
      if (isMenuOpen) {
        menuBtn.innerHTML = "✖";
        menuBtn.style.fontSize = "2.5rem"; // Ajuste visual ligero para la X
      } else {
        menuBtn.innerHTML = "☰";
        menuBtn.style.fontSize = "3rem";
      }
    });
  }
});
