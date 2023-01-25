const obj1 = {
    key1: "value1",
    key2: "value2"
};

const obj2 = {
    key3: "value3"
}

console.log(obj1.key1);
console.log(obj1.key2);
console.log(obj2.key3);

console.log(obj2.key1) // we want to do this that js first check obj2 ke pass key1 hai kya if nahi ho to check obj1 

const obj3 = Object.create(obj1); // this is one more way to create an empty object

console.log(obj3); // {}

obj3.key4 = "value4";

console.log(obj3); // { key4: 'value4' }

console.log(obj3.key1)
// now js first check that obj3 ke pass key1 hai kya nahi hai then it will go to create ke brackets
// me jo object hai i.e, obj1 and check for key1 agar hai to it will print that

// This is because of __proto__ / [[prototype]]

console.log(obj3.__proto__) // its proto is obj1