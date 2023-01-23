// const user = {
//     firstName: "vidhi",
//     lastName: "khandelwal",
//     email: "vidhi@gmail.com",
//     age: 24,
//     about: function() {
//         return `${this.firstName}is ${this.age} years old.`;
//     },

//     is18: function(){
//         return this.age >= 18;
//     }
// }

function createUser(firstName, lastName, email, age) {
    const user1 = {};
    user1.firstName = firstName;
    user1.lastName - lastName;
    user1.email = email;
    user1.age = age;
    user1.about = function() {
        return `${this.firstName}is ${this.age} years old.`;
    }

    user1.is18 = function(){
        return this.age >= 18;
    }

    return user1;
}

const user = createUser('vidhi', 'khandelwal', 'vidhi@gmail.com', 8);

console.log(user);

const is18 = user.is18();
console.log(is18)