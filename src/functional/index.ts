// Bridge with the outside world.

import {
    TodoItem,
    makeTodoItem,
    addItemToList,
    renderTodoItem,
    todoSetComplete,
    removeItemAtIndex
} from "./todoList/index.js";

import { renderUI } from "../helpers/index.js";

const makeIncompleteTodoItem = makeTodoItem.bind(undefined, false);
export function renderList() {
    renderUI(
        "functional",
        state
            .map(renderTodoItem)
            .join("\n")
    );
}

// stateful code
var state: TodoItem[] = [];

export function initState(initialState: string[]) {
    state = initialState.map(makeIncompleteTodoItem);
}

export function addTodoItemToList(value: string) {
    state = addItemToList(makeIncompleteTodoItem(value), state)
}

export function removeTodoItemByIndex(index: number) {
    state = removeItemAtIndex(index, state);
}

export function setTodoItemCompleteProperty(index: number, complete: boolean) {
    state = todoSetComplete(complete, index, state);
}