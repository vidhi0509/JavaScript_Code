function about(hobby, favMusician){
    console.log(this.name, this.age, hobby, favMusician)
}


const user1 ={
    name: "vidhi",
    age: 8 
}

const user2 ={
    name: "pooja",
    age: 18
}
about.call(user2, "guitar", "mozart");

// apply works same as call bas jo extra arguments we are passing we can pass them in an array

about.apply(user1, ["dancing", "kk"]);

// bind returns a function and in future we can call this function

const func = about.bind(user2, "guitar", "bach");
func();

// arrow function this apne surrounding se leta hai

const user3 = {
    name: "pooja",
    age: 18,
    about: () => {
        console.log(this.name, this.age)
    }
}

user3.about(); // iska this window hoga

