const navList = document.querySelector(".nav__list");

navList.addEventListener("click", (e) => {
  // 1. Detectar si el clic fue en un disparador de dropdown
  const trigger = e.target.closest(".nav__item--has-dropdown");

  if (trigger) {
    e.preventDefault();

    // 2. Localizar el submenú específico de ese ítem
    const submenu = trigger.querySelector(".nav__submenu");

    // 3. Alternar el modificador BEM
    submenu.classList.toggle("nav__submenu--is-open");

    // 4. (Opcional) Cerrar otros submenús abiertos si existen
    document.querySelectorAll(".nav__submenu--is-open").forEach((openMenu) => {
      if (openMenu !== submenu)
        openMenu.classList.remove("nav__submenu--is-open");
    });
  }
});

// Cerrar el menú si se hace clic en cualquier otra parte de la pantalla
document.addEventListener("click", (e) => {
  if (!e.target.closest(".nav__item--has-dropdown")) {
    document.querySelectorAll(".nav__submenu--is-open").forEach((menu) => {
      menu.classList.remove("nav__submenu--is-open");
    });
  }
});
