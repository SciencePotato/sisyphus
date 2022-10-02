import Journey from "../../components/journey"
import TopDisplay from "../../components/topDisplay/TopDisplay"
import {useHabit} from "../../components/storage/HabitContext";
import {useEffect, useState} from "react";
import Welcome from "../welcome/Welcome";
import Loader from "../loader/Loader";
import {HashRouter, Link, Route, Routes} from "react-router-dom";

const Homepage = () => {
  const habitContext = useHabit();
  const [isLoaded, setIsLoad] = useState(false);
  const [isExisting, setIsExisting] = useState(false);

  useEffect(() => {
    setIsExisting(habitContext.isFirstTimeUser());
    setIsExisting(false);
  }, [])

  useEffect(() => {
    if(isLoaded === true) {
      document.getElementById("loader").classList.add("move-Out");
    }
  }, [isLoaded])

  return(
    <div>
        <Loader/>
        {isExisting ?
            <>
                <TopDisplay />
                <Journey />
            </>
            :
            <Welcome/>
        }
    </div>
  )
}

export default Homepage