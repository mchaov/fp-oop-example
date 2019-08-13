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
    return renderUI(
        "functional",
        state
            .map(renderTodoItem)
            .join("\n")
    );
}

// stateful code
var state: TodoItem[] = [];

export function initState(initialState: string[]) {
    return state = initialState.map(makeIncompleteTodoItem);
}

export function addTodoItemToList(value: string) {
    return state = addItemToList(makeIncompleteTodoItem(value), state)
}

export function removeTodoItemByIndex(index: number) {
    return state = removeItemAtIndex(index, state);
}

export function setTodoItemCompleteProperty(index: number, complete: boolean) {
    return state = todoSetComplete(complete, index, state);
}