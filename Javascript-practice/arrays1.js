// array methods
let arr = ['a', 'b', 'c', 'd', 'e'];

// slice()
console.log(arr.slice(2))
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -1));

// splice()
// console.log(arr.splice(2));
arr.splice(-1)
console.log(arr);

// reverse()
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse())

// concat()
const letters = arr.concat(arr2);
console.log(letters);

// join()
console.log(letters.join('-'));

// at()
const arr3 = [23, 26, 28]
console.log(arr3[0])
console.log(arr3.at(1));

// getting last element
console.log(arr3.slice(-1)[0]);
console.log(arr3.at(-1));