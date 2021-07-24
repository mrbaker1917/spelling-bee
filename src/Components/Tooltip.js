import React from "react";
import PropTypes from "prop-types";

const styles = {
  container: {
    position: "relative",
  },
  tooltip: {
    boxSizing: "border-box",
    position: "absolute",
    width: "200px",
    top: "5%",
    left: "75%",
    marginLeft: "-80px",
    borderRadius: "5px",
    backgroundColor: "gray",
    padding: "10px",
    marginBottom: "5px",
    color: "#fff",
    textAlign: "center",
    fontSize: "12px",
    fontWeight: "500"
  }
};

export default class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovering: false,
    };

    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }

  mouseOver() {
    this.setState({
      hovering: true,
    });
  }

  mouseOut() {
    this.setState({
      hovering: false,
    });
  }
  render() {
    const { text, children } = this.props;
    const { hovering } = this.state;
    return (
      <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} style={styles.container}>
        {hovering === true && <div className="tooltip" style={styles.tooltip}>{text}</div>}
        {children}
      </div>);
  }
}

Tooltip.propTypes = {
  text: PropTypes.string.isRequired
}