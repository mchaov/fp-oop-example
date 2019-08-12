import { TodoItem } from "./todoList.js";

export function renderTodoItemToHTML({ text, completed }: TodoItem) {
    return `<span>${text} is done: ${completed}</span>`;
}