const sectionTodo = document.querySelector(".todo-section")
console.log(sectionTodo.classList); // will give all the classes

// sectionTodo.classList.add('bg-dark') // will add this class

// sectionTodo.classList.remove("container") // will remove the existing class

const ans = sectionTodo.classList.contains("container")

console.log(ans); // true

// sectionTodo.classList.toggle("bg-dark") // if bg-dark class is not present then it will add that class and if it is present then it will remove it
