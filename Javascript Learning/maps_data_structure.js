// map is an iterable
// store data in ordered fashion and store key value pair like object
// duplicate keys are not allowed like objects
// difference between maps and objects
// objects can only have string or symbol as a key
// while in maps you can use anything as a key like array, string, number

const person = new Map();

person.set('firstName', 'Vidhi');
person.set('age', '24');
person.set(1, 'one');
console.log(person);
console.log(person.get('age'));
console.log(person.keys());

for(let key of person) {
    console.log(key);
}

// suppose we have an object and we want to add some more values to it using map

const person1 = {
    id: 1,
    firstName: 'pooja'
}

const extraInfo = new Map();
extraInfo.set(person1, {age: 8, gender: 'female'});
console.log(person1.id)
console.log(extraInfo.get(person1).age)