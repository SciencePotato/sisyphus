import logo from './logo.svg';
import './App.css';
import { useEffect } from "react";

const store = window.electron.store;

function App() {

  const saveToStorage = (e, number = 19) => {
    if (e) {
      console.log(e);
    } else {
      // send the data i want to send as a string
      store.set("name", "Deyby Rodriguez");
      store.set("age", number);
    }
  };

  useEffect(() => {
    console.log(store.get('unicorn'))
    saveToStorage();
    console.log("Saved to electron-store")
  }, []);

  useEffect(() => {
    console.log(store.get("name"));
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
