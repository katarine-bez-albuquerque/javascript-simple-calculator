/**
 * Application.js
 */

// Imports
import Calculate from './Calculate.js';

// Variables
let print = document.querySelector('#total');
let values = document.querySelector('#values');

export default class Application {

    #calculate;
    #numbers;

    constructor() {
        this.#calculate = new Calculate();
        this.#numbers = [];
    }

    get calculate() {
        return this.#calculate;
    }

    get numbers() {
        return this.#numbers;
    }

    enterNumbers() {

        let n = document.querySelector('#qtd').value; // Input value
        
        if(n === "") {
            alert("Enter Quantity Numbers!");
        }

        if(n <= 10) { // Maximum of 10 numbers
            for(let i = 0; i < n; i++) { // Quantity received by "n"
                let number = Number( prompt("Enter Number:") ); // Receive numbers
                if(number === 0) {
                    this.#numbers.length = 0; // array = []
                    document.querySelector('#qtd').value = "Enter Quantity Numbers";
                }
                else {
                    this.#numbers.push(number); // add numbers
                }            
            } 
        }
        else {
            alert("maximum of 10 numbers");
            this.#numbers.length = 0; // array = []
            this.calculate.printNumbers(values, this.#numbers);  // print screen
            document.querySelector('#qtd').value = "Enter Quantity Numbers";
        }       
    
        if(n > 0) {    
            this.calculate.printNumbers(values, this.#numbers);  // print screen                      
        }
        else {
            this.calculate.print(print, "", 0); // print empty           
        } 
    }

    #clickQtd() { // Quantity = 0 and Total = 0 and Values = 0 (Numbers)
        document.querySelector('#qtd').addEventListener('click', () => {
            print.value = "Total: 0";
            values.value = "[ 0 ]";            
        });
    }
    
    calculateSum() {
        if(this.numbers.length > 0) {
            let sum = this.calculate.sum(this.numbers); // calculate
            this.calculate.print(print, "Sum", sum); // print
            this.numbers.length = 0; // array = []
            document.querySelector('#qtd').value = "Enter Quantity Numbers";
            this.#clickQtd();
        }
        else {
            alert("Enter Numbers!");
        }
    }
    
    calculateSubtract() {
        if(this.numbers.length > 0) {
            let sub = this.calculate.subtract(this.numbers); // calculate
            this.calculate.print(print, "Subtraction", sub); // print
            this.numbers.length = 0; // array = []
            document.querySelector('#qtd').value = "Enter Quantity Numbers";
            this.#clickQtd();
        }
        else {
            alert("Enter Numbers!");
        }
    }
    
    calculateMultiply() {
        if(this.numbers.length > 0) {
            let mult = this.calculate.multiply(this.numbers); // calculate
            this.calculate.print(print, "Multiplication", mult); // print
            this.numbers.length = 0; // array = []
            document.querySelector('#qtd').value = "Enter Quantity Numbers";
            this.#clickQtd();
        }
        else {
            alert("Enter Numbers!");
        }
    }
    
    calculateDivide() {
        if(this.numbers.length > 0) {
            let div = this.calculate.divide(this.numbers); // calculate
            this.calculate.print(print, "Division", div); // print
            this.numbers.length = 0; // array = []
            document.querySelector('#qtd').value = "Enter Quantity Numbers";
            this.#clickQtd();
        }
        else {
            alert("Enter Numbers!");
        }
    }
    
    calculatePercentage() {
        if(this.numbers.length > 0) {
            let perc = this.calculate.percentage(this.numbers); // calculate
            this.calculate.print(print, "Percentage", perc); // print
            this.numbers.length = 0; // array = []
            document.querySelector('#qtd').value = "Enter Quantity Numbers";
            this.#clickQtd();
        }
        else {
            alert("Enter 2 Numbers!");
        }
    }
    
    calculateSqrt() {
        if(this.numbers.length > 0) {
            let sqrt = this.calculate.sqrt(this.numbers); // calculate
            this.calculate.print(print, "Sqrt", sqrt); // print
            this.numbers.length = 0; // array = []
            document.querySelector('#qtd').value = "Enter Quantity Numbers";
            this.#clickQtd();
        }
        else {
            alert("Enter 1 Number!");
        }
    }
}
