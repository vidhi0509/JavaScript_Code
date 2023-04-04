const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    age: 46,
    job: 'teacher',
    friends: ['Bob', 'Jay', 'Peter'],
    calcAge: function() {
        console.log(this) // will give `jonas` object
        return 2037 - this.birthYear
    }
}

console.log(jonas.calcAge())
console.log(jonas['calcAge']())

// for loops with an array

const john = [
    'john',
    'smith',
    46,
    'teacher',
    ['Michael', 'Peter', 'Steven']
]

const types = []

for(let i = 0; i < john.length; i++) {
    console.log(john[i], typeof john[i])

    // adding elements to types array

    types.push(typeof john[i])
}

console.log(types)