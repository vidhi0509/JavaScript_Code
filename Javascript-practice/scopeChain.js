'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear;
    
    function printAge() {
        const output = `${firstName}, You are ${age}, born in ${birthYear}`;
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996) {
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }
        }

        // add(2,3); scope of add function is a block.

        // console.log(str); cannot be accessed here.
    }
    printAge();
    return age;
}

const firstName = 'Jon'; // it is present in the global scope.
calcAge(1992);

// console.log(age); cannot access age here.