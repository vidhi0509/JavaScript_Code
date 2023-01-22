const myobj = {
    name: 'vidhi',
    age: 24,
    "person hobbies": ["guitar", "sleeping", "listening music"]
};
console.log(myobj);

//accessing data from object dot notation

myobj.age;

//adding new key value pair to an object

myobj.gender = "female";

console.log(myobj);

// accessing data from object using bracket notation

myobj["name"]

//difference between dot and bracket notation

//when you want to access person hobbies we can only use bracket notation

console.log(myobj["person hobbies"])

const key = "email";

myobj[key] = "vidhi@gamil.com"
console.log(myobj);