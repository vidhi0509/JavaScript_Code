// Sets are iterable
// store data and have its own methods
// no index-based access and order is not guaranteed
// unique items only (no duplicates allowed)

const numbers = new Set([1,2,3]);
console.log(numbers);
console.log(numbers.has(1));

const items = new Set();
items.add("item1");

console.log(items);