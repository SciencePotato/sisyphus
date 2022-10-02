import './welcome.css'
import manBall from './../../images/manball_1.png'
import {useHabit} from "../../components/storage/HabitContext";
import {useNavigate} from "react-router-dom";

function Welcome() {
    const habitContext = useHabit();
    const navigate = useNavigate();

    const changeUserStatus = (e) => {
        e.preventDefault();
        habitContext.setHabitData(0, "Learning To Ride A Bike", "Increasing biking proficiency")
        habitContext.setExistingUserStatus(true);
        navigate(0);
    }

  return (
    <>
      <div className='welcome-padding'>
        <div className="welcome">
          <div>
              <img src={manBall} className="welcome-manball"></img>
          </div>
        <div>
            <div>
                <h1> Sisyphus </h1>
                <h3> “One must imagine Sisyphus happy.” </h3>
                <p>
                    Sisyphus is a habit-tracking software that focuses on progress. In life, many things are hard to quantify: we never say we completed “guitar” or finished “French.” All we have is gradual improvement each day, and we hope life itself will get better someday.
                </p>
                <button onClick={changeUserStatus}> Get Started </button>
            </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Welcome;
