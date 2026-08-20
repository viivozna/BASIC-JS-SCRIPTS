'use strict'

for (let i = 0; i < users.length; i++) {
    if (users[i].balance > 2000) {
        console.log(users[i].phone);
    }
}

let sum = 0; 

for (let j = 0; j < users.length; j++) {
    sum += users[j].balance;
}

console.log(sum);