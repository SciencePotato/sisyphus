import './App.css';
import Loader from './page/loader/Loader.js';
import Welcome from './page/welcome/Welcome.js';
import TopDisplay from './components/topDisplay/TopDisplay.js'
import Journey from './components/journey';

function App() {
  return (
    <div className="App">
      {/* <Welcome/> */}
      {/* <Loader/> */}
      <TopDisplay/>
      <Journey/>
    </div>
  );
}

export default App;
