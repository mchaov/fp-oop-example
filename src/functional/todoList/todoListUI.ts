import { TodoItem } from "./todoList.js";

export function renderTodoItemToHTML({ text, completed }: TodoItem) {
    return `<p>${text} is done: ${completed}</p>`;
}