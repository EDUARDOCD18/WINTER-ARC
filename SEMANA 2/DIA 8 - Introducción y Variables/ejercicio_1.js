const TASA_IMPUESTO = 0.15; // 15% de impuesto
let precioNeto = 500; // Precio sin impuesto
let calculoImpuesto = precioNeto * TASA_IMPUESTO; // Cálculo del impuesto
let precioTotal = precioNeto + calculoImpuesto; // Precio total con impuesto
console.log("Precio: " + precioNeto);
console.log("Porcentaje de impuesto: " + TASA_IMPUESTO * 100 + "%");
console.log("Valor del impuesto: " + calculoImpuesto);
console.log("Total a pagar: " + precioTotal);
