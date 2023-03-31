import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';

// style={{ backgroundImage: `url(${b4})` }}>
const EventDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {

    const fetchData = async () => {
      try {
        let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/${id}`);
        setBlog(response.data);
        console.log(response.data)

      }
      catch (err) {

      }
    };

    fetchData();
  }, [id]);

  const createBlog = () => {
    return { __html: blog.content }
  };

  const capitalizeFirstLetter = (word) => {
    if (word)
      return word.charAt(0).toUpperCase() + word.slice(1);
    return '';
  };


  return (
    <div className='container mt-3'>
      <h1 className='display-2'>{blog.title}</h1>
      <h2 className='text-muted mt-3'>Category: {capitalizeFirstLetter(blog.category)}</h2>
      <h4>{blog.month} {blog.day}</h4>
      <div className='mt-5 mb-5' dangerouslySetInnerHTML={createBlog()} />
      <hr />
      <p className='lead mb-5'><Link to='/' className='font-weight-bold'>Back to Blogs</Link></p>
    </div>

  )
}

export default EventDetail;