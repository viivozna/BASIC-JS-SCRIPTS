'use strict' 

let yourArrayLength = +prompt('Enter array lenght:');
let array = [];

for (let i = 0; i < yourArrayLength; i++) {
    let element = +prompt(`Enter element ${i + 1}:`);
    array.push(element);
}

function compareElements(a, b) {
    if (a > b) {
        return 1;
    } else if (a == b) {
        return 0;
    } else {
        return -1;
    }
}

document.write(`Initial array: ${array.join(', ')}<br>`);

array.sort(compareElements);
document.write(`Sorted array: ${array.join(', ')}<br>`);

array.splice(1, 3); // починаючи з індексу 1, видалити 3 елементи
document.write(`Array after deleting elements from 2 to 4: ${array.join(', ')}`);


// console.log(array);
// console.log(`Sorted array: ${array.sort(compareElements)}`);
// console.log(`Deleted elements from 2 to 4: ${array.splice(1, 3)}`) 