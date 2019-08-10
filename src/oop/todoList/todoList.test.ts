import { TodoList, TodoItem } from "./todoList";

describe("TodoList OOP suite", () => {
    it("TodoItem instanciates", () => {
        let inst = new TodoItem("test", false);
        expect(inst).toBeInstanceOf(TodoItem);
        expect(inst.text).toBe("test");
        expect(inst.completed).toBe(false);
    });

    it("TodoItem changes it's state", () => {
        let inst = new TodoItem("test", false);

        expect(inst.completed).toBe(false);

        inst.setCompleted(true);
        expect(inst.completed).toBe(true);

        inst.setCompleted(false);
        expect(inst.completed).toBe(false);
    });

    it("TodoList instanciates with empty list", () => {
        let inst = new TodoList();
        expect(inst).toBeInstanceOf(TodoList);
        expect(inst.state).toEqual([]);
    });

    it("TodoList adds todo item to the list", () => {
        let inst = new TodoList();
        inst.addItem("test");
        inst.addItem("test2");
        expect(inst.state).toEqual([
            { text: "test", completed: false },
            { text: "test2", completed: false }
        ]);
    });

    it("TodoList instanciates with items", () => {
        let inst = new TodoList(["test", "test2"]);
        expect(inst).toBeInstanceOf(TodoList);
        expect(inst.state).toEqual([
            { text: "test", completed: false },
            { text: "test2", completed: false }
        ]);
    });

    it("TodoList remove item from the list", () => {
        let inst = new TodoList(["test", "test2"]);
        inst.removeItemAtIndex(1);
        expect(inst.state).toEqual([
            { text: "test", completed: false },
        ]);
    });

    it("TodoList change state of an item", () => {
        let inst = new TodoList(["test", "test2"]);

        expect(inst.state).toEqual([
            { text: "test", completed: false },
            { text: "test2", completed: false }
        ]);

        inst.updateItem(1, true);

        expect(inst.state).toEqual([
            { text: "test", completed: false },
            { text: "test2", completed: true }
        ]);
    });

});