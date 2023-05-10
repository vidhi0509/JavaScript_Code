// parsing
console.log(Number.parseInt('30px', 10)); // 30
console.log(Number.parseInt('e23', 10)); // NaN

console.log(Number.parseFloat('2.5rem'));
console.log(Number.parseInt('2.5rem'));

console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));

// best way to check if a value is a number
console.log(Number.isFinite(20));
console.log(Number.isFinite(20/0));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));

console.log(Math.sqrt(25));
console.log(25 ** (1/2));
console.log(8 ** (1/3));

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.min(5, 18, 23, 11, 2));

console.log(Math.trunc(23.3));

console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor(23.9));

// rounding decimals
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));