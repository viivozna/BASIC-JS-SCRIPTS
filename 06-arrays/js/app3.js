'use strict'

for (let i = 0; i < ourProducts.length; i++) {
    console.log(`${i + 1}: ${ourProducts[i].name} –– $${ourProducts[i].price} –– avaliable: ${ourProducts[i].stock}`);
}

let product;

do { 
    product = parseInt(prompt('Enter the number of the product which you wanna buy:')) - 1;
} while (
    isNaN(product) || product < 0 || product >= ourProducts.length
)

let selectedProduct = ourProducts[product];
let amountOfProducts;

do { 
    amountOfProducts = parseInt(prompt('Enter the number of product you wanna buy:'));
} while (
    isNaN(amountOfProducts) || amountOfProducts > selectedProduct.stock || amountOfProducts < 1
)

let finalPrice = selectedProduct.price * amountOfProducts;

if (finalPrice > 60000) {
    finalPrice *= 0.90;
} else if (finalPrice > 30000) {
    finalPrice *= 0.95;
}

console.log(`Congrags! Your order is success! You product ${selectedProduct.name} in quantity: ${amountOfProducts}, your final price: $${finalPrice}`);