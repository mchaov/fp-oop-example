import { renderUI } from "./helpers/index.js";
import { addTodoItemToList, renderList, removeTodoItemByIndex, setTodoItemCompleteProperty, initState } from "./functional/index.js";

import { TodoListUI, TodoList } from "./oop/index.js";

import { TodoList as TodoListHybrid } from "./hybrid/index.js";

const mainUI = `
<input value="" id="add-new-item-value" />
<button class="add-new-item">Add item</button>
<hr/>
<table>
    <tr>
        <th>Functional</th>
        <!--<th>OOP</th>
         <th>Hybrid</th> -->
    </tr>
    <tr>
        <td><div class="wrapper" id="functional"></div></td>
        <!--<td><div class="wrapper" id="oop"></div></td>
         <td><div class="wrapper" id="hybrid"></div></td> -->
    </tr>
</table>
`;

const initialState = ["item1", "item2", "item3"];

// mocked objects
var todoOOPUI: TodoListUI = {
    list: {
        addItem: () => { },
        removeItemAtIndex: () => { },
        updateItemCompletedState: () => { }
    },
    render: () => { }
} as any;

var todoHybrid: TodoListHybrid = {
    render: () => { },
    addItem: () => { },
    removeItemAtIndex: () => { },
    updateItemCompletedState: () => { }
} as any;

function renderLists() {
    todoOOPUI.render();
    todoHybrid.render();
    renderList();
}

function handleEvents(e) {
    let elem = e.target as any;
    if (elem) {
        if (elem.classList.contains("add-new-item")) {
            let toAdd = document.all["add-new-item-value"].value;

            addTodoItemToList(toAdd);
            todoOOPUI.list.addItem(toAdd);
            todoHybrid.addItem(toAdd);
        }

        if (elem.classList.contains("remove-item")) {
            let toRemove = parseInt(elem["value"]);

            removeTodoItemByIndex(toRemove);
            todoOOPUI.list.removeItemAtIndex(toRemove);
            todoHybrid.removeItemAtIndex(toRemove);
        }

        if (elem.classList.contains("complete-item")) {
            let itemAt = parseInt(elem.value);
            let checkched = elem.checked;

            setTodoItemCompleteProperty(itemAt, checkched);
            todoOOPUI.list.updateItemCompletedState(itemAt, checkched);
            todoHybrid.updateItemCompletedState(itemAt, checkched);
        }

        renderLists();
    }
}

function main() {
    renderUI("app", mainUI);

    let oopWrapper = document.getElementById("oop") as HTMLDivElement;
    if (oopWrapper) {
        todoOOPUI = new TodoListUI(
            new TodoList(initialState),
            oopWrapper
        );
    }

    let hybridWrapper = document.getElementById("hybrid") as HTMLDivElement;
    if (hybridWrapper) {
        todoHybrid = new TodoListHybrid(
            hybridWrapper,
            initialState
        );
    }

    initState(initialState);

    renderLists();

    document.addEventListener("click", handleEvents, true);
    document.addEventListener("change", handleEvents, true);
}

main();