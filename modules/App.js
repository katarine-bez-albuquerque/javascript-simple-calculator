/**
 * App.js
 */

// Imports
import Application from './Application.js';

// Variables
const btn_number = document.querySelector('#numbers');
const btn_sum = document.querySelector('#sum');
const btn_sub = document.querySelector('#subtract');
const btn_mult = document.querySelector('#multiply');
const btn_div = document.querySelector('#divide');
const btn_perc = document.querySelector('#percentage');
const btn_sqrt = document.querySelector('#sqrt');

let application = new Application();

// Button Enter Numbers
btn_number.addEventListener('click',() => application.enterNumbers());

// Button Sum
btn_sum.addEventListener('click',() => application.calculateSum());

// Button Subtract
btn_sub.addEventListener('click',() => application.calculateSubtract());

// Button Multiply
btn_mult.addEventListener('click',() => application.calculateMultiply());

// Button Divide
btn_div.addEventListener('click',() => application.calculateDivide());

// Button Percentage
btn_perc.addEventListener('click',() => application.calculatePercentage());

// Button Sqrt
btn_sqrt.addEventListener('click',() => application.calculateSqrt());
