/// random decimal number in javascript


function printRandomDecimalNumber() {
    return Math.random();
}


console.log(printRandomDecimalNumber());


// print the whole number in javascript with maths function 

const wholeNumber = Math.floor(Math.random() * 20);


console.log(wholeNumber)


// print whole number with the help of function

function checkingWholeNumber(){
    return Math.floor(Math.random() * 20);
}

console.log(checkingWholeNumber());


// 
function check() {
    return Math.random()
} 

console.log(check())

/// generating whole number in a range 


function rangeNumber(ourMin, ourMax){
    return Math.floor(Math.random() * (ourMax -  ourMin + 1) + ourMin);
}

console.log(rangeNumber(1,9));


// Using parseInt function to convert string into a number or integer


function convertIntoAString(number) {
    return parseInt(number);
};


console.log("97");


// parseInt with radix 

function binaryNumber(num){
    return parseInt(num, 2);
}

console.log(binaryNumber("01101"));


/// Multiple ternary operator conditions

function ternaryOperators(num) {
    return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
}

console.log(ternaryOperators(0));