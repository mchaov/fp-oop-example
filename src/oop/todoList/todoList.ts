import { ITodoItem } from "../../contracts/index.js";

export class TodoItem implements ITodoItem {
    text: string
    completed: boolean

    constructor(text: string, completed: boolean) {
        this.text = text;
        this.completed = completed;
    }

    setCompleted(done: boolean) {
        this.completed = done;
    }
}

export class TodoList {
    state: TodoItem[]

    constructor(items?: string[]) {
        if (items) {
            this.state = new Array(items.length);
            for (let i = 0; i < items.length; i++) {
                this.state[i] = this.makeItem(items[i], false);
            }
        } else {
            this.state = [];
        }
    }

    private makeItem(text: string, completed: boolean) {
        return new TodoItem(text, completed);
    }

    removeItemAtIndex(index: number) {
        let newState: TodoItem[] = [];
        for (let i = 0; i < this.state.length; i++) {
            if (i !== index)
                newState.push(this.state[i]);
        }
        this.state = newState;
    }

    addItem(text: string) {
        this.state.push(
            this.makeItem(text, false)
        );
    }

    updateItem(index: number, completed: boolean) {
        let item = this.state[index];
        if (item) {
            item.setCompleted(completed);
        }
    }
}