const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

function load(records) {
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
    return context.habit;
}

test("a child can read saved progress before the parent loads activity history", () => {
    const records = new Map([["habit0.activities", [{ progressVal: 0.25 }, { progressVal: 0.5 }]]]);
    const habit = load(records);
    assert.equal(habit.getProgress(), 0.75);
    assert.equal(records.get("habit0.activities").length, 2);
});

test("progress reflects canonical activity changes rather than stale view state", () => {
    const records = new Map([["habit0.activities", [{ progressVal: 0.25 }]]]);
    const habit = load(records);
    habit.getActivities();
    records.set("habit0.activities", [{ progressVal: 0.5 }]);
    assert.equal(habit.getProgress(), 0.5);
});

test("a new user with no saved activities starts at zero", () => {
    assert.equal(load(new Map()).getProgress(), 0);
});
