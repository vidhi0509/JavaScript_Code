function CreateUser(firstName, lastName, email, age) {
    this.firstName = firstName;
    this.lastName - lastName;
    this.email = email;
    this.age = age;
    return this;
}

CreateUser.prototype.about = function() {
    return `${this.firstName} is ${this.age} years old.`;
}

CreateUser.prototype.is18 = function(){
    return this.age >= 18;
}

CreateUser.prototype.sing = function() {
    console.log("la la la")
}

const user = new CreateUser('vidhi', 'khandelwal', 'vidhi@gmail.com', 8);
const user2 = new CreateUser('pooja', 'khandelwal', 'pooja@gmail.com', 10);


console.log(user.about());
console.log(user2.about());
console.log(user2.sing());

// when we want to print property of only object not from its prototype

for(let key in user) {
    if(user.hasOwnProperty(key)){
        console.log(key)
    }
}