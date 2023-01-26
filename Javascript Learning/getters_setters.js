class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(fullName) {
        const [firstName, lastName] = fullName.split(" ")
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new Person("vidhi", "khandelwal", 24);
console.log(person1.fullName);

// to call getter and setter we don't need to add () after its name

person1.fullName = "pooja sharma"

console.log(person1.firstName);
console.log(person1.lastName)