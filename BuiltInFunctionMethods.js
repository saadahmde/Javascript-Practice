/* Built In Function Methods in Javascript

1. .push() function
2. .pop() function
3. .shift() function
4. .unshift() Function
*/
// Declaring an array inside an array with the help of .push() function

var ourArray = ["Saad", true];

/* .push() function adds an new array or a array value in Javascript array */

ourArray.push(["Ahmed, False"]);

console.log(ourArray);

/* One more thing to remind is that we don't have to declare an variable for adding a new array with the 
help of .push() function In Javascript */

// counting the length of an array

var ourArrayLength = ourArray.length;

console.log(ourArrayLength);

// Now we are removing an array with the help of .pop() Function of javascript

var myArray = [["John", 86], ["Ali", 59]];

console.log(myArray);

var removedAnLastArray = myArray.pop();

// .pop() function remove the last value and Key in Javascript Array

console.log(removedAnLastArray);

console.log(myArray)

// Now we are declaring .shift() function in Javascript 

/* It helps us to remove the first value of array in javascript
*/

var shiftFunction = ["Saad", 89, true];

var removedFirstValueOfArray = shiftFunction.shift();

console.log(shiftFunction);

// Adding value to the first index of an Array with the help of .unshift() function 

var firstValue = ["John" , 0.89];

firstValue.unshift(["Saad", 0.78]);

// .unshift() function helps us to add a new value or a key in an Array in Javascript

console.log(firstValue) // output is [["Saad", 0.78], ["john", 0.89]]

// how to find an index or multi dimensional array in javascript

var arr = [["saad" , "Ahmed"],[1,2,3],[[10,0.97],"Your Welcome"]];

console.log(arr[2][1]);

console.log(arr)


// How to create a Shopping lIst through multi dimensional Array

var myShoppingList = [["Banana", 3],["Milk",3],["Rice",1]];

console.log(myShoppingList)


