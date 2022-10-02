import './GoalPoint.css';
import {useHabit} from "../../storage/HabitContext";
import {useEffect, useState} from "react";

function GoalPoint() {
    const habitContext = useHabit();
    const [deltaHeight, setDeltaHeight] = useState(0);

    useEffect(() => {
        setDeltaHeight(habitContext.getDeltaHeight());
    }, [habitContext]);
  return (
    <>
        <div className='goalPoint'>
            <h3>+{deltaHeight.toFixed(3)} ft</h3>
        </div>
    </>
  );
}

export default GoalPoint;
