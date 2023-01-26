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

    static classInfo() {
        return 'this is person class';
    }

    static desc = "static property"
}

// we cannot call static methods using objects we can call them directly using class

console.log(Person.classInfo());
console.log(Person.desc);