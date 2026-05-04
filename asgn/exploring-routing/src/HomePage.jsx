import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  let [posts, setPosts] = useState([]);
  let url = "https://dummyjson.com/posts";
  let navigate = useNavigate();

  let fetchPost = async () => {
    let res = await axios.get(url);
    setPosts(res.data.posts);
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    let fetchData = async () => {
      await fetchPost();
    };
    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  let handlePostClick = (id) => {
    navigate(`/post/${id}`);
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <h1>Home Page</h1>
      <div>
        {posts.map((post, idx) => (
          <div
            key={idx}
            onClick={() => handlePostClick(post.id)}
            style={{ border: "1px solid black", padding: "10px", margin: "10px", cursor: "pointer" }}
          >
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <span>
              Likes : {post.reactions.likes} &nbsp; View : {post.views}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
