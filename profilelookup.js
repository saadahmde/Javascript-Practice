var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laina",
        "number": "0312-2138301",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0345-7896310",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Hermione",
        "lastName": "Granger",
        "number": "0345-5469310",
        "likes": ["Intriguing Cases", "Violin"]
    },
]


function lookup(name, prop){
    for (i=0; i < contacts.length; i++){
        if (contacts[i].firstName === name){
            return contacts[i][prop] || "No Such Property"
        }
    }

    return "No such Contact"
}

console.log(lookup("Akira", "likes"));