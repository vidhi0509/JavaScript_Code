class CreateUser {
    constructor(firstName, lastName, email, age) {
        this.firstName = firstName;
        this.lastName - lastName;
        this.email = email;
        this.age = age;
    }

    about() {
        return `${this.firstName} is ${this.age} years old.`;
    }
    is18(){
        return this.age >= 18;
    }
    sing() {
        console.log("la la la");
    }
}

// Whenever we create object constructor gets called automatically

const user = new CreateUser('vidhi', 'khandelwal', 'vidhi@gmail.com', 8);
console.log(user.firstName)
console.log(user.about())


class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        return `${this.name} is eating`
    }

    isCute() {
        return this.age <=1
    }
}

const animal = new Animal("tom", 2);

console.log(animal.eat())

class Dog extends Animal {
    constructor(name, age, speed) {
        super(name, age)
        this.speed = speed
    }
}

const tommy = new Dog('tommy', 3, 45);
console.log(tommy);