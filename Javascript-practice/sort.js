const owners = ['Jonas', 'Zach', 'Adam', 'Martha']
console.log(owners.sort());
console.log(owners);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// return < 0 A, B (keep order)
// return > 0 B, A (switch order)

// sorted in ascending order
movements.sort((a, b) => {
    if(a > b) return 1;
    if(b > a) return -1;
})

console.log(movements);

// sorted in descending order
movements.sort((a, b) => {
    if(a > b) return -1;
    if(b > a) return 1;
})

console.log(movements);

// above whole logic can be simplified as
// sorted in ascending order
movements.sort((a, b) => a - b)

console.log(movements);

// sorted in descending order
movements.sort((a, b) => b - a)

console.log(movements);