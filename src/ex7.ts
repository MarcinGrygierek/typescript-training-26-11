// Wer. 1 - właściwość publiczna, przez co można ją z zewnątrz nadpisać
// class Duck {
//     name: string;

//     constructor(name: string) {
//         this.name = name;
//     }

//     quack() {
//         console.log(`Duck ${this.name} is quacking`);
//     }
// }

// const duck1 = new Duck('Donald');
// duck1.quack();
// duck1.name = 'Myszka Miki';
// duck1.quack();

// // Wer. 2 - dostęp prywatny do właściwości, dostęp tylko z poziomu metody klasy, dodatkowe sprawdzenie przed ustawieniem
// class DuckV2 {
//     private name: string;

//     constructor(name: string) {
//         this.name = name;
//     }

//     quack() {
//         console.log(`Duck ${this.name} is quacking`);
//     }

//     setName(newName: string) {
//         if(newName === 'Goofy') {
//             console.log('To imię nie jest dopuszczalne!');
//             return;
//         }
//         this.name = newName;
//     }
// }

// const duck2 = new DuckV2('Donald');
// duck2.quack();
// duck2.setName('Myszka Miki');
// duck2.quack();
// duck2.setName('Goofy');
// duck2.quack();


// Wer. 3 - dostęp prywatny do właściwości, dostęp tylko z poziomu metody klasy, dodatkowe sprawdzenie przed ustawieniem. Do ustawienia i odczytu wykorzystujemy setter oraz getter
// class DuckV3 {
//     private _name: string;

//     constructor(name: string) {
//         this._name = name;
//     }

//     quack() {
//         console.log(`Duck ${this._name} is quacking`);
//     }

//     set name(newName: string) {
//         if(newName === 'Goofy') {
//             console.log('To imię nie jest dopuszczalne!');
//             return;
//         }
//         this._name = newName;
//     }

//     get name() {
//         return this._name;
//     }
// }

// const duck3 = new DuckV3('Donald');
// duck3.quack();
// duck3.name = 'Myszka Miki';
// duck3.quack();
// duck3.name = 'Goofy';
// duck3.quack();
// console.log(duck3.name);

// Wer. 3 - dostęp prywatny do właściwości, dostęp tylko z poziomu metody klasy, dodatkowe sprawdzenie przed ustawieniem. Do ustawienia i odczytu wykorzystujemy setter oraz getter, dla wartości tylko do odczytu - readonly
class DuckV4 {
    private _name: string;
    private _nameChanges: number;
    readonly type: string;

    constructor(name: string, type: string) {
        this._name = name;
        this._nameChanges = 0;
        this.type = type;
    }

    quack() {
        console.log(`Duck ${this._name} is quacking. Its name was changed ${this._nameChanges} times.`);
    }

    set name(newName: string) {
        if(newName === 'Goofy') {
            console.log('To imię nie jest dopuszczalne!');
            return;
        }
        this._nameChanges++;
        this._name = newName;
    }

    get name() {
        return this._name;
    }

    get nameChanges() {
        return this._nameChanges;
    }
}

const duck4 = new DuckV4('Donald', 'latająca');
duck4.quack();
duck4.name = 'Myszka Miki';
duck4.quack();
duck4.name = 'Goofy';
duck4.quack();
console.log(duck4.name);
duck4.name = 'Tomek';
duck4.quack();
duck4.quack();
console.log(duck4.type);

// Zabronione ponieważ type to wartość tylko do odczytu
// duck4.type = 'Nielatająca';