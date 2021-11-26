const user: {
    name: string;
    age: number;
    addresses: {
        city: string;
        street: string;
    }[]
} = {
    name: 'Marcin',
    age: 28,
    addresses: [
        {
            city: 'Gliwice',
            street: 'Dworcowa'
        }
    ]
}

interface AlmostGoodUser {
    name: string;
    age: number;
    addresses: {
        city: string;
        street: string;
    }[]
}

///////////
interface UserAddress {
    city: string;
    street: string;
}

interface User {
    name: string;
    age: number;
    addresses: UserAddress[];
    height?: number; // opcjonalne pole - nie musi być ustawione w docelowym obiekcie
}

const user2: User = {
    name: 'Marcin',
    age: 28,
    height: 180,
    addresses: [
        {
            street: 'Dworcowa',
            city: 'Gliwice'
        }
    ]
}

const user3: User = {
    name: 'Tomasz',
    age: 48,
    addresses: [
        {
            street: 'Lorem',
            city: 'Ipsum'
        }
    ]
}