const numbers = [3, 400, 1000, 5, 10]

// sort will change the original array

numbers.sort();
console.log(numbers);

// therefore sort like this

numbers.sort((a,b) => {
    return a-b;
})

console.log(numbers);

// a-b --> positive 
// then pehle b ko rakho then a

// a-b --. negative
// then keep first a then b

// real world example to sort product on the basis pf lowtohigh and hightolow price

const products = [
    {productId: 1, productName: "p1", price: 300},
    {productId: 2, productName: "p2", price: 3000},
    {productId: 3, productName: "p3", price: 200},
    {productId: 4, productName: "p4", price: 8000}
];

//low to high
const lowToHigh = products.slice(0).sort((a, b) => {
    return a.price - b.price;
})

//high to low
const highToLow = products.slice(0).sort((a, b) => {
    return b.price - a.price;
})

// it will change the original array that is why clone it to a new array

console.log(lowToHigh);
console.log(highToLow);