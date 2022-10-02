import { createContext, useContext } from "react";

const store = window.electron.store;

const userHabitContext = createContext({
    date: new Date(),
    description: "",
    title: "",
    id: 0,
    activities: [],
    deltaHeight: 0,

    getProgress: function() {
        let total = 0;

        for(let i = 0; i < this.activities.length; i++) {
            total += this.activities[i].progressVal;
        }

        return total;
    },

    getActivities: function (id = 0) {
        this.activities = [...store.get(`habit${id}.activities`)];
        return this.activities.reverse();
    },

    getDeltaHeight: function () {
        this.deltaHeight = store.get(`habit${this.id}.deltaHeight`)
        return this.deltaHeight;
    },

    setHabitData: function(id = 0, title = "(empty)", description = "(empty)") {
        this.id = id;
        this.date = new Date().toDateString();
        this.description = description;
        this.title = title;
        this.activities = [];

        store.set(`habit${id}.title`, this.title);
        store.set(`habit${id}.description`, this.description);
        store.set(`habit${id}.id`, this.id);
        store.set(`habit${id}.activities`, this.activities);
        store.set(`habit${id}.deltaHeight`, this.deltaHeight);

        return this;
    },

    addActivity: function (description = "(empty)") {
        const activity = {
            description: description,
            date: new Date().toDateString(),
            progressVal: Math.random()
        }

        this.activities = [...this.activities, activity];
        store.set(`habit${this.id}.activities`, this.activities);
        store.set(`habit${this.id}.deltaHeight`, activity.progressVal);
        this.deltaHeight = activity.progressVal;

        return activity;
    },

    isFirstTimeUser: function () {
        return store.get("existingUser");
    },

    setExistingUserStatus: function (status) {
        store.set("existingUser", status);
        store.set("userCreationDate", new Date());
    },

    getUserCreationDate: function () {
        return store.get("userCreationDate");
    }
})

const useHabit = () => useContext(userHabitContext);

function HabitContextProvider({ children }) {
    const habit = useHabit();
    return <userHabitContext.Provider value={habit}>
        { children }
    </userHabitContext.Provider>
}

export { useHabit, HabitContextProvider };