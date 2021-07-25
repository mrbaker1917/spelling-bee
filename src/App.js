import logo from "./logo.svg";
import "./App.css";
import Form from "./Components/Form";
// import Tooltip from "./Components/Tooltip";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="intro">
        <h1>Welcome to Spelling Bee Helper!</h1>
        <h3 className="genius-h3">
          This app is all you need to become a
          <button className="btn-genius">Genius</button>!
        </h3>
        <div className="genius-tip">
          'Genius' is the highest point level on NYT Spelling Bee Puzzle.
        </div>
        <a
          rel="noreferrer"
          target="_blank"
          className="link"
          href="https://www.nytimes.com/puzzles/spelling-bee"
        >
          {`{ nytimes spelling bee word puzzle }`}
        </a>
        <div className="click-link">Click to go to the puzzle!</div>
      </div>
      <Form />
    </div>
  );
}

export default App;
