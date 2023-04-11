const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};

const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a, b, c);

const [first, second] = restaurant.categories;
console.log(first, second);

// to skip some element, leave a hole
let [first1, ,second1] = restaurant.categories;
console.log(first1, second1);

// when you want to swap variables

[first1, second1] = [second1, first1];
console.log(first1, second1);

const [starter, main] = restaurant.order(2, 0); 
console.log(starter, main);

const nested = [2, 4, [5, 6]];
const [x, ,y] = nested;
console.log(x, y);

// we want separate values from nested array- do destructuring inside of destructuring
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p, q, r=1] = [8, 9]
console.log(p, q, r);