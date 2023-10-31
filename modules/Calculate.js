/**
 * Calculate.js
 */

export default class Calculate {

    sum(numbers) {
        return numbers.reduce( (accumulator, number) => accumulator + number ); 
    }

    subtract(numbers) {
        return numbers.reduce( (accumulator, number) => accumulator - number );
    }

    multiply(numbers) {
        return numbers.reduce( (accumulator, number) => accumulator * number );       
    }

    divide(numbers) {
        return numbers.reduce( (accumulator, number) => number !== 0 ? accumulator / number : accumulator / 1 );
    }

    percentage(numbers) {
        if(numbers.length > 2) {            
            alert("Enter 2 numbers!");
            return 0;
        }
        else {
            return numbers.reduce( (accumulator, number) => (accumulator / 100) * number); 
        }
    }

    sqrt(numbers) {
        let sqrt = 0;
        if(numbers.length > 1) {            
            alert("Enter 1 number!");
            return 0;
        }
        else {
            numbers.forEach( number => { 
                sqrt = Math.sqrt(Number(number)); 
            }); 
            return sqrt;
        }        
    }

    print(element, operation, number) {
        if (number % 1 !== 0) { // Not exact division
            element.value = operation + " Total: " + Number(number).toFixed(2);
        }
        else { // Exact division
            element.value = operation + " Total: " + Number(number);
        }
    }

    printNumbers(element, numbers) {
        if(numbers.length <= 0) {
            element.value = "[ " + 0 + " ]";
        } 
        else {
            element.value = "[ " + numbers + " ]";
        }       
    }
}
