import axios from "axios";
import { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostPage() {
  let { id } = useParams();
  let url = `https://dummyjson.com/posts/${id}`;
  let [post, setPost] = useState({ loading: false, data: null, error: null });

  let fetchPost = async () => {
    setPost({ loading: true, data: null, error: null });
    try {
      let res = await axios.get(url);
      setPost({ loading: false, data: res.data, error: null });
    } catch (error) {
      setPost({ loading: false, data: null, error: error.message });
    }
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

  if (post.loading) return <h1>Loading...</h1>;
  if (post.error) return <h1>Error: {post.error}</h1>;

  return (
    <div style={{ marginTop: "40px" }}>
      <h1>Post Page</h1>

      <h3>{post.data?.title}</h3>
      <p>{post.data?.body}</p>
      <span>
        Likes : {post.data?.reactions.likes} &nbsp; View : {post.data?.views}
      </span>
      <span>&nbsp; UserId : {post.data?.userId}</span>
    </div>
  );
}
