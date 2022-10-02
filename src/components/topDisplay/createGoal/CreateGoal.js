import './CreateGoal.css';
import {useHabit} from "../../storage/HabitContext";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function CreateGoal() {
    const habitContext = useHabit();
    const navigate = useNavigate();

    const [description, setDescription] = useState("");
    const [height, setHeight] = useState(0);
    const [date, setDate] = useState("");

    const changeHandler = (e) => {
        e.preventDefault();

        const {id, value} = e.currentTarget;

        if(id === "description") {
            setDescription(value);
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        habitContext.addActivity(description, "");
        setDescription("");
        navigate(0);
    }

    useEffect(() => {
        setHeight(habitContext.getProgress());
        setDate(new Date().toDateString());
    }, [habitContext]);

  return (
    <>
        <div className='createGoal'>
            <h1>{height.toFixed(3)} ft</h1>
            <h3>{date}</h3>
            <div>
                <textarea onChange={changeHandler} placeholder='Tell Sisyphus About Your Day...' id={"description"}></textarea>
            </div>
            <button onClick={submitHandler}>Record Today</button>
        </div>
    </>
  );
}

export default CreateGoal;
