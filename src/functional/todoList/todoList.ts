import { ITodoItem } from "../../contracts/index.js";
export type TodoItem = ITodoItem;

const isAtIndex = (index, _, i) => i === index;
const isNotAtIndex = (index, _, i) => i !== index;

export function makeTodoItem(completed: boolean, todo: string): TodoItem {
    return { text: todo, completed };
}

export const makeCompletedTodoItem = makeTodoItem.bind(undefined, true);
export const makeInCompletedTodoItem = makeTodoItem.bind(undefined, false);

export function todoSetCompleted(isCompleted: boolean, index: number, list: TodoItem[]) {
    let item = list.find(isAtIndex.bind(undefined, index));
    return !item ?
        list : [
            ...list.filter(isNotAtIndex.bind(undefined, index)),
            makeTodoItem(isCompleted, item.text)
        ];
}

export function addItemToList(item: TodoItem, list: TodoItem[]) {
    return [...list, item];
}

export function removeItemByIndex(index: number, list: TodoItem[]) {
    return list.filter(isNotAtIndex.bind(undefined, index));
}