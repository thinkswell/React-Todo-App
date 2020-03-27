import React from "react";
import Adder from "./Adder";
import { ContentContext } from "../context/ContentContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function Content() {
  return (
    <ContentContext.Consumer>
      {context => {
        const notify = () => toast.warn("Task Deleted!");

        return (
          <div className="content">
            <div className="content__head">ToDo List</div>
            <div className="reverse-it">
              {context.list.map(item => (
                <div className="card" key={item.id}>
                  <div
                    className="card__del"
                    onClick={() => {
                      context.delTask(item.id);
                      notify();
                    }}
                  >
                    {"❌"}
                  </div>
                  <div className="card__head">{item.title}</div>
                  <div className="card__description">{item.description}</div>
                </div>
              ))}
            </div>
            <Adder addTask={context.addTask} count={context.count} />
          </div>
        );
      }}
    </ContentContext.Consumer>
  );
}
