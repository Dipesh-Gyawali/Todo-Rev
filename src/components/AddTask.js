import React, { useRef, useState } from "react";

export const AddTask = ({
  task,
  setTask,
  editTask,
  setEditTask,
  input,
  setInput,
}) => {
  const refElement = useRef();
  console.log(refElement.current, "ref");

  const handleChange = (e) => {
    setInput(e.target.value);
    if (e.target.value.trim() !== "") {
      refElement.current.disabled = false;
    }
  };

  const handleBlank = () => {
    console.log("Button disabled due to blank input");
    refElement.current.disabled = true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sub");

    if (input.trim() === "") {
      handleBlank();
    } else {
      if (editTask.id) {
        //edit garda
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
        //normal submit garda
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
        console.log("sub 2222222");
        refElement.current.disabled = false;
      }
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
        <button ref={refElement} type="submit">
          Add
        </button>
      </form>
    </section>
  );
};
