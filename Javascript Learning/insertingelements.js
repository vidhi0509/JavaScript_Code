// we can also use insertAdjacentHTML(where, html)
// beforebegin
// afterbegin
// beforeend
// afterend

// work same as append wala thing

const todoList = document.querySelector(".todo-list")
todoList.insertAdjacentHTML("beforeend", "<li>Todo 2</li>")