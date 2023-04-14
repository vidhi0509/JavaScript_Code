const rest1 = {
    name: 'Capri',
    numGuests: 20
};

const rest2 = {
    name: 'La Piazza',
    owner: 'Rossi'
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10; // setting default value to numGuests for rest2

// OR assignment operator (works same as above)
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

// nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';
console.log(rest1, rest2);