// Anonymous function with Arrow


const MAGIC = () => new Date();

console.log(MAGIC());

// write arrow functions with parameters


var concatenateFunction = (arr , arr2) => arr.concat(arr2);

console.log(concatenateFunction([1,2], [3,4,5]));


// write higher order arrow function




// write higher order in arrow function


const realNumberInteger = [4, 3.134, 42, 6, -2, 8.9];

const integerNumber = (arr) => {
    const numberInteger = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return numberInteger; 
}


numberInteger = integerNumber(realNumberInteger);

console.log(numberInteger);


// write higher arrow function 

// IIFE Immediately invoked function expression

const incrementFunction = (function() {
    return function increment(number, value = 1){
        return number + value;
    };
})();

console.log(incrementFunction(5, 2));
console.log(incrementFunction(5));



// IIFE functions in deep 


(function chai(){
    // Named IIFE 
    console.log(`DB Connected`);
})();


((name) => {
    // Simple IIFE function
    console.log(`DB Connected To ${name}`)
})(`MongoDB`)

