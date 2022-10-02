import './GoalPoint.css';
import {useHabit} from "../../storage/HabitContext";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function GoalPoint() {
    const habitContext = useHabit();
    const navigate = useNavigate();

    const [deltaHeight, setDeltaHeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [date, setDate] = useState("");

    useEffect(() => {
        setDeltaHeight(habitContext.getDeltaHeight());
        setHeight(habitContext.getProgress());
        setDate(new Date().toDateString());
    }, [habitContext]);
  return (
    <>
        <div className='goalPoint'>
            <h3>+{deltaHeight.toFixed(3)} ft</h3>
            <h1>{height.toFixed(3)} ft</h1>
            <h3>{date}</h3>
        </div>
    </>
  );
}

export default GoalPoint;
