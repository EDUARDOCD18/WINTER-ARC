const themeBtn = document.querySelector("#theme-toggle");

themeBtn.addEventListener("click", () => {
  const root = document.documentElement;

  // Verificamos el color actual y swicheamos
  if (root.style.getPropertyValue("--bg-main") === "#1a1a1a") {
    root.style.setProperty("--bg-main", "#f8f9fa");
    root.style.setProperty("--text-dark", "#2d3436");
  } else {
    root.style.setProperty("--bg-main", "#1a1a1a");
    root.style.setProperty("--text-dark", "#ffffff");
  }
});
