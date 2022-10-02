import './CreateGoal.css';
import {useHabit} from "../../storage/HabitContext";
import {useState} from "react";
import useRouter, {useNavigate} from "react-router-dom";

function CreateGoal({todayDate, height}) {
    const habitContext = useHabit();
    const navigate = useNavigate();
    const [description, setDescription] = useState("");

    const changeHandler = (e) => {
        e.preventDefault();

        const {id, value} = e.currentTarget;

        if(id === "description") {
            setDescription(value);
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("submitted!")
        habitContext.addActivity(description, "");
        setDescription("");
        navigate(0);
    }

  return (
    <>
        <div className='createGoal'>
            <h1>{height.toFixed(3)} ft</h1>
            <h3>{todayDate}</h3>
            <div>
                <textarea onChange={changeHandler} placeholder='say somethinggggg' id={"description"}></textarea>
            </div>
            <button onClick={submitHandler}>Record Today</button>
        </div>
    </>
  );
}

export default CreateGoal;
