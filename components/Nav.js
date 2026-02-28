import React from "react";
import { ThemeConsumer } from "../contexts/theme";

export default function Nav() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <nav className="nav">
          <div className="theme-toggle-container">
            <button
              style={{fontSize: 30}}
              className="btn-clear"
              onClick={toggleTheme}
            >
              {theme === "light" ? "🔦" : "💡"}
            </button>
            <div className="theme-tooltip">
              Switch to {theme === "light" ? "dark" : "light"} mode
            </div>
          </div>
        </nav>
      )}
    </ThemeConsumer>
  )
}