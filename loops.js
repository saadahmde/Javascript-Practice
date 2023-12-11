// While loop

let myArray = [];

let i = 0;
while(i < 5){
    myArray.push(i);
    i++
}


console.log(myArray)


let twoTable = [];

let x = 0;

while(x <= 20){
    twoTable.push(x);
    x += 2;
}

console.log(twoTable)


// For loop


let ourArray = [];



for(let y = 0; y < 10; y++){
    thisArray.push(y)
}

console.log(thisArray);


// iterate odd number with while loop

let oddNumber = [];

for(let i = 1; i < 30; i += 2){
    oddNumber.push(i);
}

console.log(oddNumber);

//iterate backward counting with for loop 

let backwardCounting = [];

for (let i = 10; i > 0; i--){
    backwardCounting.push(i)
}

console.log(backwardCounting);




// iterate through for loop with array 


let myAccount = [1,2,3,4,5,6,7,8,9,10];
let total = 0;

for (let i = 0; i < myAccount.length; i++){
    total += myAccount[i];
}

console.log(total);

let totalAmount = [24,38,56];

let totalOfAmount = 0;


for (let i = 0; i < totalAmount.length; i++){
    totalOfAmount += totalAmount[i];
}

console.log(totalOfAmount);



let nextObject = [1,2,3,4,5];
let anotherObject = [];

for (let i = 0; i < nextObject.length; i++){
    anotherObject.push(i)
}

console.log(anotherObject)





let thisArray = [1,2,3,4,5];
let ourArray = 0;


for (let i = 0; i < thisArray.length; i++){
    ourArray += thisArray[i];
}

console.log(ourArray);


let thisIsArray = [1,2,3,4,5];
let ourIsArray = 0;


for (let i = 0; i < thisIsArray.length; i++){
    ourIsArray += thisArray[i];
}

console.log(ourIsArray);


// Nesting with for loops

// function multiplyAll(sum){

//     let product = 1;

//     for(let i = 0; i < sum.length; i++){
//         for (let j = 0; j < sum[i].length; j++ ){
//             product *= sum[i][j]
//         }
//     }

//     return product;
// }


// let product = multiplyAll([[1,2],[3,4,5],[6,7,8]])

// console.log(product);



function multiplyAll(arr) {
    let product = 1;

    for (const element of arr){
        for( j = 0; j < element.length; j++){
            product *= element[j];
        }
    }

    return product;
}


let product = multiplyAll([[1,2],[3,4,5],[6,7,8]])

console.log(product);


// we can also break a for loop with the help of break condition


for (let i = 0; i < 10; i += 2){
    if ( i === 7){
        break;
    }

    console.log( 'Total Elephant :' + i);

}




let number = 0;

while (number < 10){
    console.log(number);
    number++;
}


let totalPercentage = 100;

while (totalPercentage < 500){
    console.log(totalPercentage);
    totalPercentage++;
};



