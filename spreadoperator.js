// Spread operators with function arguments 


const arr1 = ["JAN", "FEB" , "MAR", "APR", "MAY", "JUN", "JULY"];

let arr2;

(function() {
    arr2 = [...arr1];
    arr1[0] = "potato";
})();

console.log(arr2); 


