const nav = document.querySelector(".ecom-nav");
const details = document.querySelector(".product-details");
const searchInput = document.getElementById("search-input");
const stockFilter = document.getElementById("stock-filter");
const products = document.querySelectorAll(".product-card");
const catalog = document.getElementById("catalog-view");
const skeleton = document.getElementById("skeleton-container");
const modal = document.getElementById("checkout-modal");
const btnOpen = document.getElementById("open-checkout-btn");
const btnClose = document.getElementById("close-modal-btn");
const overlay = document.getElementById("modal-overlay");
const form = document.getElementById("checkout-form");
const tabList = document.querySelector(".ecom-tabs");
const tabs = document.querySelectorAll(".ecom-tabs__btn");
const panels = document.querySelectorAll(".ecom-panel");

/* Evento para desplegar el submenú de las categorías */
nav.addEventListener("click", (e) => {
  const trigger = e.target.closest(".ecom-nav__item--has-submenu");
  if (!trigger) return;
  trigger.classList.toggle("ecom-nav__item--is-open");
});

/* Evento para desplegar los detalles del artículo */
details.addEventListener("click", (e) => {
  const header = e.target.closest(".product-details__header");
  if (!header) return;

  const item = header.parentElement;

  // Cerrar otros ítems (comportamiento exclusivo)
  details.querySelectorAll(".product-details__item").forEach((i) => {
    if (i !== item) i.classList.remove("product-details__item--is-open");
  });

  item.classList.toggle("product-details__item--is-open");

  // Accesibilidad: actualizar aria-expanded
  const isOpen = item.classList.contains("product-details__item--is-open");
  header.setAttribute("aria-expanded", isOpen);
});

/* Función para los filtros */
function filterProducts() {
  // CORRECCIÓN: .value en lugar de .ariaValueMax
  const searchTerm = searchInput.value.toLowerCase();
  const onlyStock = stockFilter.checked;

  products.forEach((product) => {
    const title = product
      .querySelector(".product-card__title")
      .textContent.toLowerCase();

    const inStock = product.dataset.inStock === "true";

    // Lógica de filtrado
    const matchesSearch = title.includes(searchTerm);
    const matchesStock = !onlyStock || inStock;

    // CORRECCIÓN: Usar .style.display en lugar de .computedStyleMap
    if (matchesSearch && matchesStock) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

searchInput.addEventListener("input", filterProducts);
stockFilter.addEventListener("change", filterProducts);

/* Función para simular la carga de la API */
function loadCatalog() {
  skeleton.style.display = "block";
  catalog.style.opacity = "0";

  setTimeout(() => {
    skeleton.style.display = "none";
    catalog.style.opacity = "1";
    catalog.style.transition = "opacity 0.5s ease";
  }, 2500);
}

/* VENTANA MODAL */
// Elementos enfocables para el Trap Focus
const focusableElementsString =
  'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
let focusableElements = [];
let firstTabStop;
let lastTabStop;

// -- 1. CONTROL DEL MODAL --
function openModal() {
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");

  // Configurar Trap Focus
  focusableElements = Array.from(
    modal.querySelectorAll(focusableElementsString),
  );
  firstTabStop = focusableElements[0];
  lastTabStop = focusableElements[focusableElements.length - 1];

  // Enfocar el primer input al abrir
  document.getElementById("user-name").focus();

  // Escuchar teclado
  document.addEventListener("keydown", trapTabKey);
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.removeEventListener("keydown", trapTabKey);
  btnOpen.focus();
}

btnOpen.addEventListener("click", openModal);
btnClose.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// -- 2. LÓGICA DE TRAP FOCUS --
function trapTabKey(e) {
  // Cerrar con ESC
  if (e.key === "Escape") closeModal();

  // Interceptar Tab
  if (e.key === "tab") {
    if (e.shifKey) {
      if (document.activeElement === firstTabStop) {
        e.preventDefault();
        lastTabStop.focus();
      }
    } else {
      if (document.activeElement === lastTabStop) {
        e.preventDefault();
        firstTabStop.focus();
      }
    }
  }
}

// -- 3. VALIDACIÓN DE SEGURIDAD BÁSICA --
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameInput = document.getElementById("user-name");
  const cardInput = document.getElementById("credit-card");
  const nameError = document.getElementById("name-error");
  const cardError = document.getElementById("card-error");

  // Resetear errores
  nameError.textContent = "";
  cardError.textContent = "";

  let isValid = true;

  // Sanitización y Validación Básica (XSS prevention conceptual)
  // Limpiamos etiquetas HTML usando una expresión regular
  const sanitizedName = nameInput.value.replace(/<[^>]*>?/gm, "").trim();

  if (sanitizedName.length < 3) {
    nameError.textContent =
      "El nombre debe tener al menos 3 caracteres válidos.";
    isValid = false;
  }

  // Validación de Tarjeta (Solo 16 números)
  const cardRegex = /^\d{16}$/;
  if (!cardRegex.test(cardInput.value)) {
    cardError.textContent = "La tarjeta debe contener exactamente 16 números.";
    isValid = false;
  }

  if (isValid) {
    // Si pasa la validación, simulamos el envío exitoso
    const btnSubmit = form.querySelector(".ecom-form__submit");
    btnSubmit.textContent = "Procesando...";
    btnSubmit.style.background = "#636e72";

    setTimeout(() => {
      alert(`¡Pago exitoso para ${sanitizedName}!`);
      closeModal();
      form.reset();
      btnSubmit.textContent = "Procesar Pago Seguro";
      btnSubmit.style.background = "#00b894";
    }, 2000);
  }
});

if (tabList) {
  tabList.addEventListener("click", (e) => {
    // Verificamos que el clic fue en un botón de pestaña
    const clickedTab = e.target.closest(".ecom-tabs__btn");
    if (!clickedTab) return; // Si hizo clic en un espacio vacío, ignoramos

    // 1. Desactivar todos los botones y paneles
    tabs.forEach((tab) => {
      tab.classList.remove("ecom-tabs__btn--active");
      tab.setAttribute("aria-selected", "false");
    });

    panels.forEach((panel) => {
      panel.classList.remove("ecom-panel--active");
      panel.setAttribute("hidden", true);
    });

    // 2. Activar el botón clickeado
    clickedTab.classList.add("ecom-tabs__btn--active");
    clickedTab.setAttribute("aria-selected", "true");

    // 3. Activar el panel correspondiente leyendo el aria-controls
    const targetPanelId = clickedTab.getAtrribute("aria-controls");
    const targetPanel = document.getElementById(targetPanelId);

    if (targetPanel) {
      targetPanel.classList.add("ecom-panel--active");
      targetPanel.removeAttribute("hidden");
    }
  });
}

loadCatalog();
