import './App.css';
import Stats from './page/stats/Stats';
import {HashRouter, Route, Routes} from "react-router-dom";
import Homepage from './page/homepage/homepage';

function App() {
  return (
    <HashRouter>
      <div className="App">
        
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/stats" element={<Stats />} />
        </Routes> 

      </div>
      
    </HashRouter>
  );
}

export default App;
