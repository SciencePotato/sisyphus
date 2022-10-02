import './welcome.css'
import manBall from './../../images/manball_1.png'

function Welcome() {
  return (
    <>
      <div className='welcome-padding'>
        <div className="welcome">
          <div>
              <img src={manBall}></img>
          </div>
          <div>
              <div>
                  <h1> Sisyphus </h1>
                  <h3> “One must imagine Sisyphus happy.” </h3>
                  <p>
                      Sisyphus is a habit-tracking software that focuses on progress. In life, many things are hard to quantify: we never say we completed “guitar” or finished “French.” All we have is gradual improvement each day, and we hope life itself will get better someday.
                  </p>
                  <button> Get Started </button>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
