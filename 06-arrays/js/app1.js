'use strict' 

// 1. Book shop

// show all books 
for (let i = 0; i < books.length; i++) {
    console.log(`${i + 1}: ${books[i].name} –– $${books[i].price} –– ${books[i].category}`)
}

// get from user number of book he wanna buy
// check if number is correct

let bookNumber;

do {
    bookNumber = parseInt(prompt('Enter the number of the book you wanna buy:')) - 1;
} while (
    isNaN(bookNumber) || bookNumber < 0 || bookNumber >= books.length
)
let selectedBook = books[bookNumber]; 

console.log(selectedBook);

// ask amount of books
let bookAmount; 

do {
    bookAmount = parseInt(prompt('Enter the amount of books you wanna buy:'));
} while (
    isNaN(bookAmount) || bookAmount < 1 || bookAmount > 5
)

console.log(bookAmount);

// calculate final price
let finalPrice = selectedBook.price * bookAmount;

// check if discount needed
if (bookAmount >= 3) {
    finalPrice *= 0.9;
}

// check if delivery is free
if (finalPrice > 1500) {
    console.log('You get free delivery!');
}
// show the final order information
console.log(`Congrats! You've just bought ${selectedBook.name} * ${bookAmount}. Your final price: ${finalPrice}.`);


