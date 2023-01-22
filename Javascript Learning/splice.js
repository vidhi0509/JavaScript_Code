// it is used to insert or delete something from an array
// start, delete, insert

const newArray = ['item1', 'item2', 'item3'];

newArray.splice(1, 1); // it will delete item2
// it returns the deleted item

console.log(newArray)

newArray.splice(1, 0, 'inserted item')
console.log(newArray)