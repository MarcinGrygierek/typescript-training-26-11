import { AbstractCalculator, Operation } from "./calculator";

class DecimalCalculator extends AbstractCalculator {
    add = (a: number, b: number): number => {
        // operations.push("Wynik dodawania to: " + (a + b));
        const result = a + b;
        this.operations.push(`Wynik dodawania to: ${result}`);
        return result;
    }
    
    subtract = (a: number, b: number): number => {
        const result = a - b;
        this.operations.push(`Wynik odejmowania to: ${result}`);
        return result;
    }
    
    multiply = (a: number, b: number): number => {
        const result = a * b;
        this.operations.push(`Wynik mnożenia to: ${result}`);
        return result;
    }
    
    divide = (a: number, b: number): number => {
        if(b === 0) throw Error('Can not divide by zero!');
        const result = a / b;
        this.operations.push(`Wynik dzielenia to: ${result}`);
        return result;
    }
}

const calculator = new DecimalCalculator();
calculator.calculate(10, 20, Operation.ADD);
calculator.calculate(10, 20, Operation.MULTIPLY);
calculator.calculate(10, 20, Operation.SUBTRACT);
calculator.calculate(10, 20, Operation.DIVIDE);
calculator.display();