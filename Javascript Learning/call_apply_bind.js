function hello() {
    console.log("hello world")
}

hello.call();

const user1 ={
    name: "vidhi",
    age: 8,
    about: function(){
        console.log(this.name, this.age)
    }
}

const user2 ={
    name: "pooja",
    age: 18
}

// now we want to use about method for user2 without pasting it in its object

user1.about.call(user2);

// user1.about.call(); --> this will give undefined

// We can also do this by keeping this about function outside

