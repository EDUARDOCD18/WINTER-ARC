/**
 * NAPOLI PIZZA - Lógica de Interfaz
 */

document.addEventListener("DOMContentLoaded", () => {
  
  // =========================================
  // 1. MENÚ HAMBURGUESA (NAVEGACIÓN)
  // =========================================
  const menuBtn = document.getElementById("menu-toggle");
  const mainNav = document.getElementById("main-nav");

  if (menuBtn && mainNav) {
    menuBtn.addEventListener("click", () => {
      // Alternamos la clase que abre/cierra el menú
      mainNav.classList.toggle("is-open");

      // Lógica de Accesibilidad
      const isMenuOpen = mainNav.classList.contains("is-open");
      menuBtn.setAttribute("aria-expanded", isMenuOpen);

      // Cambiar el ícono visualmente
      if (isMenuOpen) {
        menuBtn.innerHTML = "✖";
        menuBtn.style.fontSize = "2.5rem"; 
      } else {
        menuBtn.innerHTML = "☰";
        menuBtn.style.fontSize = "3rem";
      }
    });
  }

  // =========================================
  // 2. VALIDACIÓN DE FORMULARIO (CONTACTO)
  // =========================================
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", (e) => {
      let isValid = true;

      // Elementos de entrada
      const nameInput = document.getElementById("client-name");
      const emailInput = document.getElementById("client-email");
      const msgInput = document.getElementById("client-msg");

      // Contenedores de error
      const nameError = document.getElementById("name-error");
      const emailError = document.getElementById("email-error");
      const msgError = document.getElementById("msg-error");

      // Validar Nombre (CORREGIDO: .value)
      if (!nameInput.value.trim()) {
        nameError.textContent = "Por favor, ingresa tu nombre.";
        isValid = false;
      } else {
        nameError.textContent = "";
      }

      // Validar Email con la API nativa del navegador
      if (!emailInput.validity.valid) {
        emailError.textContent = "Ingresa un correo electrónico válido.";
        isValid = false;
      } else {
        emailError.textContent = "";
      }

      // Validar Mensaje
      if (!msgInput.value.trim()) {
        msgError.textContent = "El mensaje no puede estar vacío.";
        isValid = false;
      } else {
        msgError.textContent = "";
      }

      // Control del Envío
      if (!isValid) {
        e.preventDefault(); // Detiene el envío si hay errores
      } else {
        e.preventDefault(); // Evitamos recarga real para entorno de pruebas
        alert("¡Mensaje enviado con éxito! Nos comunicaremos contigo.");
        form.reset();
      }
    });
  }

});