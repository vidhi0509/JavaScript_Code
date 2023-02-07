const newTodoItem = document.createElement("li")
const newTodoItemText = document.createTextNode("Teach students")
const todoList = document.querySelector(".todo-list");
newTodoItem.append(newTodoItemText)
todoList.append(newTodoItem)
console.log(newTodoItem)

// shorter way
// append will add element at the last
const newTodoItem1 = document.createElement("li")
newTodoItem1.textContent = "teach students"
const todoList1 = document.querySelector(".todo-list");
todoList1.append(newTodoItem1)

// prepend will add element at the start