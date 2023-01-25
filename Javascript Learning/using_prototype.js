// now to create empty object we will use Object.create

// writing the method outside the object

// const userMethods = {
//     about: function() {
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18: function(){
//         return this.age >= 18;
//     },
//     sing: function() {
//         console.log("la la la")
//     }
// }
function createUser(firstName, lastName, email, age) {
    const user1 = Object.create(createUser.prototype)
    user1.firstName = firstName;
    user1.lastName - lastName;
    user1.email = email;
    user1.age = age;
    return user1;
}

createUser.prototype.about = function() {
            return `${this.firstName} is ${this.age} years old.`;
}

createUser.prototype.is18 = function(){
            return this.age >= 18;
}

createUser.prototype.sing = function() {
            console.log("la la la")
}

const user = createUser('vidhi', 'khandelwal', 'vidhi@gmail.com', 8);
const user2 = createUser('pooja', 'khandelwal', 'pooja@gmail.com', 10);


console.log(user.about());
console.log(user2.about());
console.log(user2.sing());