class Person{
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
}

class Apartment {
    constructor() {
        this.ListOfNeigbours = [];
    }
    addNeighbour(person) {
        this.ListOfNeigbours.push(person);

    }
}

class Building {
    constructor (maxApartmentNo = 2) {
        this.ListOfApartments = [];
        this.maxApartmentNo = maxApartmentNo;
    }
    addApartments(apartments) {
        if (this.ListOfApartments.length < this.maxApartmentNo) {
            this.ListOfApartments.push(apartments);
        } else {
            console.log('The building has reached max capacity')
        }
    }

}

const john = new Person('John', 'Male');
const milana = new Person ('Milana', 'Female');

const victoria = new Person ('Victoria', 'Female');

const apartment1 = new Apartment();

const apartment2 = new Apartment();

apartment1.addNeighbour(john);
apartment1.addNeighbour(milana);

apartment2.addNeighbour(victoria);

console.log(apartment1);

console.log(apartment2);

const building = new Building();

building.addApartments(apartment1);
building.addApartments(apartment2);
building.addApartments(apartment2);

console.log(building);