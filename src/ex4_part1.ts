const operations: string[] = [];

const add = (a: number, b: number): number => {
    // operations.push("Wynik dodawania to: " + (a + b));
    const result = a + b;
    operations.push(`Wynik dodawania to: ${result}`);
    return result;
}

const subtract = (a: number, b: number): number => {
    const result = a - b;
    operations.push(`Wynik odejmowania to: ${result}`);
    return result;
}

const multiply = (a: number, b: number): number => {
    const result = a * b;
    operations.push(`Wynik mnożenia to: ${result}`);
    return result;
}

const divide = (a: number, b: number): number => {
    if(b === 0) throw Error('Can not divide by zero!');
    const result = a / b;
    operations.push(`Wynik dzielenia to: ${result}`);
    return result;
}

const display = (data: string[]) => {
    data.forEach(singleElement => {
        console.log(singleElement);
    })
}

const addResult = add(5, 10);
console.log(addResult);

const subtractResult = subtract(5, 10);
console.log(subtractResult);

const multiplyResult = multiply(5, 10);
console.log(multiplyResult);

const divideResult = divide(5, 10);
console.log(divideResult);

display(operations);