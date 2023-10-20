// Objects in Javascript

// Object are similar like array but it doesn't contain indexes instead of it contain properties and value 
// here is an example to object syntax in javascript

var dogName = {
    "name": "Boo",
    "breed": "I don't know",
    "age": 45,
}

console.log(dogName)

/* In Objects we can add any type of value or key like for example the keys can be store in ("Strings", Boolean, Array[], etc);
*/


// Accessing any property with Dot notation
//Like for example

var myBio = {
    "name": "Saad Ahmed",
    "Father Name": "Sarfaraz Ahmed",
    "age": 20,
}


console.log(myBio.age)
console.log(myBio["name"]);
console.log(myBio["Father Name"])

// We can also invoke our object property in the upper given example and also with  Dot notation

// we can call our key with the help of bracket notation but if only when there is a space between the property name 
//For Example

var brotherName = {
    "Big Brother": 'Imtiaz Ahmed',
    "Another Brother": 'Faiz Ahmed',
    "Me": 'Saad Ahmed',
}

console.log(brotherName["Another Brother"]);
console.log(brotherName['Big Brother'])

// another important note that we can use double and single quotes it can't reverse ant kind of error 
// we can also console the object or access it with variable like for Example

var likeIt = {
    16: "Montana",
    12: "Number",
}

var playerName = 12;

var player = likeIt[playerName];

console.log(player);



var saad = {
    "name": "Ali",
    19: "Age",
}

var _player = 19;

var callingWithBracketNotation = saad[_player];

console.log(callingWithBracketNotation)



// How to update object property with the help of Dot notation


var whoIsTheLord = {
    "name": "Allah S W T", 
    "Last Messenger": "Prophet Muhammad p.b.u.h",
}

whoIsTheLord.name = "The only God for Worship is the one who is Allah SWT";

console.log(whoIsTheLord.name);

