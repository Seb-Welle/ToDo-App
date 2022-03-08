const ul = document.querySelector("#list");
const addButton = document.querySelector("#add");
addButton.addEventListener("click", addItem);
let li = [];

function addItem() {
  const input = document.querySelector("#input");
  const item = input.value;
  const textNode = document.createTextNode(item);
  if (item === "" || item === " ") {
    message = "Keine Beschreibung eingegeben";
    alert(message);
    return false;
  } else {
    li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute("id", "check");

    const label = document.createElement("label");
    ul.appendChild(label);
    li.appendChild(checkbox);
    label.appendChild(textNode);
    li.appendChild(label);
    ul.insertBefore(li, ul.childNodes[0]);
    input.value = "";
  }
}

list.addEventListener("change", function (e) {
  const checkbox = e.target;
  const liElement = checkbox.parentElement;
  if (checkbox.checked) {
    liElement.style.textDecoration = "line-through";
  } else {
    liElement.style.textDecoration = "";
  }
});

const removeButton = document.querySelector("#remove");
removeButton.addEventListener("click", removeItem);

function removeItem() {
  li = ul.children;
  for (let index = 0; index < li.length; index++) {
    const element = li[index];
    while (li[index] && li[index].children[0].checked) {
      ul.removeChild(li[index]);
    }
  }
}
