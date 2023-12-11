// Golf game with if else condition


var arr1 = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home"];

function calledSomeThing(stroke, par) {
    if( stroke == 1) {
        return arr1[0]
    } else if (stroke <= par - 2) {
        return arr1[1]
    } else if (stroke <= par - 1) {
        return arr1[2]
    } else if (stroke == par) {
        return arr1[3]
    } else if (stroke == par + 1) {
        return arr1[4]
    } else if (stroke >= par + 2) {
        return arr1[5]
    } else if (stroke >= par + 3) {
        return arr1[6]
    }
}

// console.log(calledSomeThing(3 , 4));


var arr1 = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home"];

// Trying once again 

function testArr(stroke, par ){
    if (stroke == 1 ) {
        return arr1[0]
    } else if ( stroke <= par - 2){
        return arr1[1]
    } else if ( stroke <= par - 1){
        return arr1[2]
    }  else if ( stroke == par){
        return arr1[3]
    } else if ( stroke <= par + 1){
        return arr1[4]
    } else if ( stroke <= par + 2){
        return arr1[5]
    } else if ( stroke <= par + 3){
        return arr1[6]
    } 
}

console.log(testArr(8, 10 ));



// Golf Game with if and else if conditions

var names = ["Tiny", "Small", "medium", "big", "biggest", "Huge"];

function nameIt(ahmed, saad){
    if(saad == 1){
        return names[0]
    } else if (saad <= ahmed - 2) {
        return names[1]
    } else if (saad <= ahmed - 1) {
        return names[2]
    } else if (saad == ahmed){
        return names[3]
    } else if (saad >= ahmed + 1) {
        return names[4]
    } else if (saad >= ahmed + 2) {
        return names[5]
    }
}

console.log(nameIt(3,5));



// function with if else conditions

function varCalledSomeThing(num){
    if(num >= 3) {
        return " Hello World!"
    } else {
        return "Error 404"
    }
}

console.log(varCalledSomeThing(10));


// functions with switch case


function checkSwitchCase(val) {
    var answer = "";

    switch(val) {
        case val = "Karachi":
            answer = "Monday"
            break;
        case val = "Islamabad":
            answer = "Tuesday"   
            break;
        case val = "Multan":
            answer = "Wednesday"
            break;
        case val = "Lahore":
            answer = "Thursday"
            break;
        case val = "Rawalpindi":
            answer = "Friday"
            break;
        case val = "Hyderabad":
            answer = "Saturday"
            break;
        case val = "Huzza":
            answer = "Sunday"
            break;                    
    }
    return answer
}

console.log(checkSwitchCase("Islamabad"));


// default statement in switch case

var setAnswer = "";

function defaultValue(val){
    switch(val){
        case "c":
            setAnswer = "Cat";
            break;
        case "b":
            setAnswer = "Bowl";
            break;
        case "a":
            setAnswer = "Apple";
            break;
        default:
            setAnswer = "Nothing";
            break;                    
    }

    return setAnswer;
}

console.log(defaultValue(2));


// multiple inputs in a with same output in switch statement

function differentOutputs(answer){
    var goldStatement = "";

    switch(answer){
        case 1:
        case 2:
        case 3:
            goldStatement = "High";
            break;
        case 4:
        case 5:
        case 6:
            goldStatement = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            goldStatement = "Low";
            break;            
    }

    return goldStatement;
}

console.log(differentOutputs(3));



// switch condition to switch statement 

function  switchCondition(val) {

    var let = "";
    switch(val){
        case "bob":
            let = "He is Bob";
            break;
        case "hey":
            let = "This is answer number #2";
            break;    
    }

    return let;
}



console.log(switchCondition("bob"));
























