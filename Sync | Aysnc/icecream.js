// let's make over ice cream shop


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

let orders = (call_production) => {

    console.log('Order placed. Please call production')
    call_production();
}

let production = () => {
    console.log('Production has started')
}

orders(production);