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
    },

    orderPizza: function(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};

// with || and && we can use any data type, return any data type and do short circuiting
console.log(3 || 'Steven');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

// using short circuiting
const guest2 = restaurant.numGuests || 10;
console.log(guest2);

// And operator
console.log(0 && 'Steven');
console.log(7 && 'Jonas');

// Nullish operator
restaurant.numGuests = 0;
const guest3 = restaurant.numGuests ?? 10;
console.log(guest3); // it will print 0 as nullish operator will not take 0 and '' as falsy values