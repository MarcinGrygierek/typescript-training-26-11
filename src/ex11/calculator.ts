type CalculatorValue = number | string;

export enum Operation {
    ADD,
    SUBTRACT,
    MULTIPLY,
    DIVIDE
}

export abstract class AbstractCalculator {
    protected operations: string[];

    constructor() {
        this.operations = [];
    }

    calculate = (a :CalculatorValue, b: CalculatorValue, type: Operation): CalculatorValue => {
        switch(type) {
            case Operation.ADD: return this.add(a, b);
            case Operation.SUBTRACT: return this.subtract(a, b);
            case Operation.MULTIPLY: return this.multiply(a, b);
            case Operation.DIVIDE: return this.divide(a, b);
        }
    }

    abstract add(a :CalculatorValue, b: CalculatorValue): CalculatorValue;
    
    abstract subtract(a: CalculatorValue, b: CalculatorValue): CalculatorValue;
    
    abstract multiply(a: CalculatorValue, b: CalculatorValue): CalculatorValue;
    
    abstract divide(a: CalculatorValue, b: CalculatorValue): CalculatorValue;

    display = () => {
        this.operations.forEach(singleElement => {
            console.log(singleElement);
        })
    }
}