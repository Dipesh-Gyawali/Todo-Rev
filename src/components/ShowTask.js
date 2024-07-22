import React, { useState } from "react";

export const ShowTask = ({ task, setTask }) => {
  //   const todoTask = [
  //     { task: "Task 1", dateNow: new Date() },
  //     { task: "Task 2", dateNow: new Date() },
  //   ];

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{task.length}</span>
        </div>
        <button className="clearAll">Clear All</button>
      </div>
      <ul>
        {task.map((item, index) => {
          //   console.log(item.dateNow.toLocaleString());
          return (
            <li key={index}>
              <p>
                <span className="name">{item.task}</span>
                <span className="time">{item.dateNow.toLocaleString()}</span>
              </p>
              <i className="bi bi-pencil-square"></i>
              <i className="bi bi-trash"></i>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
