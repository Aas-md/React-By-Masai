import { useState } from "react";

export default function AdvanceTaskManagement() {
  let [tasks, setTasks] = useState([]);
  let [input, setInput] = useState("");
  let [priority, setPriority] = useState("Medium");

  let addTask = () => {
    if (input.length === 0) {
      alert("Please enter a task");
      return;
    }

    let arr = [...tasks, { title: input, priority: priority, completed: false }];
    arr = arr.sort((a, b) => {
      const priorityOrder = { High: 1, Medium: 2, Low: 3 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
    setTasks(arr);
    setInput("");
    setPriority("Medium");
  };

  let handleComplete = (index) => {
    let updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    setTasks(updatedTasks);
  };

  let handleDelete = (index) => {
    let updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Advance Task Management</h1>
      <input
        type="text"
        value={input}
        placeholder="Please enter task"
        onChange={(event) => setInput(event.target.value)}
      />
      <select value={priority} onChange={(event) => setPriority(event.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button onClick={addTask}>Add Task</button>

      <div>
        <h2>Task List</h2>
        <ul>
          {tasks.map((task, idx) => (
            <li key={idx}>
              <span
                onClick={() => handleComplete(idx)}
                style={{
                  color: task.priority === "High" ? "red" : task.priority === "Medium" ? "orange" : "green",
                  textDecoration: task.completed ? "line-through" : "none",
                  cursor: "pointer",
                }}
              >
                {task.title}
              </span>
              <span> - {task.priority}</span>
              <button onClick={() => handleDelete(idx)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
