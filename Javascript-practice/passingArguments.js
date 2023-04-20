const flight = 'LH234';
const tom = {
    name: 'Tom David',
    passport: 23446585886
}

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr.' + passenger.name;

    if (passenger.passport === 23446585886) {
        console.log('Check in');
    } else {
        console.log('Wrong passport');
    }
}

checkIn(flight, tom);
console.log(flight, tom);