const numbers = [2,4,8,10];

// check every element in this array is even or not

const ans = numbers.every((number) => {
    return number%2===0;
})

// callback function returns --> true/ false
// every method returns --> true/ false 
// if har ek element me condition is giving true then only every method will return true otherwise it will return false

console.log(ans);