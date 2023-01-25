// In js function function to hai but object bhi hai

function hello() {
    console.log("hello world")
}

console.log(hello.name);

// we can add our own properties to a function
hello.myOwnProperty = "very unique value";

console.log(hello.myOwnProperty);

// name property tell function's name
// function provides more useful properties

// when we create a function it gives us an empty space which means an empty object
// and that is known as prototype ({})

console.log(hello.prototype);

// It is given to add more properties for a function

// only functions provides prototype property

hello.prototype.abc = "abc";

console.log(hello.prototype);