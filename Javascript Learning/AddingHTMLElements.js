const todoList = document.querySelector(".todo-list");

todoList.innerHTML += "<li> New Todo </li>"

// But we should not use this to add new elements as it renders the whole html again and again