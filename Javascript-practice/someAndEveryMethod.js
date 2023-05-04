const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements.includes(-130)); // will return true
// some
const anyDeposits = movements.some(mov => mov > 0)
console.log(anyDeposits); // will return true

// every
console.log(movements.every(mov => mov > 0)); // will return false