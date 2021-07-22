import logo from "./logo.svg";
import "./App.css";
import Form from "./Components/Form"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="intro">
        <h1>Welcome to Spelling Bee Helper!</h1>
        <h3>This app is all you need to become a <button 
        className="btn-genius" 
        title="Genius is the highest level in the nytimes spelling bee puzzle."
        >Genius</button>!</h3>
        <a
          rel="noreferrer"
          target="_blank"
          className="link"
          href="https://www.nytimes.com/puzzles/spelling-bee"
          title="Click to go to the puzzle!"
        >
          {`{ nytimes spelling bee word puzzle }`}
        </a>
      </div>
      <Form />
    </div>
  );
}

export default App;
