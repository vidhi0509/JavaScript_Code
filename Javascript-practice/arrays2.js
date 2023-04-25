const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.forEach(function(movement) {
    if(movement > 0) {
        console.log(`You deposited ${movement}`);
    } else {
        console.log(`You withdrew ${Math.abs(movement)}`);
    }
})

// to access the index
movements.forEach(function(movement, index, array) {
    if(movement > 0) {
        console.log(`Movement ${index + 1}: You deposited ${movement}`);
    } else {
        console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
    }
})

// forEach with maps

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map) {
    console.log(`${key}: ${value}`);
})

// forEach with sets

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR'])
currenciesUnique.forEach(function(value, key, map) {
    console.log(`${key}: ${value}`);
})