abstract class Vehicle {
    protected type: string;
    constructor(type: string) {
        this.type = type;
    }

    move() {
        console.log('Nie wiem jak się poruszać');
    }
}

class Car extends Vehicle {
    hp: number;
    constructor(hp: number) {
        super('Car');
        this.hp = hp;
    }

    move() {
        console.log(`I am a car (${this.type}) with ${this.hp} HP and I am driving`);
    }
}

// Nie możemy stworzyć obiektu klasy abstrakcyjnej - klasy abstrakcyjne służą tylko do dziedziczenia!
// const vehicle = new Vehicle('Amfibia');
// vehicle.move();

const car = new Car(1000);
car.move();