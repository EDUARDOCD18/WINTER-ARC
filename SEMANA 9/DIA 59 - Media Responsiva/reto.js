document.querySelectorAll(".project-card__img").forEach((img) => {
  // Si la imagen ya está en caché, se dispara de inmediato
  if (img.complete) {
    img.classList.add("loaded");
    img.parentElement.closest(".skeleton").classList.remove("skeleton");
  }

  // Si no, esperamos al evento load
  img.addEventListener("load", () => {
    img.classList.add("loaded");
    // Quitamos la clase skeleton del contenedor padre
    img.closest(".project-card__media").classList.remove("skeleton");
    console.log("🖼️ Media: Imagen cargada y skeleton removido.");
  });
});
