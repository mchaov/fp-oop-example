import { makeTodoItem, addItemToList, removeItemByIndex, todoSetCompleted } from "./todoList";

makeTodoItem;

describe("TodoList functiona suite", () => {
    it("makeTodoItem -> returns todo items if called with string", () => {

        expect(
            makeTodoItem("test")
        )
            .toEqual(
                { text: "test", completed: false }
            );

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

    it("todoSetCompleted -> marks todo item as done", () => {
        const list = [{ text: "item1", completed: false }];

        expect(
            todoSetCompleted(true, 0, list)
        )
            .toEqual(
                [{ text: "item1", completed: true }]
            );

        expect(list).toEqual([{ text: "item1", completed: false }])
    });

});