// direct boolean value without if else condition

function oneTwoThree(num , sum){

    return (num > sum);
}

console.log(oneTwoThree(20 , 30));

function oneTwoThree(num , sum){

    return (num > sum);
}

console.log(oneTwoThree(20 , 15));



// trying to convert a number to a string except 0 zero


const num6 = 11;
const changeBoolean = Boolean(num6);

console.log(changeBoolean);


// checking implicit conversion 


console.log(2 + true);


// returning outside to function any time with help of return statement


function outsideOfFunction(a,b) {
    if (a > 0 || b < 0) {
        return "undefined"
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}


console.log(outsideOfFunction(2,2));




// Counting card Game

var count = 0;

function cc(card){
    switch (count){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    };

    var holdbet = "Hold";
    if(count > 0){
        return "Bet";
    }
    return count + " " + holdbet;
}

cc(2); cc(3); cc(7); cc("K"); cc("A");
console.log(cc(4))


// Trying with if else conditions

// var count1 = 0;

// function ccc(card){
//     if(count1 > 2){
//         return count++
//     } else if (count1 > 3){
//         return count++
//     } else if (count1 > 4){
//         return count++
//     } else if (count1 > 5){
//         return count++
//     } else if (count1 > 6){
//         return count++
//     } else if (count1 < 10) {
//         return count--
//     } else if (count1 == "K") {
//         return count--
//     } else if (count1 == "J") {
//         return count--
//     } else if (count1 == "Q") {
//         return count--
//     } else if (count1 == "A") {
//         return count--
//     } 

//     var varIsGood = "Hold";
//     if(count1 > 0){
//         return "Bet"
//     }

//     return (count1 + " " + varIsGood);
// }  

// ccc(2); ccc(5); ccc(7); ccc("K"); ccc("A");
// console.log(ccc(10));



var count2 = 0;

function ccc(cards){
    if(cards === 2, cards === 3, cards ===4, cards === 5, cards === 6){
        return count2++
    } else if (cards === 10, cards === "K", cards === "Q", cards === "J", cards === "A"){
        return count2--
    }

    var varIsGood = "Hold"
    if (count2 > 0){
        varIsGood = "Bet"
    }

    
    return (count2 + " " + varIsGood)
}


ccc(2); ccc("K"); ccc(10); ccc(6); ccc(5);
console.log(ccc(10));  

