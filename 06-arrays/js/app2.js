'use strict'

for (let i = 0; i < movies.length; i++) {
    console.log(`${i + 1}: ${movies[i].name}, ${movies[i].price}`);
}

let filmNumber;

do {
    filmNumber = parseInt(prompt('Enter the number of film which you wanna watch:')) - 1;
} while (
    isNaN(filmNumber) || filmNumber < 0 || filmNumber >= movies.length
)

let selectedFilm = movies[filmNumber];
console.log(selectedFilm);

let yourAge; 
let amountOfTickets;
let finalPrice;

do {
    yourAge = parseInt(prompt('Enter your age:'));

    if (yourAge < selectedFilm.age) {
        console.log('You are too young');
    } else {

        do {
            amountOfTickets = parseInt(prompt('Enter the number of tickets you wanna buy:'));
        } while (
            isNaN(amountOfTickets) || amountOfTickets < 1 || amountOfTickets > 8
        )

        finalPrice = selectedFilm.price * amountOfTickets;

        if (amountOfTickets >= 4) {
            finalPrice *= 0.85;
        }

        if (finalPrice > 1000) {
            console.log('You get free popcorn!');
        }

        console.log(`You've just bought ${amountOfTickets} ticket to the movie ${selectedFilm.name}. Your final price ${finalPrice}. Enjoy your viewing!`)
    }

} while (
    isNaN(yourAge) || yourAge < 1 || yourAge > 100
)