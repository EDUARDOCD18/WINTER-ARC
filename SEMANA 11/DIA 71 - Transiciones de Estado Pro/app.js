const card = document.getElementById("statusCard");
const btn = document.getElementById("toggleBtn");
const text = document.getElementById("statusText");

btn.addEventListener("click", () => {
  const isInactive = card.getAttribute("data-state") === "inactive";

  if (isInactive) {
    card.setAttribute("data-state", "active");
    text.innerText = "¡Sistema activo!";
    btn.innerText = "Desactivar";
  } else {
    card.setAttribute("data-state", "inactive");
    text.innerText = "Sistema en espera...";
    btn.innerText = "Activar Sistema";
  }
});
