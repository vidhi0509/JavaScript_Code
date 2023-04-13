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
    }
  };

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

// variable name different from property name
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

// setting default values
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

// mutating variables
let a  = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 24};
({a, b} = obj);
console.log(a, b);

// nested objects
const {fri: {open, close}} = openingHours;
console.log(open , close);