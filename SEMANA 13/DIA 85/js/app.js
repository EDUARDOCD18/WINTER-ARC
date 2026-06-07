/**
 * ISP E-COMMERCE PLATFORM
 * Core Application Logic
 */

// ==========================================
// 1. SELECTORES DEL DOM
// ==========================================
const DOM = {
  nav: document.querySelector(".ecom-nav"),
  details: document.querySelector(".product-details"),
  searchInput: document.getElementById("search-input"),
  stockFilter: document.getElementById("stock-filter"),
  products: document.querySelectorAll(".product-card"),
  catalog: document.getElementById("catalog-view"),
  skeleton: document.getElementById("skeleton-container"),
  modal: document.getElementById("checkout-modal"),
  btnOpenModal: document.getElementById("open-checkout-btn"),
  btnCloseModal: document.getElementById("close-modal-btn"),
  overlay: document.getElementById("modal-overlay"),
  form: document.getElementById("checkout-form"),
  tabList: document.querySelector(".ecom-tabs"),
  tabs: document.querySelectorAll(".ecom-tabs__btn"),
  panels: document.querySelectorAll(".ecom-panel"),
};

// ==========================================
// 2. NAVEGACIÓN Y ACORDEONES
// ==========================================

// Menú Lateral
if (DOM.nav) {
  DOM.nav.addEventListener("click", (e) => {
    const trigger = e.target.closest(".ecom-nav__item--has-submenu");
    if (!trigger) return;

    trigger.classList.toggle("ecom-nav__item--is-open");
    const link = trigger.querySelector(".ecom-nav__link");
    const isOpen = trigger.classList.contains("ecom-nav__item--is-open");
    link.setAttribute("aria-expanded", isOpen);
  });
}

// Detalles del Producto
if (DOM.details) {
  DOM.details.addEventListener("click", (e) => {
    const header = e.target.closest(".product-details__header");
    if (!header) return;

    const item = header.parentElement;

    // Comportamiento exclusivo
    DOM.details.querySelectorAll(".product-details__item").forEach((i) => {
      if (i !== item) {
        i.classList.remove("product-details__item--is-open");
        i.querySelector(".product-details__header").setAttribute(
          "aria-expanded",
          "false",
        );
      }
    });

    item.classList.toggle("product-details__item--is-open");
    const isOpen = item.classList.contains("product-details__item--is-open");
    header.setAttribute("aria-expanded", isOpen);
  });
}

// ==========================================
// 3. MOTOR DE BÚSQUEDA Y FILTRADO
// ==========================================
function filterProducts() {
  const searchTerm = DOM.searchInput.value.toLowerCase().trim();
  const onlyStock = DOM.stockFilter.checked;

  DOM.products.forEach((product) => {
    const title = product
      .querySelector(".product-card__title")
      .textContent.toLowerCase();
    const inStock = product.dataset.inStock === "true";

    const matchesSearch = title.includes(searchTerm);
    const matchesStock = !onlyStock || inStock;

    product.style.display = matchesSearch && matchesStock ? "flex" : "none";
  });
}

if (DOM.searchInput && DOM.stockFilter) {
  DOM.searchInput.addEventListener("input", filterProducts);
  DOM.stockFilter.addEventListener("change", filterProducts);
}

// ==========================================
// 4. SIMULACIÓN DE CARGA (API)
// ==========================================
function loadCatalog() {
  if (!DOM.skeleton || !DOM.catalog) return;

  DOM.skeleton.style.display = "block";
  DOM.catalog.style.opacity = "0";

  setTimeout(() => {
    DOM.skeleton.style.display = "none";
    DOM.catalog.style.opacity = "1";
    DOM.catalog.style.transition = "opacity 0.5s ease";
  }, 2000);
}

// ==========================================
// 5. SISTEMA DE CHECKOUT MODAL (CON TRAP FOCUS)
// ==========================================
const focusableElementsString =
  'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
let focusableElements = [];
let firstTabStop, lastTabStop;

function openModal() {
  DOM.modal.classList.add("is-open");
  DOM.modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden"; // Evita el scroll del fondo

  focusableElements = Array.from(
    DOM.modal.querySelectorAll(focusableElementsString),
  );
  if (focusableElements.length > 0) {
    firstTabStop = focusableElements[0];
    lastTabStop = focusableElements[focusableElements.length - 1];
    document.getElementById("user-name").focus();
  }

  document.addEventListener("keydown", trapTabKey);
}

function closeModal() {
  DOM.modal.classList.remove("is-open");
  DOM.modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "auto";

  document.removeEventListener("keydown", trapTabKey);
  DOM.btnOpenModal.focus();
}

function trapTabKey(e) {
  if (e.key === "Escape") closeModal();

  // BUG CORREGIDO: "Tab" y "shiftKey"
  if (e.key === "Tab") {
    if (e.shiftKey) {
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

if (DOM.btnOpenModal) DOM.btnOpenModal.addEventListener("click", openModal);
if (DOM.btnCloseModal) DOM.btnCloseModal.addEventListener("click", closeModal);
if (DOM.overlay) DOM.overlay.addEventListener("click", closeModal);

// Validación de Seguridad del Formulario
if (DOM.form) {
  DOM.form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("user-name");
    const cardInput = document.getElementById("credit-card");
    const nameError = document.getElementById("name-error");
    const cardError = document.getElementById("card-error");

    nameError.textContent = "";
    cardError.textContent = "";
    let isValid = true;

    const sanitizedName = nameInput.value.replace(/<[^>]*>?/gm, "").trim();

    if (sanitizedName.length < 3) {
      nameError.textContent =
        "El nombre debe tener al menos 3 caracteres válidos.";
      isValid = false;
    }

    const cardRegex = /^\d{16}$/;
    if (!cardRegex.test(cardInput.value)) {
      cardError.textContent =
        "La tarjeta debe contener exactamente 16 números.";
      isValid = false;
    }

    if (isValid) {
      const btnSubmit = DOM.form.querySelector(".ecom-form__submit");
      const originalText = btnSubmit.textContent;

      btnSubmit.textContent = "Procesando de forma segura...";
      btnSubmit.style.background = "#636e72";
      btnSubmit.disabled = true;

      setTimeout(() => {
        alert(`¡Transacción exitosa para ${sanitizedName}!`);
        closeModal();
        DOM.form.reset();
        btnSubmit.textContent = originalText;
        btnSubmit.style.background = ""; // Revierte al CSS original
        btnSubmit.disabled = false;
      }, 2000);
    }
  });
}

// ==========================================
// 6. GESTIÓN DE VISTAS (TABS DASHBOARD)
// ==========================================
if (DOM.tabList) {
  DOM.tabList.addEventListener("click", (e) => {
    const clickedTab = e.target.closest(".ecom-tabs__btn");
    if (!clickedTab) return;

    DOM.tabs.forEach((tab) => {
      tab.classList.remove("ecom-tabs__btn--active");
      tab.setAttribute("aria-selected", "false");
    });

    DOM.panels.forEach((panel) => {
      panel.classList.remove("ecom-panel--active");
      panel.setAttribute("hidden", "true");
    });

    clickedTab.classList.add("ecom-tabs__btn--active");
    clickedTab.setAttribute("aria-selected", "true");

    // BUG CORREGIDO: getAttribute
    const targetPanelId = clickedTab.getAttribute("aria-controls");
    const targetPanel = document.getElementById(targetPanelId);

    if (targetPanel) {
      targetPanel.classList.add("ecom-panel--active");
      targetPanel.removeAttribute("hidden");
    }
  });
}

// Inicialización
document.addEventListener("DOMContentLoaded", loadCatalog);
