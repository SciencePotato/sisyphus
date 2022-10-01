import './App.css';
import Loader from './page/loader/Loader.js';
import Welcome from './page/welcome/Welcome.js';

function App() {
  return (
    <div className="App">
      <Welcome/>
      {/* <Loader/> */}
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
