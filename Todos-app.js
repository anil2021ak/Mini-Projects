let todoItemsContainerEle = document.getElementById("todoItemsContainer");

let todoList = [{
        text: 'Learn HTML',
        uniqueNo: 1
    },
    {
        text: 'Learn CSS',
        uniqueNo: 2
    },
    {
        text: 'Learn JavaScript',
        uniqueNo: 3
    }
];

let todoCount = todoList.length;

function onToDoStatusChanged(labelId) {
    let labelElement = document.getElementById(labelId);
    labelElement.classList.toggle('checked');
}

function onDeleteToDo(todoId) {
    let todoEle = document.getElementById(todoId);
    todoItemsContainerEle.removeChild(todoEle);
}

function createAndAppendTodo(todo) {
    let checkboxId = "checkbox" + todo.uniqueNo;
    let labelId = 'label' + todo.uniqueNo;
    let todoId = 'todo' + todo.uniqueNo;

    let todoItemContainer = document.createElement("li");
    todoItemContainer.classList.add("todo-item-container", "d-flex", "flex-row");
    todoItemContainer.id = todoId;
    todoItemsContainerEle.appendChild(todoItemContainer);

    let checkboxEle = document.createElement("input");
    checkboxEle.setAttribute("type", 'checkbox');
    checkboxEle.id = checkboxId;
    checkboxEle.classList.add('checkbox-input');

    checkboxEle.onclick = function() {
        onToDoStatusChanged(labelId);
    };

    todoItemContainer.appendChild(checkboxEle);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add('label-container', 'd-flex', 'flex-row');
    todoItemContainer.appendChild(labelContainer);

    let labelEle = document.createElement("label");
    labelEle.classList.add('checkbox-label');
    labelEle.setAttribute('for', checkboxId);
    labelEle.textContent = todo.text;
    labelEle.id = labelId;
    labelContainer.appendChild(labelEle);

    let deleteIconContainer = document.createElement('div');
    deleteIconContainer.classList.add('delete-icon-container');
    labelContainer.appendChild(deleteIconContainer);

    let iconEle = document.createElement('i');
    iconEle.classList.add('far', 'fa-trash-alt', 'delete-icon');

    iconEle.onclick = function() {
        onDeleteToDo(todoId);
    };

    deleteIconContainer.appendChild(iconEle);
}

for (let item of todoList) {
    createAndAppendTodo(item);
}

function onAddTodo() {
    let userInput = document.getElementById("todoUserInput");
    let userInputValue = userInput.value;
    if (userInputValue === "") {
        alert("Enter Valid Text");
        return;
    }
    todoCount = todoCount + 1;
    let newTodo = {
        text: userInputValue,
        uniqueNo: todoCount
    };

    createAndAppendTodo(newTodo);
    userInput.value = "";
}

let addTodoButtonEle = document.getElementById("addTodoButton");
addTodoButtonEle.onclick = function() {
    onAddTodo();
}

















console.log(todoItemsContainerEle)