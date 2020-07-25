function formatNumber(value) {
  let valueFormated = value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return valueFormated;
}

export { formatNumber };
