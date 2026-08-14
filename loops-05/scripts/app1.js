'use strict'

// 1
// for (let a = 10; a <= 20; a++) {
//     document.write(a + ' ');
// }


// 2
// for (let b = 10; b <= 20; b++) {
//     if (b < 20) {
//         document.write(b ** 2 + ', ');
//     } else document.write(b ** 2);
// }


// 3
// for (let a = 0; a <= 10; a++) {
//     document.write(`${a} * 7 = ${a * 7}<br>`)
// }


// 4
// let sum = 0;

// for (let a = 1; a <= 15; a++) {
//     sum += a;
// }

// document.write(sum);


// 5
// let sum = 0;

// for (let a = 15; a <= 35; a++) {
//     sum *= a;
// }

// document.write(sum);


// 6
// let sum = 0;

// for (let a = 1; a <= 500; a++) {
//     sum += a
// }

// document.write(sum / 500);

// 7 
// let sum = 0;

// for (let a = 30; a <= 80; a++) {
//     if (a % 2 === 0) {
//         sum += a;
//     } 
// }

// document.write(sum);

// 8 
// for (let a = 100; a <= 200; a++) {
//     if (a % 3 === 0) {
//         document.write(a + ' ');
//     }
// }

// 9
// let sum = 0;
// let evenDivisors = [];
// let number = +prompt('Enter random number:');

// if (number > 0) {
//     alert('Let\'s continue!');
//     for (let a = 1; a <= number; a++) {
//     if (number % a === 0 && a % 2 === 0) {
//         evenDivisors.push(a)
//         sum += a;
//     }
// }
// } else {
//     alert('Try again, number must be greater than 0')
// }

// document.write(`All even divisors: ${evenDivisors.join(', ')} <br>`)
// document.write(`Number of even divisors: ${evenDivisors.length} <br>`);
// document.write(`Summary of even divisors: ${sum}`)


// 10 
// for (let a = 1; a <= 10; a++) {
//     for (let b = 1; b <= 10; b++) {
//         document.write(`${a} * ${b} = ${a * b}<br>`)
//     }
// }





// homework 
// 1
// for (let a = 20; a <= 30; a += 0.5) {
//     document.write(a + ' ')
// }

// 2
// let oneDollar = 42;

// for (let b = 10; b <= 100; b += 10) {
//     document.write(`<br> cost ${b} dollars: ${b * oneDollar} <br>`)
// }

// 3

// first
// let randomInteger = +prompt("Enter your number:");

// if (Number.isInteger(randomInteger) === true) {
//     for (let i = 0; i <= 100; i++) {
//         if (i ** 2 < randomInteger) {
//             document.write(i + ' ');
//         }
//     }
// } else {
//     document.write('Try again, your number is not an integer')
// }


// second
// let randomInteger;

// while (true) {
//     randomInteger = +prompt("Enter your number:")
//     if (Number.isInteger(randomInteger) === true) {
//         break;
//     }
// }
//     for (let i = 0; i <= 100; i++) {
//         if (i ** 2 < randomInteger) {
//             document.write(i + ' ');
//         }
//     }

// 4
// let randomNum = +prompt("Enter your number:")
// function isNumberPrime(randomNum) {
//     if (randomNum <= 1) {
//         return('Number must be greater than 1');
//     } 
    
//     for (let j = 2; j <= Math.sqrt(randomNum); j++) {
//         if (randomNum % j === 0) {
//             return('Number is not prime')
//         } 
//     }

//     return 'number is prime'
// }

// document.write(isNumberPrime(randomNum));

// 5 
let randomNum = +prompt("Enter your number:")

function isPowerOfThree(randomNum) {
    for (let k = 1; k <= randomNum; k *= 3) {
        if (randomNum === k) {
            return ('YES!!!');
        }
    }
    return 'NO!';
}

document.write(isPowerOfThree(randomNum));


