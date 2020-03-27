import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function Adder(props) {
  const [task, setTask] = useState({
    id: props.count + 1,
    title: "",
    description: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    setTask({
      ...task,
      id: props.count + 1
    });
    props.addTask(task);
    setTask({
      id: task.id + 1,
      title: "",
      description: ""
    });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value
    });
  };

  const notify = () => toast.success("Woohoo, Task Added!!");

  return (
    <form
      className="listForm"
      onSubmit={e => {
        handleSubmit(e);
        notify();
      }}
    >
      <ToastContainer />
      <label>
        Title :
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        About :
        <textarea
          name="description"
          value={task.description}
          cols="20"
          onChange={handleChange}
        ></textarea>
      </label>
      <button className="btn">Add</button>
    </form>
  );
}
