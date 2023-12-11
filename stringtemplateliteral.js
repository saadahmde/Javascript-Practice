// String template literal in javascript 


const bioData = {
    name: "John Doe",
    age: 56,
};


function useTemplate(){
    const str = `My Name is ${bioData.name} and I am ${bioData.age}`;
    return str;
}

console.log(useTemplate());


const useArray ={
    arr: [10,20,30],
    use: ["Saad"],
}


function useFunctionality(arr){
    const resultOfArray = [];

    for (let i = 0; i < arr.length; i++){
        resultOfArray.push(`<li class="text-warning">${arr[i]}</li>`)
    }
    return resultOfArray;
}


const resultOfArray = useFunctionality(useArray.arr);

console.log(resultOfArray);




///

const result = {
    passed  : ["passed", "not failed", "good to go"],
    failed: ["failed", "Not passed", "keep working on your progress"]
};


function  makeList(arr) {
    const resultOfList = [];

    for(let i = 0; i < arr.length; i++){
        resultOfList.push(`<li class="text-warning">${arr[i]}</li>`)
    }

    return resultOfList
}


const resultOfList = makeList(result.passed);


console.log(resultOfList)


// Write concise object literal using simple fields

// Old way to write 

function zodiac(name, age, gender ){
    return {
        name: name,
        age: age,
        gender: gender
    }
}

console.log(zodiac("Saad",78,"Male"));


// New version to write upper code
const anonymous = (name,age,gender) => ({name,age,gender});
console.log(anonymous("Ahmed",78,"Male"));


// write concise declarative function 

const bicycle = {
    gear: 2,
    setgear(newgear) {
        "use strict";
        this.gear = newgear;
    }
}

bicycle.setgear(3);
console.log(bicycle.gear)



const hammer = {
    name: "Saad ahmed",
    newfunction(newgear){
        this.name = newgear;
    }
}


const newOne = hammer.newfunction(78);
console.log(hammer.name);



