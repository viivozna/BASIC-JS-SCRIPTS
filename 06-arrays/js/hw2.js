'use strict' 

let array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

// a, i
let positiveNum = [];
let sum = 0;
let product = 1;

for (let a = 0; a < array.length; a++) {
    if (array[a] > 0) {
        positiveNum.push(array[a]);
        sum += array[a];
        product *= array[a];

    }
}
console.log(`Positive number from array: ${positiveNum}`);
console.log(`Sum of positive numbers: ${sum}`)

// we can do next
// let positiveNum = array.filter(number => number > 0);

// b
let min = array[0];
let minIndex = 0;

for (let b = 1; b < array.length; b++) {
    if (array[b] < min) {
        min = array[b];
        minIndex = b;
    }
}

console.log(`Minimum element: ${min}`);
console.log(`Index: ${minIndex}`);

// c
let max = array[0]; 
let maxIndex = 0;

for (let c = 1; c < array.length; c++) {
    if (array[c] > max) {
        max = array[c];
        maxIndex = c;
    }
}

console.log(`Maximum element: ${max}`);
console.log(`Index: ${maxIndex}`);

// d
let count = 0;
let negativeNum = [];

for (let d = 0; d < array.length; d++) {
    if (array[d] < 0) {
        count++;
        negativeNum.push(array[d]);
    }
}

console.log(`Number of negative array elements: ${count}`);
console.log(`Negative elements: ${negativeNum}`);

// e, h
let positiveOddCount = 0;
let positiveOddSum = 0;

for (let e = 0; e < array.length; e++) {
    if (array[e] % 2 !== 0 && array[e] > 0) {
        positiveOddCount++;
        positiveOddSum += array[e];
    }
}

console.log(`Number of odd positive elements: ${positiveOddCount}`)
console.log(`Sum of odd positive elements: ${positiveOddSum}`);


// f, g
let positiveEvenCount = 0;
let positiveEvenSum = 0;

for (let f = 0; f < array.length; f++) {
    if (array[f] % 2 === 0 && array[f] > 0) {
        positiveEvenCount++;
        positiveEvenSum += array[f];
    }
}

console.log(`Number of even positive elements: ${positiveEvenCount}`)
console.log(`Sum of even positive elements: ${positiveEvenSum}`);

// j
for (let j = 0; j < array.length; j++) {
    if (array[j] !== max) {
        array[j] = 0;
    }
}

console.log(array);