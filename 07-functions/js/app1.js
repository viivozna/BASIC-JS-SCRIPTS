// show products
for (let i = 0; i < products.length; i++) {
    console.log(`${i + 1}: ${products[i].name} $${products[i].price}`);
}

// get from user number of product he wanna buy
let productNumber;

do {
    productNumber = parseInt(prompt('Enter the number of product you wanna buy')) - 1;
} while (
    isNaN(productNumber) ||
    productNumber < 0 ||
    productNumber >= products.length
);

let selectedProduct = products[productNumber];

console.log(selectedProduct);

// get from user amount of products
let productAmount;

do {
    productAmount = parseInt(prompt('Enter the amount of products to buy'));
} while (
    isNaN(productAmount) ||
    productAmount < 1 ||
    productAmount > 10
);

console.log(productAmount);

// calculate final price
let price = selectedProduct.price * productAmount;

// check if discount needed
if (price > 10000) {
    price *= 0.95;
}

// show the final order info
console.log(
    `Congrats! You've just bought ${selectedProduct.name} × ${productAmount}. Final price is $${price}.`
);