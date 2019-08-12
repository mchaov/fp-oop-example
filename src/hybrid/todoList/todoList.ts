import {
    TodoItem,
    makeTodoItem,
    addItemToList,
    renderTodoItem,
    todoSetComplete,
    removeItemAtIndex
} from "../../functional/todoList/index.js";

const makeIncompleteTodoItem = makeTodoItem.bind(undefined, false);

export class TodoList {
    private state: TodoItem[] = [];
    private wrapper: HTMLDivElement

    constructor(wrapper: HTMLDivElement, items?: string[]) {
        this.wrapper = wrapper;

        if (items)
            this.state = items.map(makeIncompleteTodoItem)
    }

    removeItemAtIndex(index: number) {
        this.state = removeItemAtIndex(index, this.state);
    }

    addItem(text: string) {
        this.state = addItemToList(
            makeIncompleteTodoItem(text),
            this.state
        );
    }

    updateItemCompletedState(index: number, completed: boolean) {
        this.state = todoSetComplete(completed, index, this.state)
    }

    render() {
        this.wrapper.innerHTML = this.state.map(renderTodoItem).join("");
    }
}