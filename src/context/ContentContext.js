import React, { createContext, Component } from "react";
import todolist from "../api/todolist";

export const ContentContext = createContext();

export default class ContentContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      list: [...todolist],
      count: todolist.length,
      addTask: this.addTask,
      delTask: this.delTask
    };
    this.addTask = this.addTask.bind(this);
    this.delTask = this.delTask.bind(this);
  }

  addTask = task => {
    var newList = this.state.list;
    newList.push(task);
    this.setState(
      {
        list: newList,
        count: newList.length
      },
      () => console.log(this.state.list)
    );
  };

  delTask = id => {
    var newList = this.state.list.filter(task => task.id !== id);
    this.setState(
      {
        list: newList,
        count: newList.length
      },
      () => console.log(this.state.list)
    );
  };

  componentDidMount() {
    if (!localStorage.list) {
      localStorage.list = JSON.stringify(todolist);
    } else {
      this.setState({
        list: JSON.parse(localStorage.list)
      });
    }
  }

  componentDidUpdate() {
    localStorage.list = JSON.stringify(this.state.list);
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <ContentContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ContentContext.Provider>
    );
  }
}
