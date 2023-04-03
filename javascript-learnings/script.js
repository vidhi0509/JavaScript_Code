// let js = "amazing";
//     if(js === "amazing") {
//     alert('JavaScript is FUN!');
// }
 
// Data types

let javascriptIsFun = true;
console.log(typeof javascriptIsFun); // boolean

// const job; // gives error 

// spliting string in multiple lines

console.log(`String
multiple
lines`);

// Type conversion

const year = '1992';
console.log(Number(year)); // will convert string to number

console.log(String(23)); // converts number to string

// Type coercion

console.log('I am' + 24 + ' years old'); // converts 23 to string
console.log('23' - '10' - 3); // converts 23 and 10 to numbers
console.log('23' / '2');// converts 23 and 2 to numbers
console.log('123' < 57);

// falsy values
console.log(Boolean(0));

const money = 0;
if(money) {
    console.log(`Don't spend it all`);
} else {
    console.log('You should get a job');
}

// Function declaration

calAge1(1991) // can be called before defined

function calAge1(birthYear) {
    return 2023 - birthYear;
}

const age1 = calAge1(1998)
console.log(age1);

// Function expression

const calAge2 = function(birthYear) {
    return 2023 - birthYear;
}

const age2 = calAge2(1998);
console.log(age2);

// function declaration can be called before they are defined

// Arrow function

const calAge3 = (birthYear) => 2023 - birthYear;

const age3 = calAge3(1996);

console.log(age3);

// Function calling other functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    return juice;
}

console.log(fruitProcessor(2, 3));

// Array methods

const friends = ['Michael', 'Steven', 'Peter'];
friends.push('Jay')
console.log(friends)

friends.unshift('John')
console.log(friends)

friends.pop()
console.log(friends)

friends.shift()
console.log(friends) 

console.log(friends.indexOf('Steven'))

console.log(friends.includes('Peter'))

console.log(friends.toString())

console.log(friends.join("*"))

const firstNames = ['Bob', 'Jay', 'Peter']
const lastNames = ['Evans', 'Harris', 'Green']

console.log(firstNames.concat(lastNames))

// Objects

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 46,
    job: 'teacher',
    friends: ['Bob', 'Jay', 'Peter']
}

console.log(jonas.age) // dot notation
console.log(jonas['job']) // bracket notation

const namekey = 'Name'
console.log(jonas['first' + namekey])
console.log(jonas['last' + namekey])

// taking input from a user to display value from an object 

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');
console.log(jonas[interestedIn])
