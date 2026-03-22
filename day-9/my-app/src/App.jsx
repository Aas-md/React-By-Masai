import { useEffect, useRef, useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Pagination />
    </>
  );
}

export default App;

function CounterCompo() {
  let [count, setCount] = useState(0);
  let renderCount = useRef(1);
  let prev = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
    prev.current = count;
  });

  return (
    <>
      <h1>Count : {count}</h1>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increment
      </button>
      <h3>Renreder : {renderCount.current} times</h3>
      <h3>Prev valueis : {prev.current} times</h3>
    </>
  );
}

function Pagination() {
  let [page, setPage] = useState(1);
  let [posts, setPosts] = useState([]);
  let postPerPage = 10;

  let FetchPost = async () => {
    // Implementation for fetching posts

    let url = `https://jsonplaceholder.typicode.com/posts`;
    let response = await fetch(url);
    let res = await response.json();

    setPosts(res);
  };

  useEffect(() => {
    FetchPost();
  }, []);


  let end = page * postPerPage;
  let start = end - postPerPage;
  let currentPosts = posts.slice(start, end);



  return (
    <>
      <h1>Page : {page}</h1>
      {currentPosts.map((post) => (
        <div key={post.id} style={{ border: "solid 1px black" }}>
          <h2>{post.id}</h2>
          <p>{post.title}</p>
        </div>
      ))}

      <button onClick={() => setPage(page => page - 1)} disabled={page === 1}>Previous Page</button>
       <button onClick={() => setPage(page => page + 1)}>Next Page</button>

    </>
  );
}
