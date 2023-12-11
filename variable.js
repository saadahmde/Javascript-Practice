// difference between let and var variable



// let variable

function andPerson() {

    "use strict";
    let name = "john";
    if (true) {
        let name = "Shawn"
        console.log("My name inside the block is: ", name);
    }
    console.log("My name outside the block is: ", name);    
    return name;
}


console.log(andPerson());


// var variable


function andPerson() {

    "use strict";
    var name = "john";
    if (true) {
        name = "Shawn"
        console.log("My name inside the block is: ", name);
    }
    console.log("My name outside the block is: ", name);    
    return name;
}


console.log(andPerson());


// const variable

/*
Constant are the variable similar with let variable but the main difference between the is the constant variable are in Read-Only Mode
*/

function likeIt(alpha){
    
    const SENTENCE = "My name is " + alpha;

    console.log(SENTENCE)

}


console.log(likeIt("Saad"));



// mutating an array with const variable

const s = [2,4,6,8]

function  helloWorld() {
    // throw bracket notation

    s[0] = 3;
    s[1] = 45;
};

helloWorld();

console.log(s);



// Prevent Object mutation


function objectMutation() { 
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    
    Object.freeze(MATH_CONSTANTS);

    try {
        MATH_CONSTANTS.PI = 100
    } catch (error) {
        console.log(error)
    };

    console.log(MATH_CONSTANTS.PI);

};

console.log(objectMutation());



