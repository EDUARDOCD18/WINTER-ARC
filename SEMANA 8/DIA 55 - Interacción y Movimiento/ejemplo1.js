const cartBtn = document.getElementById("cart-button");
const dot = document.getElementById("dot");

cartBtn.addEventListener("click", () => {
  // 1. Cambiamos el estado visual
  cartBtn.classList.add("btn-add--success");
  cartBtn.querySelector(".btn-add__text").textContent = "¡Agregado!";

  // 2. Quitamos el pulso de atención
  cartBtn.classList.remove("btn-add--important");

  // 3. Pequeña lógica de JS para un feedback extra
  console.log("✨ Animación: Transición de estado completada.");

  // Volver al estado original después de 2 segundos
  setTimeout(() => {
    cartBtn.classList.remove("btn-add--success");
    cartBtn.querySelector(".btn-add__text").textContent = "Añadir al carrito";
  }, 2000);
});
