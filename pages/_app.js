import React from "react";
import { ThemeProvider } from "../contexts/theme";
import "../styles/App.css";
import "../styles/globals.css";

class MyApp extends React.Component {
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
    const { Component, pageProps } = this.props;
    
    return (
      <ThemeProvider value={this.state}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default MyApp;