import {
    makeTodoItem,
    addItemToList,
    removeItemByIndex,
    todoSetComplete
} from "./todoList";

import { renderTodoItemToHTML } from "./todoListUI";

describe("TodoList UI suite", () => {
    it("", () => {
        let todoItem = { text: "test", completed: false };
        expect(renderTodoItemToHTML(todoItem)).toBe(
            `<span>${todoItem.text} is done: ${todoItem.completed}</span>`
        )
    })
});
describe("TodoList functional suite", () => {
    it("makeTodoItem -> returns todo items if called with string", () => {
        let completeItem = { text: "test", completed: true };
        let incompleteItem = { text: "test", completed: false };

        expect(
            makeTodoItem(false, "test")
        ).toEqual(incompleteItem);

        expect(
            makeTodoItem(true, "test")
        ).toEqual(completeItem);
    });

    it("addItemToList -> adds item to the end of the list", () => {

        expect(
            addItemToList({ text: "test", completed: false }, [])
        )
            .toEqual(
                [{ text: "test", completed: false }]
            );
    });

    it("addItemToList -> item is appended to the end of the list", () => {
        const list = [{ text: "item1", completed: false }];

        expect(
            addItemToList({ text: "item2", completed: false }, list)
        )
            .toEqual(
                [{ text: "item1", completed: false }, { text: "item2", completed: false }]
            );
    });

    it("addItemToList -> doesn't modify the original list", () => {
        const list = [{ text: "item1", completed: false }];

        addItemToList({ text: "item2", completed: false }, list);

        expect(list)
            .toEqual(
                [{ text: "item1", completed: false }]
            );
    });

    it("removeItemByIndex -> item is removed from the list", () => {
        const list = [{ text: "item1", completed: false }, { text: "item2", completed: false }];

        expect(
            removeItemByIndex(0, list)
        )
            .toEqual(
                [{ text: "item2", completed: false }]
            );
    });

    it("removeItemByIndex -> doesn't modify the original list", () => {
        const list = [{ text: "item1", completed: false }];

        removeItemByIndex(0, list);

        expect(list)
            .toEqual(
                [{ text: "item1", completed: false }]
            );
    });

    it("todoSetComplete -> marks todo item as done", () => {
        const list = [{ text: "item1", completed: false }];

        expect(
            todoSetComplete(true, 0, list)
        )
            .toEqual(
                [{ text: "item1", completed: true }]
            );

        expect(list).toEqual([{ text: "item1", completed: false }])
    });

});