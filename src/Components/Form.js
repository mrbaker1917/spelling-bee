import React from "react";
import getWords from "../utils/api";

export default class Form extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      letters: "",
      center: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    const {letters, center} = this.state;
    const re = new RegExp(`^([${letters}])*${center}+([${letters}])*$`);
    getWords().then((words) => {
    let c_words = words.filter(word => word.match(re) !== null);
    console.log(c_words)
    })
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
      <label htmlFor="letters" className="letters">
        Enter letters here:
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
          className="center"
          placeholder="center letter"
          autoComplete="off"
          value={this.state.center}
          onChange={this.handleInputChange}
        />
        <button
          className="btn"
          type="submit"
          value="Submit"
        >
          SUBMIT
        </button>
    </form>
    )
  }

}
