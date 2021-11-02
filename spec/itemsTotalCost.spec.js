const itemsTotalCost = require("../src/itemsTotalCost");

describe("Total Cost of Items in Basket", () => {
  it("returns total cost if basket items are found", () => {
    // 1. setup
    const basket = [
      { name: "Strawberry", price: 1.45, quantity: 1 },
      { name: "Kiwi", price: 1.05, quantity: 1 },
    ];
    // 2. Execute
    const result = itemsTotalCost(basket);
    // 3. Verify
    expect(result).toEqual(2.50);
  });

  it("returns 0 if basket items are not found", () => {
    // 1. setup
    const basket = [];
    // 2. Execute
    const result = itemsTotalCost(basket);
    // 3. Verify
    expect(result).toEqual(0);
  });
});
