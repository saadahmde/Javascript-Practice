// Finding String length

var myFirstName = " Saad Ahmed";

myFirstNameLength = myFirstName.length;

console.log(myFirstNameLength);

var symbolDataType = "0.98765787";

symbolDataTypeLength = symbolDataType.length;

console.log(symbolDataTypeLength);


// Finding the string character index with the hlp of bracket notation

var ourStr = " I love Allah and Believe that there is no god but Allah";

findingCharacterIndex = ourStr[8];
console.log(findingCharacterIndex);

findingLengthOfOurStr = ourStr.length;

console.log(findingLengthOfOurStr);

var firstName = "Worthwhile";

firstNameLength = firstName.length;

console.log(firstNameLength);

firstNameIndex = firstName[5];

console.log(firstNameIndex);


// Immutable Strings

var Hello = "Hello World!";

console.log(Hello);

/* I want to change this String literal to Hello Javascript and this is how I can do that */

Hello = "Hello Javascript!";

console.log(Hello);

// How to find the nth child of String literal in Javascript 

var myFatherName = "Baba";

myFatherNameLength = myFatherName[1];

console.log(myFatherNameLength);

/* and I want to find the last String value of my variable so this is how we do that */

var myMotherName = "Mom";

myMotherNameLastStringLiteral = myMotherName[myMotherName.length - 1];

console.log(myMotherNameLastStringLiteral);

// if I want second last 

var fileName = "PhotoShop";

fileNameSecondLastLiteral = fileName[fileName.length - 2];

console.log(fileNameSecondLastLiteral)


// to find the index number of your String literal 

var immutableMeaning = "I Don't know";

immutableMeaningLastCharacterIndexNumber = [immutableMeaning.length - 1];

console.log(immutableMeaningLastCharacterIndexNumber)


// Word Blanks 

function wordWrap(myNoun, myAdjective, myVerb, myAdverb){
    var result = "The " + " " + myAdjective + " " + myNoun + " " + myVerb + " in the butcher shop " + " " + myAdverb;

    return result;
}

console.log(wordWrap("dog","big","ran","quickly"));

// Array in Javascript

var arr = ["Hello World!" , 24/7];

console.log(arr);

/* There is also a form of we can say it Nested Array or Multi Dimensional Array 
are in Javascript */
// For Example

var multiDimensionalArray = [["Saad Ahmed", 500],["Baba", 1000],["Mom",1500]];

console.log(multiDimensionalArray)

// Finding indexes in Array 
// there is how we find that 

var ourArray = ["Saad","A"];
console.log(ourArray);


ourArray[1] = "Ahmed";

console.log(ourArray);



// Carriage Return 

var saadAhmed = "-----  16 are not allowed \r Below ";
console.log(saadAhmed);

// finding indexes of multi dimensional array 

var myArray = [[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13,14,15]];

console.log(myArray[3][0][1]);