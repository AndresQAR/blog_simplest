import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/blog')
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {blogs.map(blog => (
          <li key={blog.blogId}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;