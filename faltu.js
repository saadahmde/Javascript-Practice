function ahsan() {
    let name = 'Ahsan';
    let age = 20;
    return(
    console.log("my name is " + name + " & my age is " + age)
    )
}
console.log(ahsan())




// Rest Operators 

function sayHello(...ahsan) {
    const arr = [ "a", "b", ...ahsan];
    return arr;
};


console.log(sayHello(""));



// Spread operators 

const personName = "Ahsan"
const personAge = 20;
const object1 = {name: `My name is ${personName}`};
const object2 = {age: `My age is ${personAge}`}

const newObject = {...object1, ...object2};


console.log(newObject);



const arr3 = [1,2,3,4]

function arr2(args){
    arr3.push(args);
    return args;
}

arr2([5,6,7,8]);

console.log(arr3);

