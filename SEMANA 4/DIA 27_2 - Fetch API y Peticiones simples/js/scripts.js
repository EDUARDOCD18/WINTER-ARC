/* Objetivo: Obtener una lista de 10 usuarios y mostrarlos en la consola. */
// La URL de la API que nos dará un array de 10 objetos
const URL_API = "https://jsonplaceholder.typicode.com/users";

// 1. Iniciamos la petición
fetch(URL_API)
  // 2. 🔑 PRIMER THEN: Convertir la respuesta del servidor a JSON
  .then((response) => {
    // Verificamos si la respuesta fue exitosa (código de estado 200-299)
    if (!response.ok) {
      // Si hay un error HTTP, lanzamos una excepción para que .catch() la capture
      throw new Error(`Error HTTP: ${response.status}`);
    }

    return response.json();
  })

  // 3. 🔑 SEGUNDO THEN: Recibir los datos ya en formato JavaScript (JSON parseado)

  .then((dataUsuarios) => {
    console.log("Datos recibidos (Array de 10 usuarios):", dataUsuarios);

    // Aquí es donde harías la manipulación del DOM
    dataUsuarios.forEach((usuario) => {
      console.log(`ID: ${usuario.id}, Nombre: ${usuario.name}`);
    });
  })
  // 4. CATCH: Capturar cualquier error en el fetch inicial o en la conversión
  .catch((error) => {
    console.error("Hubo un problema con la petición Fetch:", error.message);
  });


  /*  */