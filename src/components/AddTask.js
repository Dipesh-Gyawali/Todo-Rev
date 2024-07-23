import React, { useState } from "react";

export const AddTask = ({
  task,
  setTask,
  editTask,
  setEditTask,
  input,
  setInput,
}) => {
  const handleChange = (e) => {
    setInput(e.target.value);
    // console.log(input, "iii");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editTask.id) {
      const date = new Date();

      const updatedTask = task.map((a) => {
        if (a.id === editTask.id) {
          return {
            ...a,
            id: editTask.id,
            taskName: input,
            // taskName: e.target.task.value,
            dateNow: date.toLocaleString(),
          };
        }
        return a;
      });
      setTask(updatedTask);
      setEditTask({});
      setInput("");
    } else {
      // console.log(input, "aaaaa");
      const date = new Date();
      const newTask = {
        id: Math.random(),
        taskName: e.target.task.value,
        // taskName: input,
        dateNow: date.toLocaleString(),
      };
      setTask([...task, newTask]);
      setInput("");
      // e.target.task.value = "";
    }
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
          value={input || editTask.taskName || ""}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </section>
  );
};
