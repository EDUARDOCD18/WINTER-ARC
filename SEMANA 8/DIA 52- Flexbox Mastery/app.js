const navToggle = document.querySelector(".nav__toggle");
const navList = document.querySelector(".nav__list");
const btnToggle = document.getElementById("toggle-card");
const featuresContainer = document.querySelector(".features");

navToggle.addEventListener("click", () => {
  // Alternamos la clase para mostrar/ocultar
  navList.classList.toggle("nav__list--active");

  // Interacción estética: Cambiamos el icono del botón
  const isActive = navList.classList.contains("nav__list--active");
  navToggle.textContent = isActive ? "✕" : "☰";

  // Animación de entrada con JS (opcional, preferible CSS)
  if (isActive) {
    console.log("🎨 Diseño: Menú desplegado. Verificando contraste...");
  }
});

btnToggle.addEventListener("click", () => {
  const cards = document.querySelectorAll(".features__card");

  if (cards.length === 3) {
    // Quitamos una para ver cómo las otras 2 crecen
    cards[2].style.display = "none";
    console.log(
      "📏 Diseño: Las tarjetas restantes crecen para llenar el hueco."
    );
  } else {
    cards[2].style.display = "flex";
    console.log(
      "📏 Diseño: El espacio se reparte equitativamente entre las 3."
    );
  }
});
