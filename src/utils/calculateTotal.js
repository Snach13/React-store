const calculateTotal = (products) => {
  let totalValue = 0;
  for (let product of products) {
    totalValue = totalValue + product.price;
  }
  return `$${Math.ceil(totalValue)}`;
};
export default calculateTotal;
