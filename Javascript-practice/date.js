// creating a date
const now = new Date();
console.log(now);

console.log(new Date('December 24, 2015'));
console.log(new Date(2037, 10, 19, 15, 23, 5));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// working with dates
const future = new Date(2037, 10, 19, 15, 23)
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());

future.setFullYear(2040)
console.log(future);
