
var letter = [];

var /* `rword` is a variable that is initially an empty string. It is used to store the reversed
version of the `word` variable. */
reword = "";

var word = "racecar";

for (let i = 0; i < word.length; i++ ) {
    letter.push(word[i])
}

for ( i = 0; i < word.length; i++) {
    reword += letter.push();
}

if (reword === word) {
    console.log(word + " is a palindrome")
} else {
    console.log( word + " is not a palindrome")


    
};

