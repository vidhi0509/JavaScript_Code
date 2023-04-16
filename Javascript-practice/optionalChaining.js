const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
    openingHours: {
        [days[3]]: {
        open: 12,
        close: 22,
      },
      [days[4]]: {
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

if (restaurant.openingHours && restaurant.openingHours.mon) 
    console.log(restaurant.openingHours.mon.open);

// with optional chaining
console.log(restaurant.openingHours.mon?.open);

// multiple optional chaining
console.log(restaurant.openingHours?.mon?.open);

// practical example
for(const day of days) {
    console.log(day);
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(open);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [
    {name: 'jonas', email: 'hello@jonas.io'}
]

console.log(users[0]?.name ?? 'Users array empty');