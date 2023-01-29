// function can return functions

function myFunc() {
    function func() {
        console.log("hello")
    }
    return func;
}

const ans = myFunc();
console.log(ans) // will return full inner function

function outerFunc() {
    let counter = 0;
    return function() {
        if(counter < 1) {
            console.log("Hi you called me");
            counter++;
        }else {
            console.log("mai already ek bar call ho chuka hu")
        }
    }
}

const result = outerFunc();
result();
result();