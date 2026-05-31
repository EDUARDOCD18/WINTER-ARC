const nav = document.querySelector(".ecom-nav");

nav.addEventListener("click", (e) => {
  const trigger = e.target.closest(".ecom-nav__item--has-submenu");
  if (!trigger) return;

  // Alternar clase de estado BEM
  trigger.classList.toggle("ecom-nav__item--is-open");
  console.log("hola");
});
