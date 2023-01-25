// writing the method outside the object

const userMethods = {
    about: function() {
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18: function(){
        return this.age >= 18;
    }
}
function createUser(firstName, lastName, email, age) {
    const user1 = {};
    user1.firstName = firstName;
    user1.lastName - lastName;
    user1.email = email;
    user1.age = age;
    user1.about = userMethods.about;
    user1.is18 = userMethods.is18;
    return user1;
}

const user = createUser('vidhi', 'khandelwal', 'vidhi@gmail.com', 8);
const user2 = createUser('pooja', 'khandelwal', 'pooja@gmail.com', 10);


console.log(user.about());
console.log(user2.about());

// again this is not the right way because if we want to 
// add new methods we will add in usermethods object and if we forget to add it in that function then it will create a problem