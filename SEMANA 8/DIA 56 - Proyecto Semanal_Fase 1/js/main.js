document.addEventListener("DOMContentLoaded", () => {
  const themeBtn = document.getElementById("theme-btn");
  const nav = document.querySelector(".nav");

  // Cambiar tema (Día 50)
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const isDark = document.body.classList.contains("dark-theme");
    themeBtn.textContent = isDark ? "Modo Claro" : "Modo Oscuro";
  });

  // Scroll Feedback (Día 55)
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      nav.style.background = "var(--card-bg)";
      nav.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
    } else {
      nav.style.background = "transparent";
      nav.style.boxShadow = "none";
    }
  });
});
