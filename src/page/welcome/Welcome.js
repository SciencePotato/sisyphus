import './welcome.css'
import manBall from './../../images/manball_1.png'
import ball from './../../images/ball.png'
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
        <div className='aboutus'>
          <h1> About us & this project</h1>
          <div>
            <h2> Our Team: Deyby Rodriguez; Hou Chi Chan; Zikun Wang </h2>
            <h2> This app is powered by: Electron.js; React.js; Redbull </h2>
            <h2> Inspiration: The myth of Sisyphus</h2>
            <p>
              In Albert Camus’s book the myth of Sisyphus, he compares the human condition with Sisyphus in Greek methology. The god punished Sisyphus to endlessly pushing a rock to the top of a mountain and look at the rock rolling downhill. Yet the Camus believes that we “must imagine Sisyphus happy”. 
            </p>
            <p>
              The problem with most of the “habbit-tracker” software is that they focuses too much on goals and deadlines. Yet thats not simply how the world work. We don’t want that.
            </p>
          </div>
        </div>
        <div className='getstarted'>
            <img src={ball}></img>
            <button onClick={changeUserStatus}>
              Get Started
            </button>
        </div>
      </div>
    </>
  );
}

export default Welcome;
