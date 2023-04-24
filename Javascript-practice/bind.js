const lufthansa = {
    airline: 'lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function() {}
    // new syntax
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
    }
}

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
}

const book = lufthansa.book;

const bookEW = book.bind(eurowings)
bookEW(23, 'Steven Williams')

const bookEW23 = book.bind(eurowings, 23)
bookEW23('Martha Cooper')

// partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23)
console.log(addVAT(100));