const URL_API = "https://jsonplaceholder.typicode.com/users";
const contenedorUsuarios = document.getElementById("lista__usuarios");
const filtroInput = document.getElementById("filtro__ciudad");

function filtrarTarjetas() {
  // A. Obtener el texto de búsqueda (convertido a minúsculas)
  const textoBusqueda = filtroInput.value.toLowerCase();

  // B. Obtener TODAS las tarjetas que ya están en el DOM
  // 🔑 document.querySelectorAll devuelve una NodeList
  const tarjetas = document.querySelectorAll(".tarjeta__usuario");

  // C. Iterar sobre cada tarjeta (Similar al .forEach del Array - Día 24)
  tarjetas.forEach((tarjeta) => {
    // 1. Obtener el nombre de la ciudad dentro de esta tarjeta
    // Buscamos el texto completo de la tarjeta (innerHTML) o la ciudad específica
    const ciudadTarjeta = tarjeta
      .querySelector("p:last-child")
      .textContent.toLowerCase();

    // 2. Comprobar si la ciudad CONTIENE el texto de búsqueda
    if (ciudadTarjeta.includes(textoBusqueda)) {
      // Si coincide, lo mostramos
      tarjeta.style.display = ""; // O 'grid', 'block', etc., para mostrarlo
    } else {
      // Si NO coincide, lo ocultamos
      tarjeta.style.display = "none";
    }
  });
}

// 1. Función ASÍNCRONA principal
async function cargarUsuarios() {
  try {
    const response = await fetch(URL_API);

    if (!response.ok) {
      throw new Error(
        `Error ${response.status}: No se lograron obtener los datos`
      );
    }

    const usuariosData = await response.json();

    const tarjetaHTML = usuariosData.map((usuario) => {
      const tarjeta = document.createElement("div");
      tarjeta.classList.add("tarjeta__usuario");

      tarjeta.addEventListener("click", (e) => {
        tarjeta.classList.toggle("seleccionado");
      });

      filtroInput.addEventListener("input", () => {
        filtrarTarjetas();
      });

      tarjeta.innerHTML = `
                <h3>${usuario.name}</h3>
                <p><strong>Usuario:</strong> ${usuario.username}</p>
                <p><strong>Email:</strong> ${usuario.email}</p>
                <p><strong>Ciudad:</strong> ${usuario.address.city}</p>
            `;
      return tarjeta; // Retorna el nodo DIV para el siguiente paso
    });

    tarjetaHTML.forEach((tarjeta) => {
      contenedorUsuarios.appendChild(tarjeta);
    });
  } catch (error) {
    // 4. MANEJO DE ERRORES: Mostrar el error en el contenedor
    contenedorUsuarios.innerHTML = `<p class="error-mensaje">
            Ocurrió un error al cargar los datos: ${error.message}
        </p>`;
    console.error(error);
  }
}

cargarUsuarios();
