const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

const movementsUsd = movements.map(function(mov) {
    return mov * eurToUsd
})

console.log(movementsUsd);

const movementsDes = movements.map((mov, i) => {
    if(mov > 0) {
        return `Movement ${i + 1}: You deposited ${mov}`;
    } else {
      return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
    }
})

console.log(movementsDes);