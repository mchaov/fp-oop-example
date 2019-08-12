import { TodoItem } from "./todoList.js";

function renderTodoItemInternals({ text, completed }: TodoItem) {
    return `<span>${text}</span>`;
}

function renderCompleteCheckboxUI(item: TodoItem, index: number) {
    return `<input class="complete-item" type="checkbox" value="${index}" ${item.completed ? "checked" : ""} />`;
}

function renderRemoveButton(item: TodoItem, index: number) {
    return `<button class="remove-item" value="${index}">remove</button>`;
}

const ui = [
    renderTodoItemInternals,
    renderCompleteCheckboxUI,
    renderRemoveButton
];

export function renderTodoItem(item: TodoItem, index: number) {
    return `<div>${ui.map(x => x(item, index)).join("")}</div>`;
}

