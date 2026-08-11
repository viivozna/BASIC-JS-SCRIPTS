'use strict'

function enterNum() {
    const firstNum = parseFloat(prompt("Enter first number: "));
    const secondNum = parseFloat(prompt("Enter second number: "));
    return [firstNum, secondNum]
}

function add() {
    const [firstNum, secondNum] = enterNum()
    const results = firstNum + secondNum
    alert(`"Results: " ${results}`)
}

function sub() {
    const [firstNum, secondNum] = enterNum()
    const results = firstNum - secondNum
    alert(`"Results: " ${results}`)
}

function mul() {   
    const [firstNum, secondNum] = enterNum()
    const results = firstNum * secondNum
    alert(`"Results: " ${results}`)
}

function div() {    
    const [firstNum, secondNum] = enterNum()
    const results = firstNum / secondNum
    alert(`"Results: " ${results}`)
}