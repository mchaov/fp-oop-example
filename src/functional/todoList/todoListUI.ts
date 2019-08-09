import { TodoItem } from "./todoList.js";

export function renderTodoItem(item: TodoItem) {
    return `<p>${item.text} is done: ${item.completed}</p>`;
}