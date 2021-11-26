// Bezpośrednie, jawne określenie typu
const first: number = 10;

// Typ jest określony na podstawie przypisanej wartości
let second = 20;

// Nie możemy napisać wartości bo jest niezgodna z typem
second = 10;

// Typujemy parametry oraz jej typ zwracany funkcji
const foo = (a: number, b: number): number => {
    if(a < 0) throw new Error('Values should be positive!');
    return a + b;
}

// Wykorzystanie
try {
    const result1 = foo(5, 15);
    console.log(result1);
    const result2 = foo(-5, 15);
    console.log(result2);
} catch(e) {
    console.log('Wystąpił błąd ale działamy dalej');
}