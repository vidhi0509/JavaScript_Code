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

lufthansa.book(239, 'John Smith')
lufthansa.book(635, 'Martha David')

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
}

const book = lufthansa.book;
// does not work as it is calling a normal function and for normal function this is undefined
// book(23, 'Sarah Williams')


// call() method
book.call(eurowings, 23, 'Sarah Williams')

book.call(lufthansa, 239, 'Mary Cooper')

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
}

book.call(swiss, 563, 'David Cooper')

// apply() method
const flightData = [598, 'George Williams']
book.apply(swiss, flightData)

// same as above
book.call(swiss, ...flightData)