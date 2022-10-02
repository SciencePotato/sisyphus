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
            Sisyphus is a habit tracker that our team made to make us "feel good," inspired by Albert Camus' book "The Myth of Sisyphus." Our team believes enjoyments in life should come from "incremental achievements" instead of "direct result."
            </p>
            <p>Sisyphus prompts the user to enter no more than a 100 words each day to record these "incremental achievements". Each day when the user entered something, our lovely Sisyphus will push the rock a little bit further up to the mountain.</p>
            <p>
            You will be able to look back on the progress you made. The good stuff (or bad stuff depends on how you do it) you did along the way.
            </p>
            <p>
            And, most importantly, it is ok to not to enter anything for a while. Our team thought about punishing Sisyphus for being lazy by decreasing the total distance, but that is not fun. The progress you made belongs to you. We wont take it away from you.
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
