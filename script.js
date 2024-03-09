/* Starter Variables */
/* Origin */
const containerDiv = document.querySelector(".container");
const row = document.getElementsByClassName('row');
const square = document.getElementsByClassName('square');
let op;
let num1 = 0;
let num2 = 0;
/* Specific */

/* Initialize Grid */
row.textContent = 5;
square.textContent = 4;
makeGrid();

/* Creating the base grid for calculator display */
function makeGrid() {
    /* CREATE GRID */
    for (let i = 1; i <= row.textContent; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.setAttribute('class', 'row' + i);
        containerDiv.append(rowDiv);

        for (let j = 1; j <= square.textContent; j++) {
            const squareDiv = document.createElement("div");
            squareDiv.setAttribute('class', 'square' + j);
            squareDiv.style.height = `${600 / row.textContent}px`;
            squareDiv.style.width = `${600 / square.textContent}px`;
            squareDiv.textContent = '0';
            squareDiv.style.fontSize = "24px";
            rowDiv.append(squareDiv);
        }
    }

    /* Set individual square values */
    /* ROW1 */
        const row1s1 = document.querySelector('.row1 > .square1');
        row1s1.textContent = "(";
        const row1s2 = document.querySelector('.row1 > .square2');
        row1s2.textContent = ")";
        const row1s3 = document.querySelector('.row1 > .square3');
        row1s3.textContent = "%";
        const row1s4 = document.querySelector('.row1 > .square4');
        row1s4.textContent = "CL";
    /* ROW2 */
        const row2s1 = document.querySelector('.row2 > .square1');
        row2s1.textContent = "7";
        const row2s2 = document.querySelector('.row2 > .square2');
        row2s2.textContent = "8";
        const row2s3 = document.querySelector('.row2 > .square3');
        row2s3.textContent = "9";
        const row2s4 = document.querySelector('.row2 > .square4');
        row2s4.textContent = "/";
    /* ROW3 */
        const row3s1 = document.querySelector('.row3 > .square1');
        row3s1.textContent = "4";
        const row3s2 = document.querySelector('.row3 > .square2');
        row3s2.textContent = "5";
        const row3s3 = document.querySelector('.row3 > .square3');
        row3s3.textContent = "6";
        const row3s4 = document.querySelector('.row3 > .square4');
        row3s4.textContent = "x";
    /* ROW4 */
        const row4s1 = document.querySelector('.row4 > .square1');
        row4s1.textContent = "1";
        const row4s2 = document.querySelector('.row4 > .square2');
        row4s2.textContent = "2";
        const row4s3 = document.querySelector('.row4 > .square3');
        row4s3.textContent = "3";
        const row4s4 = document.querySelector('.row4 > .square4');
        row4s4.textContent = "-";
    /* ROW5 */
        const row5s1 = document.querySelector('.row5 > .square1');
        row5s1.textContent = "0";
        const row5s2 = document.querySelector('.row5 > .square2');
        row5s2.textContent = ".";
        const row5s3 = document.querySelector('.row5 > .square3');
        row5s3.textContent = "=";
        const row5s4 = document.querySelector('.row5 > .square4');
        row5s4.textContent = "+";
    
}
/* All operations */
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

/* Function for performing the correct operations on numbers */
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