const airline = 'TAP Air Portugal'
const plane = 'A320'

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length)
console.log('B737'.length);

// 1. indexOf()
console.log(airline.indexOf('r')); // will give 1st occurence
// 2. lastIndexOf()
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Air'));
// 3. slice()
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(-2));

const checkMiddleSeat = function(seat) {
 // B and E are middle seats
    const s = seat.slice(-1)
    if(s === 'B' || s === 'E')
        console.log('You got the middle seat');
    else
        console.log('You got lucky');
}

checkMiddleSeat('11B')
checkMiddleSeat('23C')
checkMiddleSeat('3E')