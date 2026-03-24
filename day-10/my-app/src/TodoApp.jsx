import { useState } from "react";

export default function TodoApp() {
  let [todos, setTodos] = useState([]);

  function addTodo(text) {
    setTodos([...todos, { text: text, id: Date.now(), isCompleted: false }]);
  }

  function deleteTodo(id) {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  function toggleTodo(id) {
    let newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(newTodos);
  }

  return (
    <>
      <h1>Todo App</h1>
      <button onClick={() => addTodo("New Task")}>Add Task</button>
      {todos.map((todo) => (
        <div key={todo.id}>
          <p
            style={{
              textDecoration: todo.isCompleted ? "line-through" : "none",
            }}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
          </p>
          <button onClick={() => deleteTodo(todo.id)}>Delete </button>
        </div>
      ))}
    </>
  );
}
