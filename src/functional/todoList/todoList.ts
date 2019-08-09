export type TodoItem = { text: string, completed: boolean };

const isAtIndex = (index, _, i) => i === index;
const isNotAtIndex = (index, _, i) => i !== index;
// const isTodoCompleted = (item: TodoItem) => item.completed;

export function makeTodoItem(todo: string, completed: boolean = false): TodoItem {
    return { text: todo, completed };
}

export function todoSetCompleted(isCompleted: boolean, index: number, list: TodoItem[]) {
    let item = list.find(isAtIndex.bind(undefined, index));
    return !item ?
        list :
        [
            ...list.filter(isNotAtIndex.bind(undefined, index)),
            makeTodoItem(item.text, isCompleted)
        ];
}

export function addItemToList(item: TodoItem, list: TodoItem[]) {
    return [...list, item];
}

export function removeItemByIndex(index: number, list: TodoItem[]) {
    return list.filter(isNotAtIndex.bind(undefined, index));
}