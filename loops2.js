let myArray = [34,56,65,39];

let totalOfArray = 0;

for (const element of myArray) {
    totalOfArray += element;
}

console.log(totalOfArray);


var cos = [2,3,45,6];
var cosTotal = 0;

for (var i = 0; i < cos.length; i++) {
    cosTotal += cos[i];
} 

console.log(cosTotal);



// Nested array

function multiplyAll(arr){
    var product = 1;

    for (var i=0; i < arr.length; i++ ){
        for (var j=0; j < arr[i].length; j++){
            product *= arr[i][j];
        }
    }
    return product;
}


var arrLength = multiplyAll([[1,2],[3,4,5],[6,7,8,9]]);

console.log(arrLength);

// Another try 
// nested Array loop


function anotherOne(arr2){
    var product = 1;
    for (i=0; i < arr2.length; i++ ){
        for (j=0; j < arr2[i].length; j++){
            product *= arr2[i][j];
        }
    }
    return product;
}

var arrLength2 = anotherOne([[1,2],[3,4,5],[6,7,8,9]]);

console.log(arrLength2);



// while loops

var doWhile = [];
var i = 0;


while (i < 5){
    doWhile.push(i);
    i++
}

console.log(i, doWhile);



// Another try

var meIs = [];
var j = 9;

while (j < 10){
    meIs.push(j);
    j++;
}

console.log(j, meIs);


// do while loops

var doWhile2 = [];
var i = 20;

do {
    doWhile2.push(i);
    i++;
} while (i < 5);

console.log(i, doWhile2);


// printing prime number with while loop

var primeNumber = [];
var i = 9;

do {
    primeNumber.push(i);
    i += 2
} while (i < 10)

console.log(i,primeNumber);


