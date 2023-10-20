// function 

var arr = [1,2,3,4,5];

console.log("Before: ", JSON.stringify(arr));


// JSON.Stringify converts array into string 

function newLineArray (arr, item){
    arr.push(item)
    return arr.shift()
}

var arrItem = [1,2,3,4,5]

console.log("Before: ",JSON.stringify(arrItem));
console.log(newLineArray(arrItem, 6));
console.log("After: ", JSON.stringify(arrItem));


// Try Again this functions

function anotherLineInArray( first , last) {
    first.push(last);
    return first.shift()
}

var numberArray = [6,7,8,9];

console.log("As It Is Array: ", JSON.stringify(numberArray));
console.log(anotherLineInArray(numberArray, 10));
console.log("After Adding: ",JSON.stringify(numberArray));








// functions

/* Stand Line in functions */

function calledSomething(we , are) {
    we.push(are);
    return we.shift();
}

var calledArray = [13, "Saad"];

console.log("Before: ", JSON.stringify(calledArray));
console.log(calledSomething(calledArray, "Ahmed"));
console.log(calledArray);


// .push() method


var addNewValuesInArrayWithPushFunctions = [ "Palestine" , "Pakistan" , "Turkey"];

addNewValuesInArrayWithPushFunctions.push("Dubai" , "Arab");

console.log(addNewValuesInArrayWithPushFunctions);


// .Shift method


var shiftMethod = ["Grapes" , "Apple" , "Banana"];
console.log(shiftMethod);

shiftMethod.shift();

console.log(shiftMethod);

// unshift method 

var unshiftMethod = ["Saad", "Ahmed"];

unshiftMethod.unshift("Baba");

console.log(unshiftMethod);






function resultIsFinal (arr, item){
    arr.push(item)
    return arr.shift()
}

const firstArray = [1,2,3,4,5];

console.log("Before: ", JSON.stringify(firstArray));
console.log(resultIsFinal(firstArray,6));
console.log("After: ", firstArray);

var saadAhmed = [1,2,3,4,5,6];


console.log(saadAhmed.reverse());


var consistencyIsTheKey = ["Saad Ahmed", "Class"];

function isCalledFunc (all , classname) {
    all.push(classname)
    return all
}

console.log("Before: " , JSON.stringify(consistencyIsTheKey));
console.log(isCalledFunc(consistencyIsTheKey, "1 year"));
console.log("After: ", consistencyIsTheKey);













