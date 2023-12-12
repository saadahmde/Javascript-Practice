// let's make over ice cream shop

// import { setTimeout } from 'timers/promises';


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

let orders = ( fruit_name ,call_production) => {
    setTimeout( function() {

        console.log(`${stocks.Fruits[fruit_name]} is selected`);
        call_production();

    }, 2000);
}

let production = () => {
    setTimeout(() => {
        console.log('Production has started');
        setTimeout(() => {
            console.log('The fruit has been chopped');
            setTimeout(() => {
                console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} is Added`);
                setTimeout(() => {
                    console.log('Start the machine');
                    setTimeout(() => {
                        console.log(`Ice cream placed on ${stocks.Holder[1]}`);
                        setTimeout(() => {
                            console.log(`${stocks.Topping[0]} as Topping`);
                            setTimeout(() => {
                                console.log('serve Ice cream');
                            }, 2000)
                        }, 3000)
                    }, 2000)
                },1000)
            }, 1000)
        }, 2000);
    })
};

orders(0,production);