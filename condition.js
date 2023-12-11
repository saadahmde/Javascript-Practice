// Conditions 

function calledTrue(arr) {
    if(arr){
    return "Yes, it was true";
    }
    return(
        "False"
    )
}

console.log(calledTrue(true));



// conditional statements

function buttonReplace(red){
    if(red){
        return "Welcome to the Next Page";
    }
    return (
        "Error 404 You can't move to the next page"
    );
}

console.log(buttonReplace(true));


function fatherName(name) {
    if (name) {
        return "My father is the best"
    }
    return (
        "Error"
    )
}

console.log(fatherName("baba"));


// Equality operator in Javascript 

function equalOperator(num) {
    if( num == 10) {
        return "Num is Equal to 10"
    }
    return (
        "Num is not equal to 10"
    )
}

console.log(equalOperator(12));


// Equality operator with data type checking

/* for example if we put three === signs then javascript compiler also 
checks the datatype of the variable.*/

// Example is given below

function checkingEqualitySigns( a, b) {
    if (a === b) {
        return "Go to go"
    }
    return (
        "Sorry we can't move without that"
    )
}

console.log(checkingEqualitySigns(12 , "Saad"));


// Unequality Operator in Javascript 

function val(num){
    if (num != 10){
        return "Not Equal"
    }
    return "It is equal"
}

console.log(val(12));


// double unequal operators

// like for example

function check(sum) {
    if (sum !== 17) {
        return "Set Boss"
    }
    return "Equal"
}

console.log(check("17"));

// Logical And Operator

function andOperator(check){
    if ( check > 100) {
        return "it is"
    }
    if (check > 50) {
        return "It is  greater Than 60"
    } 
    return "It is not"
}

console.log(andOperator(10));

// Comparison with Greater Than and equal to operator 

function checkIt(equal) {
    if (equal >= 100) {
        return " It is not greater then but equal to 100"
    }
    return "it is not"
}

console.log(checkIt(110));


// Less then and less then equal to operator 

function lessThan(checking) {
    if (checking <= 100){
        return "It is true"
    }
    return "it is Greater"
}

console.log(lessThan(12));


function lessThenEqual(pure) {
    if (pure < 100) {
        return "Okay"
    }
    return "Not Okay"
}

console.log(lessThenEqual(120));   


// Logical And / Or operator 

function andOperator(checked){
    if (checked >= 100 && checked <= 150){
        return "Yes it is"
    }
    return " No it is not"
}

console.log(andOperator(200));


// Or Operator 

function orOperator(value){
    if(value >= 120 || value <= 100){
            return "Yes It is Greater Then 120"
    }
    return "It is my Name";
}

console.log(orOperator(90));


// if | Else if | else Statement in Javascript

function conditionalStatement (scroll) {
    if(scroll > 12){
        return "It is greater then 12"
    } else if (scroll == 12) {
        return  "It equal to 12"
    } else {
        return  "it is less then 12 "
    }
}

console.log(conditionalStatement(12));


function functionsCalling (Parameter) {
    if(Parameter === "Saad Ahmed") {
        return "That was my Actual Name"
    } else {
        return "It not my Actual name"
    }
}

console.log(functionsCalling("Baba"));


// In order if else condition 

function varCalledFunction(set) {
    if(set < 5) {
        return " It is less then 5"
    }
    else if (set < 10) {
        return " It is less then 10"
    }
    else {
        return " Error"
    }
}

console.log(varCalledFunction(4));


// Chaining with logical operator in if else condition

// write chained if/else condition to fullfil the conditions

function isIsCalled(num1){
    if(num1 < 5) {
        return "Tiny"
    }
    else if (num1 < 10) {
        return "Small"
    }
    else if (num1 < 15) {
        return "medium"
    } else if (num1 < 20) {
        return "big"
    }
    else return "biggest"
}

console.log(isIsCalled(9));



