import { useEffect, useState } from "react";
import "./home.css";

export default function Home() {
  let url = "https://dummyjson.com/posts";
  let [posts, setPosts] = useState([]);

  let fetchPosts = async () => {
    let res = await fetch(url);
    let data = await res.json();
    setPosts(data.posts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  let handleClick = (id)=>{
    console.log(id)
  }

  return (
    <>
      <h1>All Posts</h1>

      <div className="postsBox"> 
        {posts.map((post) => (
          <div key={post.id} className="posts" onClick={()=>handleClick(post.id)}>
            <h4>Post id : {post.id}</h4>
            <h4>post title : {post.title}</h4>
          </div>
        ))}
      </div>
    </>
  );
}
