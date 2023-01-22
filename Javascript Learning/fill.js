// value, start, end

// we want to create an array in which it has 10 elements and all should be -1

const myArray = new Array(10).fill(-1);
console.log(myArray);

const myArray1 = [1,2,3,4,5,6,7,8];
// we want to fill 0 in place of 3,4,5

myArray1.fill(0, 2, 5);
console.log(myArray1)