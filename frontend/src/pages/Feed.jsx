
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(import.meta.env.VITE_API_URL + "/posts").then(res => {
      setPosts(res.data);
    });
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>📰 Feed</h1>
      {posts.map((post) => (
        <div key={post.id} style={{ background: "#eee", margin: "1rem 0", padding: "1rem" }}>
          <b>{post.User?.name}</b> — {post.type}
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
