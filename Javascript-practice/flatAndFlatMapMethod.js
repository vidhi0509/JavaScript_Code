const arr = [[1,2,3], [4,5,6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1,2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2)); // by default the depth is 1 so we need to specify how many level it needs to go