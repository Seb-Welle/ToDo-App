const state = {
  todo: [
    { description: "Learn HTML", done: true },
    { description: "Learn CSS", done: false },
    { description: "Learn JavaScript", done: false },
  ],
};

/* Visualisierung des State Teil 1 */
function renderTodos() {
  const list = document.querySelector("#list");
  list.innerHTML = "";

  state.todo.forEach((todo) => {
    const todoLi = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;

    /* State des Benutzers über die Checkbox aktualisieren */
    checkbox.addEventListener("change", (e) => {
      /* todo-Parameter ist hier noch im Scope der Funktion */
      console.log(e.target.checked);
      const newTodoDoneState = e.target.checked;
      todo.done = newTodoDoneState;
    });

    /* Visualisierung des State Teil 2 */
    todoLi.appendChild(checkbox);

    const todoText = document.createTextNode(todo.description);
    todoLi.append(todoText);

    list.appendChild(todoLi);
  });
}

renderTodos();
