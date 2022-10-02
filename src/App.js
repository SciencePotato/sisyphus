import './App.css';
import { useHabit } from "./components/storage/HabitContext";
import Loader from './page/loader/Loader.js';
import Welcome from './page/welcome/Welcome.js';
import TopDisplay from './components/topDisplay/TopDisplay.js'
import Journey from './components/journey';
import Stats from './page/stats/Stats';
import {HashRouter, Link, Route, Routes} from "react-router-dom";
import Homepage from './page/homepage/homepage';
import { useState, useEffect } from 'react';

function App() {

  const habitContext = useHabit();

  useEffect(() => {
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
