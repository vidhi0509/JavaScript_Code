function myfunc() {
    console.log("inside myfunc");
}

function myFunc(callback) {
    console.log("hello world")
    callback();
}

myFunc(myfunc);

// function as an input is a callback function