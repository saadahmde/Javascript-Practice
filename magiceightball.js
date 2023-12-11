// Magic eight ball Project with switch and if/else if/else statement


const userName  = 'Saad';

userName ? console.log(`Hello ${userName}`) : console.log('Hello!');

const userOuestion = 'We want to ask the Magic eight ball';

console.log(userOuestion + ' ' + userName );


const randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) {
    case randomNumber === 0: 
        eightBall = 'It  is certain';
        break;
    case randomNumber === 1:
        eightBall = 'It is decidedly so';
        break;
    case randomNumber === 2: 
        eightBall = 'Reply hazy try again';
        break;
    case randomNumber === 3:
        eightBall = 'Cannot predict now';
        break;
    case randomNumber === 4:
        eightBall = 'Do not count on it';
        break;
    case randomNumber === 5:
        eightBall = 'My sources say no';
        break;
    case randomNumber === 6:
        eightBall = 'Outlook not so good';
        break;
    default:
        eightBall = 'Sign points to yes'
}

console.log(eightBall);