import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import { useHabit } from "./components/storage/HabitContext";

function App() {
  const habitContext = useHabit();

  const [habitData, setHabitData] = useState();

  useEffect(() => {
    console.log("Set contents of store")
    habitContext.setHabitData(0);
    habitContext.addActivity();
    habitContext.addActivity();
    habitContext.addActivity();
    habitContext.addActivity();
    habitContext.addActivity();
    habitContext.addActivity();

    const data = habitContext.getHabitData(0);
    console.log("Fetched contents of store");
    console.log(data);
    console.log(habitContext.getProgress());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
