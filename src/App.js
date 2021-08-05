import React from "react";
// import reactDom from "react-dom";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Components/Form";
// import Tooltip from "./Components/Tooltip";
import { ThemeProvider } from "./contexts/theme";
import Nav from "./Components/Nav";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: "light",
      toggleTheme: () => {
        this.setState(({ theme }) => ({
          theme: theme === "light" ? "dark" : "light",
        }));
      },
    };
  }
  render() {
    return (
      <ThemeProvider value={this.state}>
        <div className="App">
          <header className="App-header">
          <Nav />
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <div className="intro">
            <h1>Welcome to Spelling Bee Helper!</h1>
            <h3 className="genius-h3">
              This app is all you need to become a
              <span className="btn-genius">Genius</span>!
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
      </ThemeProvider>
    );
  }
}

export default App;
