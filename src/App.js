import React from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  return (
    <ThemeContext.Consumer>
      {context => {
        return (
          <div className={`App ${context.isLightTheme ? "light" : ""}`}>
            <Header />
            <Content />
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default App;
