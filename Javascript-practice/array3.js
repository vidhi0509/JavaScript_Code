console.log([1,2,3,4,5,6]);
console.log(new Array(1,2,3,4,5,6));

// empty arrays and fill method
const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));

x.fill(1)
// x.fill(1, 3)
console.log(x);

// Array.from
const y = Array.from({length: 7}, () => 2);
console.log(y);

const z = Array.from({length: 7}, (_, i) => i + 1)
console.log(z);

console.log(Array.from('foo'));