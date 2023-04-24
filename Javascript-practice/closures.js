// example 1

const secureBooking = function() {
    let passengerCount = 0;

    return function() {
        passengerCount++;
        console.log(passengerCount);
    }
}

const booker = secureBooking();
booker();
booker();
booker();

// example 2
let f;
const g = function() {
    const a = 23;
    f = function() {
        console.log(a * 2);
    }
}

g();
f();

// example 3

const boardPassenger = function(n, wait) {
    const perGroup = n / 3;
    setTimeout(function() {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, 1000)

    console.log(`Will start boarding in ${wait} seconds`);
}

boardPassenger(180, 3)