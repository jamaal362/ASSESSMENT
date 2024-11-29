
import React, { useEffect, useState } from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div style={{ width: "80%", margin: "20px auto", textAlign: "center" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>ID</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Title</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((p) => (
            <tr key={p.id}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{p.id}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>{p.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Posts;

