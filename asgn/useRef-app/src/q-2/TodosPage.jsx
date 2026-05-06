import { useEffect, useState } from "react";

export default function TodosPage() {
  let [data, setData] = useState({ loading: false, error: null, todos: [] });
  let [pageNumber, setPageNumber] = useState(1);

  let url = "https://jsonplaceholder.typicode.com/todos";
  let fetchTodos = async () => {
    try {
      let response = await fetch(url);
      let res = await response.json();
      setData({ ...data, todos: res });
    } catch (err) {
      console.log("Something went wrong", err)
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  let end = pageNumber * 10;
  let start = end - 10;
  let currentTodos = data.todos.slice(start, end);

  return (
    <div>
      <h1>Hello Todos</h1>
      <ul>
        {currentTodos.map((todo) => (
          <li key={todo.id}>
            <h3>{todo.title}</h3>
            <span>{todo.id} </span>
            <span>{todo.completed ? "Completed" : "Not Completed"}</span>
          </li>
        ))}
      </ul>

      <button disabled={pageNumber === 1} onClick={() => setPageNumber((prev) => prev - 1)}>
        Previous
      </button>
      <span style={{ background: "blue", color: "white" }}> Page {pageNumber} </span>
      <button disabled={end >= data.todos.length} onClick={() => setPageNumber((prev) => prev + 1)}>
        Next
      </button>
    </div>
  );
}
