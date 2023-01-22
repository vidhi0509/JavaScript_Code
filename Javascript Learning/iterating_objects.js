// iterating over objects

// 1. for in loop and Object.keys

const myobj = {
    name: 'vidhi',
    age: 24,
    "person hobbies": ["guitar", "sleeping", "listening music"]
};

for(let key in myobj) {
    console.log(key); // this will be printing only keys
}

for(let key in myobj) {
    console.log(myobj[key]); // this will be printing both key value
}

Object.keys(myobj); // it will give an array of keys

// to iterate through it 

for(let key of Object.keys(myobj)) {
    console.log(myobj[key]);
}