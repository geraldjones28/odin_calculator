/* Starter Variables */
const containerDiv = document.querySelector(".container");
const row = document.getElementsByClassName('row');
const square = document.getElementsByClassName('square');
let op;
let num1 = 0;
let num2 = 0;

/* Initialize Grid */
row.textContent = 5;
square.textContent = 4;
makeGrid();

function makeGrid() {
    for (let i = 1; i <= row.textContent; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.setAttribute('class', 'row');
        containerDiv.append(rowDiv);

        for (let j = 1; j <= square.textContent; j++) {
            const squareDiv = document.createElement("div");
            squareDiv.setAttribute('class', 'square');
            squareDiv.style.height = `${600 / row.textContent}px`;
            squareDiv.style.width = `${600 / square.textContent}px`;
            squareDiv.textContent = '0';
            squareDiv.style.fontSize = "24px";
            rowDiv.append(squareDiv);
        }
    }
}

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return b == 0 ? "undefined" : a / b;
}

function operate(op, num1, num2) {
    if (op === '+') {
        return add(num1, num2);
    } else if (op === '-') {
        return subtract(num1, num2);
    } else if (op === '*') {
        return multiply(num1, num2);
    } else if (op === "/") {
        return divide(num1, num2);
    } else {
        return "bad sign";
    }
}