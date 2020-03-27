import React from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  return (
    <ThemeContext.Consumer>
      {context => {
        return (
          <nav>
            <ul className="bulb" onClick={context.handleTheme}>
              {"💡"}
            </ul>
          </nav>
        );
      }}
    </ThemeContext.Consumer>
  );
}
