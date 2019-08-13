import { ITodoItem } from "../../contracts/index.js";

export class TodoItem implements ITodoItem {
    text: string
    completed: boolean

    constructor(text: string, completed: boolean) {
        this.text = text;
        this.completed = completed;
    }

    setComplete(done: boolean) {
        this.completed = done;
    }
}

export class TodoList {
    state: TodoItem[] = [];

    constructor(items?: string[]) {
        if (items) {
            this.state = new Array(items.length);
            for (let i = 0; i < items.length; i++) {
                this.state[i] = this.makeItem(items[i], false);
            }
        }
    }

    private makeItem(text: string, completed: boolean) {
        return new TodoItem(text, completed);
    }

    removeItemAtIndex(index: number) {
        let newState: TodoItem[] = [];
        for (let i = 0; i < this.state.length; i++)
            if (i !== index)
                newState.push(this.state[i]);

        this.state = newState;
    }

    addItem(text: string) {
        this.state.push(
            this.makeItem(text, false)
        );
    }

    updateItemCompletedState(index: number, completed: boolean) {
        this.state[index].setComplete(completed);
    }
}

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