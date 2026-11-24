const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

test("reading newest-first history does not reverse the next persisted append", () => {
    const records = new Map([["habit0.activities", [
        { description: "first", progressVal: 0.1 },
        { description: "second", progressVal: 0.2 }
    ]]]);
    const source = fs.readFileSync(path.join(__dirname, "../src/components/storage/HabitContext.js"), "utf8")
        .replace(/^import .*;\s*/m, "").split("const useHabit")[0];
    const context = vm.createContext({
        createContext: value => value,
        window: { electron: { store: {
            get: key => structuredClone(records.get(key)),
            set: (key, value) => records.set(key, structuredClone(value))
        } } }
    });
    vm.runInContext(source + "\nglobalThis.habit = userHabitContext;", context);
    const habit = context.habit;
    assert.deepEqual(Array.from(habit.getActivities(), x => x.description), ["second", "first"]);
    habit.addActivity("third");
    assert.deepEqual(records.get("habit0.activities").map(x => x.description), ["first", "second", "third"]);
    assert.deepEqual(Array.from(habit.getActivities(), x => x.description), ["third", "second", "first"]);
    assert.deepEqual(Array.from(habit.getActivities(), x => x.description), ["third", "second", "first"]);
});
