const btnPromo = document.getElementById("btn-promo");
const root = document.documentElement;

btnPromo.addEventListener("click", () => {
  // Cambiamos el contenido y el color del pseudo-elemento desde JS
  root.style.setProperty("--badge-text", '"-50% OFF"');
  root.style.setProperty("--primary", "#2ecc71");

  console.log("🎨 Diseño: Pseudo-elemento actualizado mediante variables.");
});
