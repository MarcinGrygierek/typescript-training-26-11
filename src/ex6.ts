const baz = (a: number, b: number): number | string => {
    if(a > 5) return 'Większe od 5, nie umiem tak dodawać';
    return a + b;
}

const result: number = baz(2, 2) as number;
const result2: string = <string>baz(20, 20);

console.log(result, typeof result);
console.log(result2, typeof result2);

// Unikamy czegoś takiego! W tej sytuacji typ po transpilacji do JS jest niezgodny z zapisem w TS
const val2: number = "Lorem ipsum" as unknown as number;
console.log(val2);