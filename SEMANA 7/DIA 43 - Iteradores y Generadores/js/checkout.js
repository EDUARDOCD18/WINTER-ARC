export function* procesoCompra(carrito) {
  const total = carrito.obtenerSumaTotal();

  yield `🛒 Revisando ${carrito.items.length} productos...`;
  yield `💸 Total a pagar: $${total}. ¿Deseas aplicar un cupón?`;
  yield `✅ Pago procesado con éxito. ¡Gracias por tu compra!`;
}
