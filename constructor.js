// Use class syntax to define a constructor function


class spaceShuttle {
    constructor (targetPlanet) {
    this.targetPlanet = targetPlanet;
    }
}


const zeus = new spaceShuttle('Jupiter')

console.log(zeus.targetPlanet)


// another example

function makeClass () {
    class Vegetable {
        constructor (name) {
            this.name = name
        }
    }
    return Vegetable;
}

const Vegetable = makeClass() ;
const carrot = new Vegetable('Carrot') ;

console.log(carrot.name);



// How to use constructor in javascript


// this iw the way to write the constructor with function directly 

function person(name, age) {
    this.name = name;
    this.age = age;
};



// this is how you can write a constructor with class


const Person = new person('Saad', 20)

console.log(Person.name)