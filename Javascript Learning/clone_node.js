// const ul = document.querySelector(".todo-list")
// const li = document.createElement("li")
// li.textContent = "new todo"
// ul.append(li)
// ul.prepend(li)

// same node dono append and prepend nahi ho sakta hai that's why we clone that node

const ul = document.querySelector(".todo-list")
const li = document.createElement("li")
li.textContent = "new todo"
const li2 = li.cloneNode(true)
ul.append(li)
ul.prepend(li2)