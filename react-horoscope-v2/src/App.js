import logo from "./logo.svg";

import "./App.css";
import UserSelects from "./UserSelects";

function App() {
  return (
    <div className="App">
      <header className="App-header mb-5">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="mb-5 mt-1">Your React Horoscope</h1>
      </header>
      <UserSelects />
    </div>
  );
}

export default App;
