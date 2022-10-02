import './loader.css'
import ball from './../../images/ball.png'

function Loader() {
  return (
    <>
      <div className="loader" id='loader'>
        <div>
            <img className='ball-start' src={ball}></img>
        </div>
        <h1>
            Sisyphus
        </h1>
        <h3>
            "One must imagine Sisyphus happy."
        </h3>
      </div>
    </>
  );
}

export default Loader;
