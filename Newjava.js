

// Manipulating Complex Object


var myObject = [
    1,
    2,
    3,
    4,
    {
        "First Name": "Saad",
        "Last Name": "Ahmed",
    }, [
        "Javascript",
        "Java",
        "C",
        "C++"
    ]
]

// Accessing Nested Object properties

var subject = {
    car: {
        inside: {
            "seates": "Two",
            Passenger: "Two"
        },
        outside: {
          Road: "Offroad",
        }
    }
}

var myBoxObject = subject.car.inside["Passenger"];

console.log(myBoxObject);



// How to call a single property from nested object


var callPropertyFromNestedAObject = {
    familyTree: {
        Brothers : {
            "Big Brother" : "Imtiaz Ahmed",
            "Middle Brother": "Faiz Ahmed",
            "My_self": "Saad Ahmed",
        }, Sister: {
            "Big Sister": "Noor e Fatima",
            "Twin Sisters": "Umaima & Rumaisa",
        }
    }
};

var callASingleProperty = callPropertyFromNestedAObject.familyTree.Brothers["Big Brother"];

console.log(callASingleProperty);



// Accessing property from nested Object

var newObjectIsComing = {
    Class: {
        Attributes: {
            "Name": "Saad",
            "Age": 20,
            "Education": "Matriculation"
        }, Methods: {
            "Employee": "Sales Agent",
        }
    }
}

// Now we have to access a single property in it

var selectProperty = newObjectIsComing.Class.Methods["Employee"];

console.log(selectProperty);


// Accessing property from nested array

var nestedArray = [
    {
        "Plant1": "Rose",
        "Plants": [
            "Jasmine",
            "Flower",
        ]
    },{
        "Car1": "Ferrari",
        "Cars": [
            "Rolls Royce",
            "BMW",
        ]
    }
];


var newTree = nestedArray[0].Plants[1];

console.log(newTree);


var pastObject = {
    "Record Collection" : {
        "Data": {
            "First name": "Saad",
            "Last Name": "Ahmed",
            "Address": "B 26 11 C 1 North Karachi",
        }
    }
};

var objectCopy = JSON.parse(JSON.stringify(pastObject));

console.log(pastObject);
console.log(objectCopy);


// Coding Challenge

var collection = {
    2548: {
        "album": "Slippery When Wet",
        "artist": "Bon Jove",
        "track": [
            "Let it Rock",
            "You Give Love a Bad Name",
        ],
        2468: {
            "album": "1999",
            "artist": "Prince",
            "tracks": [
                "1999",
                "Little Red Corvette",
            ]
        },
        1254: {
            "artist": "Robert Palmer",
            "tracks": []
        },
        5439: {
            // "album": "ABBA Gold",
        }
    }
}



// JSON.parse(JSON.stringify) is a modern way to copy an object in javascript
var collectionCopy = JSON.parse(JSON.stringify(collection));


function updateRecords(id, prop, value){
    if (prop === "") {
        delete collection[id][prop];
    } else if (prop === "tracks"){
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }

    return collection;
};



console.log(updateRecords(5439));
// console.log(updateRecords(1254,"tracks","test"));
// console.log(updateRecords(5439, "artist", "ABBA"));



// Accessing Array indexes

var myArray = ["Saad", "Ahmed", "Father = 'Baba'",];


console.log(myArray[1])









