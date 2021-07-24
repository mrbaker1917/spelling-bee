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
    this.pangramCheck = this.pangramCheck.bind(this);
    this.wordCheck = this.wordCheck.bind(this);
  }

  pangramCheck(word) {
    const c = this.state.center;
    const dict1 = {};
    dict1[c] = 0;
    for (let l of this.state.letters) {
      dict1[l] = 0;
    }
    for (let c of word) {
      if (c in dict1) {
        dict1[c] += 1;
      } else {
        return false;
      }
    }
    for (let q of Object.values(dict1)) {
      if (q === 0) {
        return false;
      }
    }
    return true;
  }

  wordCheck(w) {
    const c = this.state.center;
    const dict2 = {};
    dict2[c] = 0;
    const letters = this.state.letters;
    for (let l of letters) {
      dict2[l] = 0;
    }
    for (let h of w) {
      if (h in dict2) {
        dict2[h] += 1;
      } else {
        return false;
      }
    }
    if (dict2[c] === 0) {
      return false;
    } else {
      return true;
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const re2 = new RegExp(/^[a-z]+$/i);
    let { letters, center } = this.state;
    if (letters === "" || center === "") {
      this.refreshPage();
    }
    if (letters.match(re2) === null || center.match(re2) === null) {
      this.refreshPage();
    }
    letters = letters.slice(0, 6);
    center = center.slice(0, 1);

    getWords().then((words) => {
      this.setState({
        clicked: true,
        c_words: Object.values(words).filter((w) => this.wordCheck(w)),
        pangrams: Object.values(words).filter((w) => this.pangramCheck(w)),
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
          <button className="btn" onClick={this.refreshPage}>
            Reset
          </button>
          <div className="all-words">
            <h2>All Possible ({this.state.c_words.length}) Words:</h2>
            <ul>
              {this.state.c_words.map((word) => {
                return <li key={word}>{word.toUpperCase()}</li>;
              })}
            </ul>
          </div>
          <button className="btn" onClick={this.refreshPage}>
            Reset
          </button>
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
