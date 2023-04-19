// 12. split()
console.log('a+very+nice+string'.split('+'));
console.log('John Bing'.split(' '));
const [firstName, lastName] = 'John Bing'.split(' ');
console.log(firstName, lastName);

// 13. join()
const newName = ['Mr.', firstName, lastName].join(' ')
console.log(newName);

// function to capitalize first letter of each word
const capitalizeName = function(name) {
    const names = name.split(' ');
    const namesUpper = [];
    for (const n of names) {
        namesUpper.push(n[0].toUpperCase() + n.slice(1));
        // another way
        // namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
    }

    console.log(namesUpper); // it will give an array to join it again use join()
    console.log(namesUpper.join(' '));
}

capitalizeName('jessica ann smith davis');
capitalizeName('john bing')

// padding
// 14. padStart()
const message = 'Go to gate 23!'
console.log(message.padStart(25, '+'));

// 15. padEnd()
console.log(message.padEnd(35, '*'));

// practical example
const maskCreditCard = function(number) {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
}

console.log(maskCreditCard(45363738889263553));
console.log(maskCreditCard('2435478465485959'));

// 16. repeat()

const message2 = 'Bad weather... All Departures delayed... ';
console.log(message2.repeat(5));
