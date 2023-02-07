let navItems = document.getElementsByTagName("a") // will return HTML collection
console.log(navItems)

// we cannot use forEach method to iterate through html collection
// simple for loop
// for of loop
// forEach loop

// Array like objects means it will have indexing and length property

// for(let i=0 ; i< navItems.length; i++) {
//     console.log(navItems[i])

//     const navItem = navItems[i]
//     navItem.style.backgroundColor = "#fff"
//     navItem.style.color = "green"
// }

// for(let navItem of navItems) {
//     navItem.style.backgroundColor = "#fff"
//     navItem.style.color = "green"
// }

// To change html collection to array do:

navItems = Array.from(navItems);

navItems.forEach((navItem) => {
    navItem.style.backgroundColor = "#fff"
    navItem.style.color = "green"
})