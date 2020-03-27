import React, { createContext, Component } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      isLightTheme: false,
      handleTheme: this.handleTheme
    };
    this.handleTheme = this.handleTheme.bind(this);
  }

  handleTheme = () => {
    this.setState(prevState => {
      return {
        isLightTheme: !prevState.isLightTheme
      };
    });
  };

  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
