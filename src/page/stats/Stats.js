import './stats.css'
import manBall from './../../images/manball_1.png'
import { Link } from 'react-router-dom';

function Stats() {
  return (
    <>
        <div className='stats'>
            <Link to="/"><p>Go back</p></Link>
            <div>
                <div>
                    <h2> You already climbed: </h2>
                    <h1>21.208 ft</h1>
                    <h3> On your 47th day </h3>
                    <h2>You created <span className='stats-date'> 13 </span> posts.</h2>
                    <p>“I leave Sisyphus at the foot of the mountain! One always finds one’s burden again. But Sisyphus teaches the higher fidelity that negates the gods and raises rocks. He too concludes that all is well. This universe henceforth without a master seems to him neither sterile nor futile. Each atom of that stone, each mineral flake of that night filled mountain, in itself forms a world. The struggle itself toward the heights is enough to fill a man’s heart. One must imagine Sisyphus happy. ”</p>
                    <p>Albert Camus</p>
                </div>
            </div>
            <div>
                <img src={manBall}/>
            </div>
        </div>
    </>
  );
}

export default Stats;
