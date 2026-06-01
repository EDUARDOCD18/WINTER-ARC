const nav = document.querySelector(".ecom-nav");
const details = document.querySelector(".product-details");
const searchInput = document.getElementById("search-input");
const stockFilter = document.getElementById("stock-filter");
const products = document.querySelectorAll(".product-card");

/* Evento para desplegar el submenú de las categorías */
nav.addEventListener("click", (e) => {
  const trigger = e.target.closest(".ecom-nav__item--has-submenu");
  if (!trigger) return;

  // Alternar clase de estado BEM
  trigger.classList.toggle("ecom-nav__item--is-open");
  console.log("hola");
});

/* Evento para desplegar los detalles del artículo */
details.addEventListener("click", (e) => {
  const header = e.target.closest(".product-details__header");
  if (!header) return;

  const item = header.parentElement;

  // Cerrar otros ítems para mantener la limpieza (Comportamiento exclusivo)
  details.querySelectorAll(".product-details__item").forEach((i) => {
    if (i !== item) i.classList.remove("product-details__item--is-open");
  });

  item.classList.toggle("product-details__item--is-open");
});

/* Función para los filtros */
function filterProducts() {
  const searchItem = searchInput.ariaValueMax.toLowerCase();
  const onlyStock = stockFilter.checked;

  products.forEach((product) => {
    const title = product
      .querySelector(".product-card__title")
      .textContent.toLocaleLowerCase();
    const inStock = product.dataset.inStock === "true";

    // Lógica de filtrado (AND)
    const matchesSearch = title.includes(searchItem);
    const matchesStock = !onlyStock || inStock;

    if (matchesSearch && matchesStock) {
      product.computedStyleMap.display = "block";
    } else {
      product.computedStyleMap.display = "none";
    }
  });
}
searchInput.addEventListener("input", filterProducts);
stockFilter.addEventListener("change", filterProducts);
