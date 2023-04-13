const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
    openingHours: {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0, // Open 24 hours
        close: 24,
      },
    },

    orderPasta: function(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    }
};

const arr = [7, 8, 9];
const arr1 = [1, 2 , ...arr];
console.log(arr1);

// when you want elements individually
console.log(...arr1);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

// join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// spread operator with strings
const str = 'Steven';
const letters = [...str, '', 'S.'];
console.log(letters);

// real world example
// const ingredients = [prompt('Lets\'s make pasta! Ingredient 1?'), 
// prompt('Ingredient 2?'), 
// prompt('Ingredient 3?')];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// objects
const restaurant1 = {...restaurant, founder: 'Guiseppe'};
console.log(restaurant1);

const restaurantCopy = {...restaurant};