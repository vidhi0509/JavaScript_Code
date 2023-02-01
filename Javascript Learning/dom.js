// select element using get element by id

const mainHeading = document.getElementById("main-heading"); 
console.log(mainHeading)// will return an object
console.dir(document.getElementById("main-heading"));

// select element using query selector

const mainHeading1 = document.querySelector("#main-heading")

const items = document.querySelectorAll(".nav-items") // will select all the classes 

// change text using textContent and innerText

mainHeading.textContent = "This is something else";

console.log(mainHeading.textContent)

