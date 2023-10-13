// direct boolean value without if else condition

function oneTwoThree(num , sum){

    return (num > sum);
}

console.log(oneTwoThree(20 , 30));

function oneTwoThree(num , sum){

    return (num > sum);
}

console.log(oneTwoThree(20 , 15));



// trying to convert a number to a string except 0 zero


const num6 = 11;
const changeBoolean = Boolean(num6);

console.log(changeBoolean);


// checking implicit conversion 


console.log(2 + true);


// returning outside to function any time with help of return statement


function outsideOfFunction(a,b) {
    if (a > 0 || b < 0) {
        return "undefined"
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b)));
}


console.log(outsideOfFunction(2,2));