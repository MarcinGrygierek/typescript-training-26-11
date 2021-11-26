class Calculator {
    private operations: string[];

    constructor() {
        this.operations = [];
    }

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

    display = () => {
        this.operations.forEach(singleElement => {
            console.log(singleElement);
        })
    }
}

const calculator = new Calculator();

const addResult2 = calculator.add(5, 10);
console.log(addResult2);

const subtractResult2 = calculator.subtract(5, 10);
console.log(subtractResult2);

const multiplyResult2 = calculator.multiply(5, 10);
console.log(multiplyResult2);

const divideResult2 = calculator.divide(5, 10);
console.log(divideResult2);

calculator.display();