// function declaration

function findTarget(array, target) {
    for (let i =0; i<array.length; i++) {
        if(array[i] === target) {
            return i;
        }
    }

    return -1;
}

console.log(findTarget([1,2,3,4], 3));

// function expressions

const singhappy = function() {
    console.log("happy birthday to you....");
}

singhappy();