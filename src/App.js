import logo from "./logo.svg";
import "./App.css";
import { FaForumbee } from "react-icons/fa";
import Form from "./Components/Form"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="intro">
        <h1>Welcome to Spelling Bee Helper!</h1>
        <a
          rel="noreferrer"
          target="_blank"
          className="link"
          href="https://www.nytimes.com/puzzles/spelling-bee"
          title="Click to go to the puzzle!"
        >
          <FaForumbee className="forum-bee" size={30} />
          {`{ nytimes spelling bee word puzzle }`}
          <FaForumbee className="forum-bee" size={30} />
        </a>
        <h3>This app is all you need to become a Genius!</h3>
      </div>
      <Form />
      {/* <form>
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
      </form> */}
    </div>
  );
}

export default App;
