/**
 * functional.js
 * Biblioteca de funciones puras para la lógica de negocio.
 */

/**
 * 1. Calcular Subtotal (Función Pura)
 * Dada la misma entrada (precio, cantidad), siempre devuelve el mismo resultado.
 */
export const calcularSubtotal = (precio, cantidad) => precio * cantidad;

/**
 * 2. Aplicar Descuento (Reto Día 42)
 * @param {number} total - El monto total actual.
 * @param {string} codigo - El cupón ingresado por el usuario.
 * @returns {number} - Un NUEVO valor (total procesado).
 */
export const aplicarDescuento = (total, codigo) => {
  const DESCUENTO_JS20 = 0.2; // 20%

  // Convertimos a mayúsculas para que no importe si escriben "js20" o "JS20"
  if (codigo.toUpperCase() === "JS20") {
    return total * (1 - DESCUENTO_JS20);
  }

  return total; // Si el código no coincide, devuelve el total original intacto.
};

/**
 * 3. Formatear Moneda (Función de ayuda pura)
 * Facilita la consistencia visual sin mutar datos.
 */
export const formatearPrecio = (valor, simbolo = "$") => {
  return `${simbolo}${Number(valor).toFixed(2)}`;
};
