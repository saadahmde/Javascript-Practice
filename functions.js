// Functions 

// Write Reusable code with the help of function

function weCanUseThisAgainAndAgain(){
    console.log("Hello Javascript Functions");
}

weCanUseThisAgainAndAgain();
weCanUseThisAgainAndAgain();
weCanUseThisAgainAndAgain();

// This is how we can call or console functions again and again

// Passing Vales in Function with Arguments

function ourFunctionForArgument(Saad , Ahmed) {
    console.log( Saad - Ahmed);
}

ourFunctionForArgument( 20, 10);

// We are learning the Structure of a Function

function nameOfTheFunction( parameter, parameter2){
    console.log(parameter + parameter2)
}

nameOfTheFunction("Saad " , "Ahmed")
// The is how the function works

// Global Scope with Functions

var myGlobal = 10;

function func1(){
    oopsGlobal = 5;
}

function func2(){
    var output = "";
    if (typeof myGlobal != "undefined") {
    output += "My Global =  " + myGlobal
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oops Global = " + oopsGlobal
    }
    console.log(output);
}

func1();
func2();

// Trying to understand function 

function myName(){
    myFirstName = "Saad Ahmed";
}

function secondFunction() {
    var finalPrint = "";
    if (typeof myFirstName != "undefined" ){
        finalPrint = myFirstName
    }
    console.log(finalPrint)
}

myName()
secondFunction()

// calling variables without declaring keys

function carName1 () {
    carName = "civic";
}

function callOut() {
    var result = "";
    if (typeof carName != "undefined"){
        result = carName
    }
    console.log(result);
}
carName1()
callOut()

// Local Scope and functions

function helloWorld() {
    var myVar = "Muhammad S A W";
    console.log(myVar);
}

helloWorld();


/* The difference between global scope and local Scope is that global scope can be call in functions and anywhere we want in Javascript
but the local scope the variables that are called inside the functions are local scope and can not be console outside of the functions */

// functions

function nameUndefined() {
    var declaringFunction = "any thing you want Allah will give you if you make an effort for it";
    var takeCare = "Kindly take care of yourself and be kind to every body in your circle";
    var downFall = "Any one who has the power to teach anybody any skill and he is teaching him or her like he is down falling so he is the person who never get success in their life";
    console.log(declaringFunction);
    console.log(takeCare);
    console.log(downFall);
}

nameUndefined();

function pushYourSelf( a , b){
    var getDown = a - b;
    var printVoid = "Functions are to complicated in Javascript";
    console.log(getDown);
    console.log(printVoid);
}

pushYourSelf( 10 , 5);

// Global vs local Scope in functions 

/* Global and Local variables can be declared as with same name and that can be possible in the 
example given below */

var globalVariable = "Sun";

function func3() {
    var localVariable = globalVariable;

    return localVariable;
}

console.log(func3());

/* In the example above we first create a global scope variable outside of a function and then we 
make a function called func3() in it i Declared a local scope variable with assigned name localVariable
then in it we assigned the value of outer global variable with it's name or key after in end we return 
the value of local scope (localVariable) and console the whole function with the help of console.log not write the only the 
we console it like console.log(func3) and the output is "Sun" */

var outerWear = "T-shirt";

function myFunctionIsTheBest() {
    var outerWear = "Sweater";

    return outerWear;

}

console.log(myFunctionIsTheBest());
console.log(outerWear);

// In this example we just call out local variable from the functions and change the global variable value inside the function

// returning arguments with functions

function returnArguments(a, b) {
    var result = a - b;
    console.log(result)
}

returnArguments(12 , 390)


// console value of function scope with the help of return method

function returnMethod(num) {
    return num * 2500;
}

console.log(returnMethod(30));

// Example 2

function checkingReturnStatement(name){
    return name + " Ahmed";
} 

console.log(checkingReturnStatement("Saad"))

// functions 

var saadAhmed = "Thank You"
function nameHere(){
    checkItOut = " Very much";
    console.log(saadAhmed + checkItOut)
}

nameHere();

// Second



function typeValue() {
    oopsMyFault = "My Name is"
}

function typeAnotherValue() {
    result = "";
    if (typeof oopsMyFault != "undefined")
    console.log(result += oopsMyFault + " Saad Ahmed");
}

typeValue()
typeAnotherValue()


// finding undefined value with return function statement

/* First we are going to set a key in function
like */


var variableDeclareFirst = 0;
function statementChecking() {
    oopsDeclared = "Answer " + variableDeclareFirst;
}

// and if we didn't use return statement so it will be undefined and id doesn't print any thing in the console

// Assignment with return value method

var variableCalledChange = 2000;

function declaringWriteFunction(num) {
    return num * variableCalledChange;
}
declaringWriteFunction(30)

//Another example 

var myHashtagIsNew = "#Hey Friend";

function addThree(sum) {
    return myHashtagIsNew + sum
}

console.log(addThree(", Hope you're good"));

// Assignment with a return value 

var change = 0;

function nameTheFunction(sum){
    return (sum + 10) / 5;
}

change = nameTheFunction(20);

console.log(change);

// Function

function tryingForFirstTime(num) {
    return (num - 79) 
}

var changeIt = tryingForFirstTime(100);

console.log(changeIt)

// Return Statement 

function returnChecking() {
    return ("Saad Ahmed");
}

returnChecking()

// Trying console.log in function to print " Saad Ahmed "

function changeSaadAhmed() {
    console.log("Saad Ahmed");
}

changeSaadAhmed()

// Creating Array in function

function arr() {
    return arr = 
    ["Saad Ahmed",
    20,
    "Father Name",
    "Baba"
    ]
}

console.log(arr());


function callFunction (shahb){
    return (shahb + 10) /8;
}

console.log(callFunction(50));


// Function

var proceed = 0;

function saySomeThing(Arg) {
    return (Arg + 5) / 10;
}

proceed = saySomeThing(15);

console.log(proceed);



