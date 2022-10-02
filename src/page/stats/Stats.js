import './stats.css'
import manBall from './../../images/manball_1.png'
import { Link } from 'react-router-dom';
import {useHabit} from "../../components/storage/HabitContext";
import {useEffect, useState} from "react";

function Stats() {
    const habitContext = useHabit();
    const [activities, setActivities] = useState([]);
    const [height, setHeight] = useState(0);
    const [streak, setStreak] = useState(0);
    const [userCreationDate, setUserCreationDate] = useState(new Date());

    const getStreakCount = () => {
        let prevDay = userCreationDate;
        let today = new Date();

        let difference = prevDay.getTime() - today.getTime();
        let totalDays = Math.ceil(difference / (1000 * 3600 * 24));
        return Math.abs(totalDays);
    }

    useEffect(() => {
        setActivities(habitContext.getActivities());
        setHeight(habitContext.getProgress());
        setUserCreationDate(habitContext.getUserCreationDate());
        setStreak(getStreakCount());
    }, [habitContext]);


  return (
    <>
        <div>
            <Link to="/">
               <div className='clog'>
                    <button>
                        Back
                    </button>
                </div>
            </Link>
            <div className='stats'>
                <div>
                    <div>
                        <h2> You already climbed: </h2>
                        <h1>{height.toFixed(3)} ft</h1>
                        <h3>You're on a {streak} day streak</h3>
                        <h2>You created <span className='stats-date'> {activities.length} </span> posts.</h2>
                        <p>“I leave Sisyphus at the foot of the mountain! One always finds one’s burden again. But Sisyphus teaches the higher fidelity that negates the gods and raises rocks. He too concludes that all is well. This universe henceforth without a master seems to him neither sterile nor futile. Each atom of that stone, each mineral flake of that night filled mountain, in itself forms a world. The struggle itself toward the heights is enough to fill a man’s heart. One must imagine Sisyphus happy. ”</p>
                        <p>Albert Camus</p>
                    </div>
                </div>
                <div>
                    <img src={manBall} alt={"Man with ball"}/>
                </div>
            </div>
        </div>
    </>
  );
}

export default Stats;
