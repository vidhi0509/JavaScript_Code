// new keyword

function createUser(firstName, age) {
    this.firstName = firstName;
    this.age = age;
}

createUser.prototype.about = function(){
    console.log(this.firstName, this.age)
}

const user1 = new createUser("harshit", 6);

// new keyword is used to create empty object and return that

console.log(user1);
user1.about()