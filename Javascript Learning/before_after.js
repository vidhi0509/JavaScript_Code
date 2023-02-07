
// before after
// used to add things before and after ul tag

const newTodoItem = document.createElement("li")
newTodoItem.textContent = "teach students"
const todoList1 = document.querySelector(".todo-list");

todoList1.before(newTodoItem)