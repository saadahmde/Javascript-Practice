// destructuring with nested object



const GET_LOCAL =  {
    today: {min: 78.98 , max: 89.0 },
    tomorrow: { min: 89.76 , max: 98.75}
};


function getLocalForecast(forecast) {
    const { tomorrow : {max : maxOfTomorrow}} = forecast;
    return maxOfTomorrow
};


console.log(getLocalForecast(GET_LOCAL))


// how to assign variable from array with destructuring

let [a,b,, c] = [1,2,3,4,5,6,7,8,9]
console.log(a);
console.log(b);
console.log(c);


let x = 10, y = 89;

(() => {
    "use strict";
    [x,y] = [y,x];
})();

console.log(y);
console.log(x);



// rest operator



function got_it(...rest) {
    return rest.reduce((a,b) => a + b);
};


console.log(got_it(1,2,3,4,5,6));


// Reassign array value with rest operators through destructuring

const source = [1,2,4,5,6,7,8,9];

function  removeFirstTwo(list) {
    const [ , , ...arr] = list;

    return arr;
}

const arr = removeFirstTwo(source);

console.log(arr);
console.log(source);


// destructuring function argument with object


const stats = {
    fatherName: "Sar",
    motherName: "Aliy",
    bigBrother: "Imtiaz",
}

const half =(function() {
    return function half(saad){
        return (saad.fatherName);
    }
})();


// destructuring method
const second =(function() {
    return function second({motherName}){
        return (motherName);
    }
})();


console.log(second(stats));
console.log(half(stats));
