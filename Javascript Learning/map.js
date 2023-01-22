const numbers = [4,6,7,5];

// map return me new array dega
function square(number) {
    return number*number;
}

const squareNum = numbers.map(square);
console.log(squareNum)

//realistic example

const users = [
    {firstName: "vidhi", age: 24},
    {firstName: "sayli", age: 30},
    {firstName: "riya", age: 24}
];

const userNames = users.map(user => {
    return user.firstName;
});

console.log(userNames);