const tabsNav = document.querySelector(".tabs__nav");

tabsNav.addEventListener("click", (e) => {
  // 1. Detectar el botón mediante delegación
  const clickedBtn = e.target.closest(".tabs__btn");

  // Guard guardián: si no es botón o ya está activo, salir
  if (!clickedBtn || clickedBtn.classList.contains("tabs__btn--active")) return;

  const targetId = clickedBtn.dataset.target;
  const targetPanel = document.getElementById(targetId);

  // 2. Limpiar estados previos (Botones y Paneles)
  document.querySelectorAll(".tabs__btn").forEach((btn) => {
    btn.classList.remove("tabs__btn--active");
  });

  document.querySelectorAll(".tabs__panel").forEach((panel) => {
    panel.classList.remove("tabs__panel--active");
  });

  // 3. Activar nuevos estados
  clickedBtn.classList.add("tabs__btn--active");
  if (targetPanel) {
    targetPanel.classList.add("tabs__panel--active");
  }
});
