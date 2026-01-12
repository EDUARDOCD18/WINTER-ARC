// Seleccionamos los elementos del panel de control
const colorPicker = document.querySelector("#color-picker");
const spacingSlider = document.querySelector("#spacing-slider");
const rootElement = document.documentElement;

// 1. Interacción: Cambiar el color de marca dinámicamente
colorPicker.addEventListener("input", (e) => {
  const newColor = e.target.value;

  // Accedemos a las variables de :root y las cambiamos
  rootElement.style.setProperty("--primary-color", newColor);

  console.log(`🎨 Diseño actualizado: Color primario ahora es ${newColor}`);
});

// 2. Interacción: Cambiar el ritmo visual (espaciado)
spacingSlider.addEventListener("input", (e) => {
  const newSpacing = `${e.target.value}px`;

  // Al cambiar esta variable, las tarjetas y el grid se ajustan solos
  rootElement.style.setProperty("--base-spacing", newSpacing);
});
