const quote = document.querySelector(".quote");

quote.addEventListener("mouseenter", () => {
  // Como no podemos tocar el ::before directamente, cambiamos una variable
  // o el color base si el pseudo-elemento hereda 'currentColor'
  quote.style.color = "#ff4757";
  console.log("🎨 Diseño: Resaltando la cita y su decoración.");
});

quote.addEventListener("mouseleave", () => {
  quote.style.color = ""; // Volver al original
});
