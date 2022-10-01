import { createContext, useContext, Context } from "react";

const userHabitContext = createContext({
    date: new Date(),
    description: "",
    title: "",
    id: 0,
    activities: [],
    getHabitData: async () => {},
    updateHabitData: async () => {},
    updateHabitActivities: async () => {},
})

const useHabit = () => useContext(userHabitContext);

function HabitContextProvider({ children }) {
    const habit = useHabit();
    return <userHabitContext.Provider value={habit}>
        { children }
    </userHabitContext.Provider>
}

export { useHabit, HabitContextProvider };