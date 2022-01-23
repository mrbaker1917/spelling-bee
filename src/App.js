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
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <div className="intro">
            <Nav />
            <h1>Welcome to Wordle Solver!</h1>
            <h3 className="genius-h3">
              This app will help you to solve wordle everyday!
            </h3>
            <a
              rel="noreferrer"
              target="_blank"
              className="link"
              href="https://www.powerlanguage.co.uk/wordle/"
            >
              {`{ wordle }`}
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
