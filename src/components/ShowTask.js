import React, { useState } from "react";

export const ShowTask = ({ task, setTask }) => {
  //   const todoTask = [
  //     {id:1, taskName: "Task 1", dateNow: new Date() },
  //     {id:2, taskName: "Task 2", dateNow: new Date() },
  //   ];

  const handleDelete = (id) => {
    const updatedTask = task.filter((a) => a.id !== id);
    setTask(updatedTask);
  };

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{task.length}</span>
        </div>
        <button className="clearAll" onClick={() => setTask([])}>
          Clear All
        </button>
      </div>
      <ul>
        {task.map((item, index) => {
          //   console.log(item.dateNow.toLocaleString());
          return (
            <li key={item.id}>
              <p>
                <span className="name">{item.taskName}</span>
                <span className="time">{item.dateNow.toLocaleString()}</span>
              </p>
              <i className="bi bi-pencil-square"></i>
              <i
                className="bi bi-trash"
                onClick={() => handleDelete(item.id)}
              ></i>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
