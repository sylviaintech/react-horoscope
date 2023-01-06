import logo from "./logo.svg";

import "./App.css";
import FetchData from "./FetchData";

function App() {
  return (
    <div className="App">
      <header className="App-header mb-5">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="mb-5 mt-1">Your React Horoscope</h1>
      </header>
      <FetchData dateOnLoad="today" />
    </div>
  );
}

export default App;
