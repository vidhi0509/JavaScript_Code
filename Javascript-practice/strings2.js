const airline = 'TAP Air Portugal'
const plane = 'A320'

// 4. toLowerCase()
console.log(airline.toLowerCase());
// 5. toUpperCase()
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase()
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1)
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@jonas.io'
const loginEmail = 'Hello@Jonas.Io \n'

const lowerEmail = loginEmail.toLowerCase()
// 6. trim()
const trimmedEmail = lowerEmail.trim()
console.log(trimmedEmail);

// we can do this in a single line
const normalisedEmail = lowerEmail.toLowerCase().trim();
console.log(normalisedEmail);
console.log(email === normalisedEmail);

// 7. replace()
const priceGB = '288,97£'
const priceUS = priceGB.replace('£', '$').replace(',', '.')
console.log(priceUS);

// we can also replace whole word
const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate')); // this will only replace 1st occurence of door to gate

// to replace all occurence
// 8. replaceAll()
console.log(announcement.replaceAll('door', 'gate'));

// another way is to use regex
console.log(announcement.replace(/door/g, 'gate'));

// booleans
// 9. includes()
const plane1 = 'A320neo';
console.log(plane1.includes('A320'));
// 10. startsWith()
console.log(plane1.startsWith('Air'));
// 11. endsWith()
console.log(plane1.endsWith('eo'));

// practice exercise
const checkBaggage = function(items) {
    const baggage = items.toLowerCase();
    if(baggage.includes('knife') || baggage.includes('gun')) {
        console.log('You are not allowed on board');
    } else {
        console.log('Welcome aboard!');
    }
}

checkBaggage('I have a laptop, some Food and a pocket Knife')
checkBaggage('Socks and camera')
checkBaggage('Got some snacks and a gun for protection')