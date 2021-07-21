import React from "react";
import getWords from "../utils/api";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: "",
      center: "",
      clicked: false,
      c_words: [],
      pangrams: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.refreshPage = this.refreshPage.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const { letters, center } = this.state;
    if (letters === "" || center === "") {
      this.refreshPage()
    }
    const re = new RegExp(`^([${letters}])*${center}+([${letters}])*$`);
    getWords().then((words) => {
      this.setState({
        clicked: true,
        c_words: Object.values(words).filter((word) => word.match(re) !== null),
        pangrams: Object.values(words).filter(
          (w) => w.length > 6 && w.match(re) !== null
        ),
      });
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  refreshPage() {
    return window.location.reload();
  }

  render() {
    if (this.state.clicked === true) {
      return (
        <React.Fragment>
          <div className="pangrams">
            <h2>Possible Pangrams:</h2>
            <ul>
              {this.state.pangrams.map((p) => {
                return <li key={p}>{p.toUpperCase()}</li>;
              })}
            </ul>
          </div>
          <div className="all-words">
            <h2>All Possible Words:</h2>
            <ul>
              {this.state.c_words.map((word) => {
                return <li key={word}>{word.toUpperCase()}</li>;
              })}
            </ul>
          </div>
          <button className="btn" onClick={this.refreshPage}>Reset</button>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <form className="form" onSubmit={this.handleSubmit}>
          <label htmlFor="letters" className="letters">
            Enter non-center letters here:
          </label>
          <input
            type="text"
            name="letters"
            className="letters"
            placeholder="letters"
            autoComplete="off"
            value={this.state.letters}
            onChange={this.handleInputChange}
          />
          <label htmlFor="center" className="center">
            Enter center letter here:
          </label>
          <input
            type="text"
            name="center"
            className="center-input"
            placeholder="center"
            autoComplete="off"
            value={this.state.center}
            onChange={this.handleInputChange}
          />
          <button className="btn" type="submit" value="Submit">
            SUBMIT
          </button>
        </form>
      </React.Fragment>
    );
  }
}
