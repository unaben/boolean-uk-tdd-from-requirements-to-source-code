const itemsTotalCost = (basket) => {
  let total = 0;
  basket.forEach((item) => (total = total + item.price * item.quantity));

  return total;
};
module.exports = itemsTotalCost;
