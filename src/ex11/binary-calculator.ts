import { AbstractCalculator } from "./calculator";

class BinaryCalculator extends AbstractCalculator {
    private dec2bin = (val: number): string => {
        return val.toString(2);
    }

    private bin2dec = (val: string): number => {
        return parseInt(val, 2);
    }

    add = (a: string, b: string): string => {
        const aDec = this.bin2dec(a);
        const bDec = this.bin2dec(b);
        const result = this.dec2bin(aDec + bDec);
        this.operations.push(`Wynik dodawania to: ${result}`);
        return result;
    }
    
    subtract = (a: string, b: string): string => {
        const aDec = this.bin2dec(a);
        const bDec = this.bin2dec(b);
        const result = this.dec2bin(aDec - bDec);
        this.operations.push(`Wynik odejmowania to: ${result}`);
        return result;
    }
    
    multiply = (a: string, b: string): string => {
        const aDec = this.bin2dec(a);
        const bDec = this.bin2dec(b);
        const result = this.dec2bin(aDec * bDec);
        this.operations.push(`Wynik mnożenia to: ${result}`);
        return result;
    }
    
    divide = (a: string, b: string): string => {
        const aDec = this.bin2dec(a);
        const bDec = this.bin2dec(b);
        if(bDec === 0) throw Error('Can not divide by zero!');
        const result = this.dec2bin(aDec / bDec);
        this.operations.push(`Wynik dzielenia to: ${result}`);
        return result;
    }
}

const binaryCalculator = new BinaryCalculator();
binaryCalculator.divide('1000', '10');
binaryCalculator.add('1000', '10');
binaryCalculator.display();