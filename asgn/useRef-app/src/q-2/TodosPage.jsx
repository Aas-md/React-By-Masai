import { useEffect, useState } from "react";

export default function TodosPage() {
  let [data, setData] = useState({ loading: false, error: null, todos: [] });
  let [pageNumber, setPageNumber] = useState(1);

  let url = "https://jsonplaceholder.typicode.com/todos";
  let fetchTodos = async () => {
    try {
        let response = await fetch(url)
        let res = await response.json()
       setData({ ...data, todos: res });
    } catch (err) {
      console.log("Something went wrong", err);
    }
  };

  useEffect(()=>{
    fetchTodos()
  },[])


 let end = pageNumber*10
  let start = end-10
  let currentTodos = data.todos.slice(start,end)
  console.log(currentTodos)

  return (
    <div>
      <h1>Hello Todos</h1>
    </div>
  );
}
