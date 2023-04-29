const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const balance = movements.reduce(function(acc, cur) {
    return acc + cur
}, 0)

console.log(balance);