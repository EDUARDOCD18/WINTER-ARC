export const Header = () => {
  const currentPath = window.location.pathname;
  const navLinks = [
    { path: "/index.html", label: "Inicio" },
    { path: "/acerca.html", label: "Acerca de" },
    { path: "/experiencia.html", label: "Experiencia" },
    { path: "/formaciones.html", label: "Formación" },
  ];

  return `
    <header class="header">
      <div class="container header__container">
        <a href="/index.html" class="header__logo">
          Javier<span class="header__logo--accent">.Chacón</span>
        </a>

        <button
          class="header__toggle"
          id="menu-toggle"
          aria-label="Abrir menú de navegación"
          aria-expanded="false"
        >
          <span class="header__icon"></span>
        </button>

        <nav class="header__nav" id="header-nav">
          <ul class="header__menu">
            ${navLinks
              .map((link) => {
                // Corrección aquí: link.path es "/index.html"
                const isActive =
                  currentPath.endsWith(link.path) ||
                  (currentPath === "/" && link.path === "/index.html");
                return `
                <li class="header__item">
                  <a href="${link.path}" class="header__link ${isActive ? "header__link--active" : ""}">
                    ${link.label}
                  </a>
                </li>
              `;
              })
              .join("")}
          </ul>
        </nav>
      </div>
    </header>`;
};
