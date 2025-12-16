// functional.js

/**
 * Tarea 2: Función Pura para calcular el subtotal.
 * @param {object} item - Debe contener las propiedades 'precio' y 'cantidad'.
 * @returns {number} El subtotal (precio * cantidad).
 */
export const calcularSubtotal = ({ precio, cantidad }) => {
    // 🔑 PUREZA: Solo realiza un cálculo con las entradas.
    return precio * cantidad; 
};