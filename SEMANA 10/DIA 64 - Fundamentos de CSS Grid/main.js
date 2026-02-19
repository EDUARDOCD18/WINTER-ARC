const sidebar = document.querySelector(".sidebar");
const toggleBtn = document.createElement("button");
const layout = document.querySelector(".dashboard-layout");

toggleBtn.innerText = "⇔";
toggleBtn.className = "btn btn-secondary";
sidebar.prepend(toggleBtn);

toggleBtn.addEventListener("click", () => {
  const layout = document.querySelector(".dashboard-layout");
  // Cambiamos el estilo de la grid dinámicamente
  if (layout.style.gridTemplateColumns === "80px 1fr") {
    layout.style.gridTemplateColumns = "250px 1fr";
  } else {
    layout.style.gridTemplateColumns = "80px 1fr";
  }
});

// Creamos un botón de hamburguesa dinámicamente
const menuBtn = document.createElement("button");
menuBtn.innerHTML = "☰";
menuBtn.className = "btn btn-secondary";
menuBtn.style.marginBottom = "2rem";

sidebar.prepend(menuBtn);

menuBtn.addEventListener("click", () => {
  layout.classList.toggle("collapsed");
  console.log(
    "Layout actualizado: " +
      (layout.classList.contains("collapsed") ? "Compacto" : "Expandido"),
  );
});
