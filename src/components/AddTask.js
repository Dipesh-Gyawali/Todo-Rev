import React, { useState } from "react";

export const AddTask = ({ task, setTask }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    // console.log(setInput(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(first)
   
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
