// 1. Selección de elementos clave
const emailField = document.getElementById("email-field");
const tooltip = document.getElementById("email-error");
const newsletterForm = document.getElementById("newsletter-form");

// Expresión regular para validar el formato de email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Función para activar el estado de error
 */
const showError = () => {
  tooltip.classList.add("visible");
  emailField.classList.add("invalid-state");

  // RETO 3: Actualizamos el estado para tecnologías de asistencia
  emailField.setAttribute("aria-invalid", "true");
};

/**
 * Función para limpiar el estado de error
 */
const hideError = () => {
  tooltip.classList.remove("visible");
  emailField.classList.remove("invalid-state");

  // RETO 3: El campo vuelve a ser considerado válido por el sistema
  emailField.setAttribute("aria-invalid", "false");
};

// --- GESTIÓN DE EVENTOS ---

/**
 * EVENTO BLUR: Se dispara cuando el usuario sale del input.
 * Es el momento perfecto para validar sin interrumpir el flujo de escritura.
 */
emailField.addEventListener("blur", () => {
  const value = emailField.value.trim();

  // Solo validamos si el campo no está vacío
  if (value !== "" && !emailRegex.test(value)) {
    showError();
  } else {
    hideError();
  }
});

/**
 * EVENTO INPUT: Se dispara cada vez que el usuario presiona una tecla.
 * Lo usamos para "perdonar" el error en cuanto el usuario empieza a corregirlo.
 */
emailField.addEventListener("input", () => {
  // Si el usuario ya corrigió el formato, quitamos el error inmediatamente
  if (emailRegex.test(emailField.value)) {
    hideError();
  }
});

/**
 * EVENTO SUBMIT: Validación final antes del envío
 */
newsletterForm.addEventListener("submit", (e) => {
  if (!emailRegex.test(emailField.value)) {
    e.preventDefault(); // Evita que el formulario se envíe
    showError();
    emailField.focus(); // Devuelve el cursor al campo con error
  } else {
    alert("¡Gracias por suscribirte!");
  }
});
