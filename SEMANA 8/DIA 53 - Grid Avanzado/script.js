const btnToggle = document.getElementById("toggle-sidebar");
const dashboard = document.getElementById("dashboard");

btnToggle.addEventListener("click", () => {
  // Al alternar esta clase, el grid-template-columns cambia de 240px a 0
  dashboard.classList.toggle("dashboard--no-sidebar");

  // Feedback visual
  const isHidden = dashboard.classList.contains("dashboard--no-sidebar");
  btnToggle.textContent = isHidden ? "Mostrar Sidebar" : "Ocultar Sidebar";

  console.log("🎨 Diseño: Reconfigurando el plano del Grid...");
});
