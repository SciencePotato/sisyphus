import { createContext, useContext, Context } from "react";

const store = window.electron.store;

const userHabitContext = createContext({
    date: new Date(),
    description: "",
    title: "",
    id: 0,
    activities: [],

    getHabitData: function (id) {
        const currentHabit = store.get(`habit${id}`);

        this.date = currentHabit.date;
        this.description = currentHabit.description;
        this.title = currentHabit.title;
        this.id = id;
        this.activities = currentHabit.activities;

        return this;
    },

    getProgress: function() {
        let total = 0;

        for(let i = 0; i < this.activities.length; i++) {
            total += this.activities[i].progressVal;
        }

        return total;
    },

    getActivities: function (id = 0) {
        this.activities = [...store.get(`habit${id}.activities`)];
        return this.activities;
    },

    setHabitData: function(id = 0, title = "(empty)", description = "(empty)") {
        this.id = id;
        this.date = new Date();
        this.description = description;
        this.title = title;
        this.activities = [];

        store.set(`habit${id}.title`, this.title);
        store.set(`habit${id}.description`, this.description);
        store.set(`habit${id}.id`, this.id);
        store.set(`habit${id}.activities`, this.activities);
    },

    addActivity: function (description = "(empty)", title = "(empty)") {
        const activity = {
            description: description,
            date: new Date(),
            progressVal: Math.random()
        }

        this.activities = [...this.activities, activity];
        store.set(`habit${this.id}.activities`, this.activities);
    },

    isFirstTimeUser: function () {
        if(!store.get("existingUser")) {
            console.log("User is a first time user");
            //store.set("existingUser", true);
            return false;
        }
        else {
            return true;
        }
    },

    setExistingUserStatus: function (status) {
        store.set("existingUser", status);
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