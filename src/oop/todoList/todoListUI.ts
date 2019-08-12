import { TodoList, TodoItem } from "./todoList.js";

export class TodoListUI {
    private wrapper: HTMLDivElement
    list: TodoList

    constructor(list: TodoList, wrapper: HTMLDivElement) {
        this.list = list;
        this.wrapper = wrapper;
    }

    render() {
        this.wrapper.innerHTML = this.renderTodos();
    }

    private renderTodos() {
        let todos = this.list.state;
        let output = "";
        for (let i = 0; i < todos.length; i++) {
            output += this.renderTodoItem(todos[i], i);
        }
        return output;
    }

    private renderTodoItem(todo: TodoItem, index: number) {
        return `<div>
                    <span>${todo.text}</span>
                    <input class="complete-item" type="checkbox" value="${index}" ${todo.completed ? "checked" : ""}>
                    <button class="remove-item" value="${index}">remove</button>
                </div>`;
    }
}

