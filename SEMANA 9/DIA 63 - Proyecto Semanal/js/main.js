const card = document.getElementById("profile-card");
const themeBtn = document.getElementById("theme-toggle");
const themeText = document.getElementById("theme-text");
const statusForm = document.getElementById("status-form");
const statusInput = document.getElementById("status-input");
const profileImg = document.querySelector(".profile-img");

// --- 1. GESTIÓN DE TEMAS ---
const applyTheme = (theme) => {
  if (theme === "dark") {
    document.body.classList.add("dark-theme");
    if (themeText) themeText.textContent = "☀️ Modo Claro";
  } else {
    document.body.classList.remove("dark-theme");
    if (themeText) themeText.textContent = "🌙 Modo Oscuro";
  }
};

// Carga inicial (Persistencia + Sistema Operativo)
const savedTheme = localStorage.getItem("theme");
const osPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(savedTheme || (osPrefersDark ? "dark" : "light"));

themeBtn.addEventListener("click", () => {
  const isDark = document.body.classList.contains("dark-theme");
  const newTheme = isDark ? "light" : "dark";
  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});

// --- 2. SIMULACIÓN DE ESTADOS (LOADING TO IDEAL) ---
window.addEventListener("load", () => {
  setTimeout(() => {
    card.setAttribute("data-state", "ideal");
    document
      .querySelectorAll(".skeleton")
      .forEach((el) => el.classList.remove("skeleton"));
  }, 2000); // 2 segundos de carga simulada
});

// --- 3. VALIDACIÓN PRO ---
statusForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (statusInput.value.length < 5) {
    statusForm.classList.add("group-error", "shake");
    setTimeout(() => statusForm.classList.remove("shake"), 400);
  } else {
    statusForm.classList.remove("group-error");
    alert("✅ Estado actualizado: " + statusInput.value);
    statusInput.value = "";
  }
});

// --- NUEVO: Validación de Estado Vacío para el Nombre ---
const checkEmptyName = () => {
  const userNameDisplay = document.querySelector(".user-name");

  // Si el contenido está vacío o solo tiene espacios
  if (userNameDisplay.textContent.trim() === "") {
    userNameDisplay.textContent = "¡No te quedes sin nombre! 👤";
    userNameDisplay.style.color = "var(--text-muted)";
  } else {
    userNameDisplay.style.color = "var(--text-main)";
  }
};

// Ejecutamos el chequeo después de que termine la simulación de carga
window.addEventListener("load", () => {
  setTimeout(() => {
    // ... (tu código anterior)
    checkEmptyName();
  }, 2000);
});

if (profileImg.complete) {
  // Si la imagen ya estaba en caché
  profileImg.classList.add("loaded");
} else {
  // Si aún está descargando
  profileImg.addEventListener("load", () => {
    profileImg.classList.add("loaded");
    console.log("🖼️ Imagen enfocada y cargada.");
  });
}
