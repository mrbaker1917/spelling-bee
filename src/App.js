import logo from "./logo.svg";
import "./App.css";
import Form from "./Components/Form";
import Tooltip from "./Components/Tooltip";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="intro">
        <h1>Welcome to Spelling Bee Helper!</h1>
        <h3>
          This app is all you need to become a
          <Tooltip text="<= 'Genius' is the highest point level in the nytimes spelling bee.">
            <button className="btn-genius">Genius</button>!
          </Tooltip>
        </h3>
        <Tooltip text="<= Click to go to the puzzle!">
        <a
          rel="noreferrer"
          target="_blank"
          className="link"
          href="https://www.nytimes.com/puzzles/spelling-bee"
        >
          {`{ nytimes spelling bee word puzzle }`}
        </a>
        </Tooltip>
      </div>
      <Form />
    </div>
  );
}

export default App;
