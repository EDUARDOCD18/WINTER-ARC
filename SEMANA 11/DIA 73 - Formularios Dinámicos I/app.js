const nameInput = document.getElementById("proj-name");
const nameError = document.getElementById("name-error");

// Se dispara cuando el usuario quita el foco del elemento
nameInput.addEventListener("blur", () => {
  // .trim() elimina espacios en blanco accidentales al inicio/final
  if (nameInput.value.trim() === "") {
    nameError.classList.add("show");
    nameInput.classList.add("input-error");
  } else {
    nameError.classList.remove("show");
    nameInput.classList.remove("input-error");
  }
});

// Pro-tip: Quitar el error inmediatamente cuando el usuario empiece a escribir de nuevo
nameInput.addEventListener("input", () => {
  if (nameInput.value.trim() !== "") {
    nameError.classList.remove("show");
    nameInput.classList.remove("input-error");
  }
});
