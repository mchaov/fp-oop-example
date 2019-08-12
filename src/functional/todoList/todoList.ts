import { ITodoItem } from "../../contracts/index.js";
export type TodoItem = ITodoItem;

const isNotAtIndex = (index, _, i) => i !== index;

export function makeTodoItem(completed: boolean, todo: string): TodoItem {
    return { text: todo, completed };
}

export function todoSetComplete(isCompleted: boolean, index: number, list: TodoItem[]) {
    return [
        ...list.filter(isNotAtIndex.bind(undefined, index)),
        makeTodoItem(isCompleted, list[index].text)
    ];
}

export function addItemToList(item: TodoItem, list: TodoItem[]) {
    return [...list, item];
}

export function removeItemByIndex(index: number, list: TodoItem[]) {
    return list.filter(isNotAtIndex.bind(undefined, index));
}