function myApp() {
    const myVar = "value1";
    function myFunc() {
        console.log("inside myfunc", myVar);
    }
    
    console.log(myVar);
    myFunc();
}

myApp();

// lexical scope means if wo variable us func me nahi mila to js will check uske lexical environment me wo variable i.e, myApp func agar waha bhi nahi mila to it will check lexical environment of myApp i.e, puri file
