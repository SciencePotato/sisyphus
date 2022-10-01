import './App.css';
import {useEffect, useState} from "react";
import { useHabit } from "./components/storage/HabitContext";
import Loader from './page/loader/Loader.js';
import Welcome from './page/welcome/Welcome.js';
import TopDisplay from './components/topDisplay/TopDisplay.js'
import Journey from './components/journey';
import Stats from './page/stats/Stats';
import {HashRouter,Link,Route,Routes} from "react-router-dom";
import Homepage from './page/homepage/homepage';
import { useEffect, useState } from 'react';

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
    <HashRouter>
      <div className="App">

        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/stats" element={<Stats />} />
        </Routes> 

      </div>
      
    </HashRouter>
  );
}

export default App;
