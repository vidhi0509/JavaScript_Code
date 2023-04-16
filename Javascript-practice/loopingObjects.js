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

// property names
const properties = Object.keys(restaurant.openingHours);
console.log(properties);

for(const day of properties) {
    console.log(day);
}

// property values
const values = Object.values(restaurant.openingHours)
console.log(values);

// both names and values
const entries = Object.entries(restaurant.openingHours)
console.log(entries);

for (const x of entries) {
    console.log(x);
}

// key value
for (const [key, {open, close}] of entries) {
    console.log(`On ${key} we open at ${open} and close at ${close}`);
}