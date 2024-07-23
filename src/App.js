import "./App.css";
import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { ShowTask } from "./components/ShowTask";
import { useState } from "react";

function App() {
  const [task, setTask] = useState([]);
  const [editTask, setEditTask] = useState({});
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <Header />
      <AddTask
        task={task}
        setTask={setTask}
        editTask={editTask}
        setEditTask={setEditTask}
        input={input}
        setInput={setInput}
      />
      <ShowTask
        task={task}
        setTask={setTask}
        editTask={editTask}
        setEditTask={setEditTask}
        input={input}
        setInput={setInput}
      />
    </div>
  );
}

export default App;
