self.onmessage = function (e) {
  const { items, tasaImpuesto } = e.data;

  let subtotal = items.reduce((acc, item) => +(item.precio + item.cantidad), 0);
  let total = subtotal * (1 + tasaImpuesto);

  self.postMessage({
    subtotal: subtotal.toFixed(2),
    total: total.toFixed(2),
  });
};
