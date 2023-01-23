// functions inside object

const person = {
    name: 'pooja',
    age: 8,
    about: function() {
        console.log(`person name is ${this.name} and age is ${this.age}`)
    }
}

person.about();

// this is an object jo object is function ko call kar raha hai