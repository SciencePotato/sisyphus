import Journey from "../../components/journey"
import TopDisplay from "../../components/topDisplay/TopDisplay"
import {useHabit} from "../../components/storage/HabitContext";
import {useEffect, useState} from "react";
import Welcome from "../welcome/Welcome";

const Homepage = () => {
  const habitContext = useHabit();
  const [isExisting, setIsExisting] = useState(false);

  useEffect(() => {
      setIsExisting(habitContext.isFirstTimeUser());
  }, [habitContext]);

  return(
    <div>
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