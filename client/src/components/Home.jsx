import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/blog')
      .then((response) => {
        setBlogs(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul class="list-unstyled px-4 py-4">
        {blogs.map(blog => (
          <li class="my-3"  key={blog.blogId}>
            <div class="card" style={{width: "18rem"}}>
              <div class="card-body">
                <h5 class="card-title">{blog.title}</h5>
                <p class="card-text">{blog.content}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;