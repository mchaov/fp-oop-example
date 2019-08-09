import { renderTodoItem, makeTodoItem, TodoItem, addItemToList } from "./functional/index.js";

var state: TodoItem[] = ["item1", "item2", "item3"].map(x => makeTodoItem(x));

const mainUI = `
<input value="" id="newItem" />
<button id="addNewItem">Add item</button>
<hr/>
<div id="functional"></div>
<div id="oop"></div>
`

function renderUI(domID, content) {
    let ui = document.getElementById(domID);
    if (ui) ui.innerHTML = content;
}

function addItem() {
    let input: HTMLInputElement | null = document.getElementById("newItem") as any;
    if (input) state = addItemToList(
        makeTodoItem(input.value),
        state
    )
}

function renderFPList() {
    renderUI("functional", state.map(renderTodoItem).join("\n"));
}

function main() {
    renderUI("app", mainUI);
    renderFPList();

    document.addEventListener("click", function (e) {
        let elem: HTMLElement = e.target as any;

        if (elem && elem.id === "addNewItem") {
            addItem();
            renderFPList();
        }

    }, false)
}

main();