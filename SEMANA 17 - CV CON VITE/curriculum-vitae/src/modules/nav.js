export const initActiveNavLink = () => {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  const navLinks = document.querySelectorAll(".header__link");

  navLinks.forEach((link) => {
    const linkHref = link.getAttribute("href").replace("/", "");
    const isActive =
      linkHref === currentPath ||
      (currentPath === "index.html" && linkHref === "");

    link.classList.toggle("header__link--active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
};

export const initMobileMenu = () => {
  const menuToggle = document.querySelector("#menu-toggle");
  const mainNav = document.querySelector("#main-nav");

  if (!menuToggle || !mainNav) return;

  const closeMenu = () => {
    mainNav.classList.remove("is-open");
    menuToggle.classList.remove("is-active");
    menuToggle.setAttribute("aria-expanded", "false");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    menuToggle.classList.toggle("is-active");
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Cerrar al presionar Escape o hacer clic fuera
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mainNav.classList.contains("is-open")) {
      closeMenu();
      menuToggle.focus();
    }
  });

  document.addEventListener("click", (e) => {
    if (
      !mainNav.contains(e.target) &&
      !menuToggle.contains(e.target) &&
      mainNav.classList.contains("is-open")
    ) {
      closeMenu();
    }
  });
};
