

const arr3 = (function() {
    return function sum(...args){
        return args.reduce((a,b) => a + b); 
    }
})();


console.log(arr3(1,2,3))


