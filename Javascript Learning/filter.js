const numbers = [1,3,5,6,4,8];

const isEven = (number) => {
    return number%2===0;
}

const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);

//filter will create new array and will even elements to it
// filter function ka callback will return either true or false i.e, will always return a boolean value
