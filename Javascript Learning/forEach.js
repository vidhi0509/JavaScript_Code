const numbers = [1,2,3,4];

//foreach method it takes function as an input

// 1st method
function multiplyBy2(number, index) {
    console.log("index is", index);
    console.log(number*2);
}

numbers.forEach(multiplyBy2)

//2nd method -> here function is present as a callback

numbers.forEach(function(number, index){
    console.log(`index is ${index} and number is ${number}`);
})