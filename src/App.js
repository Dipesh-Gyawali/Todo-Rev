import "./App.css";
import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { ShowTask } from "./components/ShowTask";
import { useState } from "react";

function App() {
  const [task, setTask] = useState([]);

  return (
    <div className="App">
      <Header />
      <AddTask task={task} setTask={setTask} />
      <ShowTask task={task} setTask={setTask} />
    </div>
  );
}

export default App;
