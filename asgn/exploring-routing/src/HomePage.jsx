import { useEffect, useState } from "react";
import axios from "axios";

export default function HomePage() {
  let [posts, setPosts] = useState([]);
  let url = "https://dummyjson.com/posts";

  let fetchPost = async () => {
    let res = await axios.get(url);
    setPosts(res.data.posts);
  };

  useEffect(() => {
    let fetchData = async () => {
      await fetchPost();
    };
    fetchData();
  }, []);

  return (
    <div style={{ marginTop: "40px" }}>
      <h1>Home Page</h1>
    </div>
  );
}
