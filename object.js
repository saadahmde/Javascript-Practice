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



delete saad.name;



// How to add properties in objects with the help of bracket notation 

var myFamily = {
    "Father": "Baba",
    "Mother": "Mama",
    "Big Brother": "Imtiaz Bhaijan",
    "Another brother": "Faizy Bhaijan",
}


myFamily["me"] = "Saad Ahmed";

console.log(myFamily);



// Object for lookups

function phoneticLookups(val){
    var result = "";

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
    }

    result = lookup[val];

    return result;
    
}

console.log(phoneticLookups("alpha"));



// Write a code to check if the number is prime or not



function checkPrimeNumber(check){
    
    switch(check){
        case check = 2:
            return true;
            break;
        case check = 3:
            return false;
            break;
        case check = 4:
            return true;
            break;
        case check = 5:
            return false;
            break;
        case check = 6:
            return true;
            break;                                      
    } 
}


console.log(checkPrimeNumber(5));



function addNew() {
    var newObject = {
        "Name": "Ahsan Raza Punjabi"
    }
newObject["Father Name"] = "Saad Ahmed";

    return newObject;
}



console.log(addNew());



var anotherObject = {
    "Technology": "Software Technology",
    "Name": "Saad Ahmed",
}

delete anotherObject.Name;

console.log(anotherObject);

// Testing properties form object


var objectIsMain = {
    "Name": "Saad Ahmed",
    "Section": "B",
    "Technology": "Software"
}

function myFunctionIsTheBest(checkProp){
    if (objectIsMain.hasOwnProperty(checkProp)){
        return objectIsMain[checkProp]
    } else {
        return "Not Found"
    }
}

console.log(myFunctionIsTheBest("Technology"));


// Manipulating Complex Object 

var myObject = {
    name: "Saad",
    section: "B",
    Technology: "Software",
    "formats": [
        1,
        2,
        3,
        4,
    ],
    "Ahmed": {
        Grade: "A",
    }

}


console.log(myObject)



// How to manipulate complex object 
// like for example how to store multiple properties 
























