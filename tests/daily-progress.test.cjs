const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

test("yesterday's completion does not suppress today's entry form", () => {
    let today = "Tue Nov 24 2026";
    const records = new Map([
        ["loggedInToday", true],
        ["habit0.activities", [{ date: "Mon Nov 23 2026", progressVal: 0.3 }]]
    ]);
    const source = fs.readFileSync(path.join(__dirname, "../src/components/storage/HabitContext.js"), "utf8")
        .replace(/^import .*;\s*/m, "").split("const useHabit")[0];
    const context = vm.createContext({
        createContext: value => value,
        Date: class { toDateString() { return today; } },
        window: { electron: { store: {
            get: key => structuredClone(records.get(key)),
            set: (key, value) => records.set(key, structuredClone(value))
        } } }
    });
    vm.runInContext(source + "\nglobalThis.habit = userHabitContext;", context);
    const habit = context.habit;
    assert.equal(habit.userLoggedInToday(), false);
    habit.getActivities();
    habit.addActivity("today");
    habit.setUserLoggedInToday(true);
    assert.equal(habit.userLoggedInToday(), true);
    today = "Wed Nov 25 2026";
    assert.equal(habit.userLoggedInToday(), false);
    assert.equal(records.get("habit0.activities").length, 2);
    records.set("loggedInToday", false);
    today = "Tue Nov 24 2026";
    assert.equal(habit.userLoggedInToday(), false);
});
