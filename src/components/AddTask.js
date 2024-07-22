import React, { useState } from "react";

export const AddTask = ({ task, setTask }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    // console.log(setInput(e.target.value));
    // console.log(input, "input ko");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    // console.log(e.target.task.value, "e.target.task.value");

    const newTask = {
      id: Math.random(),
      taskName: e.target.task.value,
      dateNow: date.toLocaleString(),
    };
    setTask([...task, newTask]);
    // console.log(task, "task state ho");
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          autoComplete="off"
          placeholder="add task"
          maxLength="25"
          value={input}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </section>
  );
};
