// getter and setter in javascript


class Company {
    constructor (author) {
        this._author = author 
    }

    get writer() {
        return this._author
    }


    set writer(updateAuthor) {
        this._author = updateAuthor
    }
}


const newAuthor = new Company();
Company.writer = "Saad Ahmed";


console.log(newAuthor)


// Another Example 

let obj = {
    _age: 30,

    get age() {
        return this._age
    },


    set age(actualAge) {
        this._age = actualAge
    }
}


obj._age = 40;

console.log(obj._age);   




