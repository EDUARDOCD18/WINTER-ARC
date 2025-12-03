/* function mostrarPropiedad(){
    try{
        const objeto = null;
        console.log(objeto.prop);
    }
    catch(error){
        console.log("Ha habido un error en la ejecución.");
        console.log("Detalles: ", error.message);
    }

    console.log("La app sigue funcionando");
}

mostrarPropiedad(); */

/* function sumarPositivos(a, b) {
  if (a < 0 || b < 0) {
    throw new Error("Ambos números deber ser positivos para la suma");
  }
  return a + b;
}

try{
    const resultado = sumarPositivos(22,2)
    console.log("Resultado", resultado);
} catch(error){
    console.log("Error en la suma: ", error.message);
}
finally{
    console.log("Proceso terminado");
} */

function validarEdad(edad) {
  if (edad < 18) {
    throw new Error("Debes ser mayor de edad para ingresar.");
  }
  return true;
}

try {
  const edad = validarEdad(12);
  console.log("Edad valida, puede ingresar.");
} catch (error) {
  console.log("Acceso denegado");
  console.warn("Detalles: ", error.message);
} finally {
  console.log("Registro finalizado");
}

console.log("==========================");

class Producto {
  constructor(nombre, precio) {
    // 🔑 1. VALIDACIÓN: Si la condición no se cumple, lanzamos un error.
    if (precio <= 0) {
      // Detiene la ejecución del constructor y lanza el error.
      throw new Error("El precio debe ser un valor positivo.");
    }

    // 2. Si llegamos aquí, los datos son válidos y podemos inicializar
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
  }

  // Método de ejemplo (Día 30)
  mostrarPrecio() {
    return `El producto ${this.nombre} cuesta $${this.precio}.`;
  }
}

let miProducto

try {
    miProducto = new Producto("Smartphone", -400)
    console.log("Producto agregado con éxito: ", miProducto.nombre);
} catch (error) {
    console.warn(`Error al crear el producto: ${error.message}`);
}

if(miProducto){
    console.log(miProducto.mostrarPrecio());
}else{
    console.log("La instancia de Producto no fue creada");
}