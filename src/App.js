import logo from "./logo.svg";
import "./App.css";
import { FaForumbee } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <form>
        <h1>Welcome to Spelling Bee Helper!</h1>
        <a
          rel="noreferrer"
          target="_blank"
          className="link"
          href="https://www.nytimes.com/puzzles/spelling-bee"
          title="Click to go to the puzzle!"
        >{`{ nytimes spelling bee }`}</a>
        <h3>All you need to become a Genius!</h3>
        <FaForumbee className="forum-bee" />
        <label className="letters-label">
          Enter the letters around the center of the honeycomb here:
        </label>
        <input name="letters" className="letters-input"></input>
        <label className="center-label">Enter the center letter here:</label>
        <input name="center" className="center-input"></input>
        <p>Press the submit button!</p>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
