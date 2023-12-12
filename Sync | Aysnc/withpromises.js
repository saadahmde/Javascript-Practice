// ice cream shop with the help of javascript promises

// const { promises } = require("dns");

let stocks = {
    Fruits: [
        'strawberry',
        'grapes',
        'banana',
        'apple'
    ],
    Liquid: [
        'water',
        'ice'
    ],
    Holder: [
        'cone',
        'cup',
        'stick'
    ],
    Topping: [
        'chocolate',
        'peanuts'
    ]
};


let is_shop_open = false;


let order = (time, work) => {
    

    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            
            setTimeout(() => {

                resolve( work() )
            }, time)
            
            
        } else {
            reject(console.log('Our shop is closed'));
        }
    })
}


order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
.then(() => {
        return order(0.000 ,() => console.log('Production was started') )
    })
    .then(() => {
        return order(2000, () => console.log('Fruit has been chopped'))
    })
    .then(() => {
        return order (1000 ,() => console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} Added`))
    })
    .then(() => {
        return order( 1000,() => console.log('Start the machine')) 
            
    })
    .then (() => {
        return order ( 2000,() => console.log(`Ice cream place on ${stocks.Holder[0]}`))
    })
    .then (() => {
        return order ( 3000,() => console.log(`${stocks.Topping[0]} as toppings`))
    })
    .then(() => {
        return order( 2000,() => console.log('Serve the Ice cream'))
    })
    .catch(() => {
        console.log('Customer left')
    })
    .finally(() => {
        console.log('End of tha day');
    })