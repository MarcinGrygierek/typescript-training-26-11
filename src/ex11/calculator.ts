type CalculatorValue = number | string;

export abstract class AbstractCalculator {
    protected operations: string[];

    constructor() {
        this.operations = [];
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