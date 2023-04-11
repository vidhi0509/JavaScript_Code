const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27
};

// copying an object
const jessicaCopy = Object.assign({}, jessica); 
jessicaCopy.lastName = 'Davis'; // lastName gets changed only for copy object
console.log(jessica, jessicaCopy);