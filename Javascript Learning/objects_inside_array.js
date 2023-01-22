const users = [
    {userId: 1, firstName: "vidhi", gender: "female"}, 
    {userId: 2, firstName: "sayli", gender: "female"},
    {userId: 3, firstName: "riya", gender: "female"}
]


for(let user of users) {
    console.log(user.userId);
}

//nested destructuring

const [user1, user2, user3] = users;

console.log(user1)

//suppose we need only firstName or gender from an object

const [{firstName}, , {gender}] = users;
console.log(firstName);
console.log(gender);