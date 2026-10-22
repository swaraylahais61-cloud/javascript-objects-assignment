const products = [
    { name: "Notebook", price: 3, stock: 10 },
    { name: "Pen", price: 1.5, stock: 3 },
    { name: "Backpack", price: 25, stock: 4 },
    { name: "Ruler", price: 2, stock: 12 }
];

function summarizeInventory(items) {
    const totalValue = items.reduce(
        (sum, item) => sum + item.price * item.stock,
        0
    );

    const lowStockProducts = items
        .filter(item => item.stock < 5)
        .map(item => item.name);

    return { totalValue, lowStockProducts };
}

console.log(summarizeInventory(products));