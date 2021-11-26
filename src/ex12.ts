enum Type {
    MULTIPLY,
    POWER,
    SQUARE_ROOT,
    OTHER
}

const handleCalculation = (a: number, b: number, type: Type): number => {
    switch(type) {
        case Type.MULTIPLY: return a * b;
        case Type.POWER: return Math.pow(a, b);
        case Type.SQUARE_ROOT: return Math.sqrt(a);
        default: throw new Error('Not supported!')
    }
}

console.log(handleCalculation(4, 4, Type.MULTIPLY));
console.log(handleCalculation(4, 4, Type.POWER));
console.log(handleCalculation(4, 4, Type.SQUARE_ROOT));
console.log(handleCalculation(4, 4, Type.OTHER));

enum UserRoles {
    ADMIN = 'Administrator',
    USER = 'Użytkownik'
}

const adminLabel = UserRoles.ADMIN;
const userLabel = UserRoles.USER;