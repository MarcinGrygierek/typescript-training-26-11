// typujemy tablicę - określamy rodzaj elementów który się w niej znajduje
const array: number[] = [1, 2, 3, 4, 5];

// typujemy bezpośrednio obiekt - średnio wygodne
const obj: {
    name: string;
    lastName: string;
    age?: number;
} = {
    name: 'Marcin',
    lastName: 'Grygierek'
}

// TS tego nie skontroluje w żaden sposób, any oznacza dosłownie dowolną wartość
let val: any = 123;
val = 'string';
val = [1, 2, 4, 5];