import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';


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
    <main id="main">

      <section class="single-post-content">
        <div class="container">
          <div class="row">
            <div class="col-md-9 post-content" data-aos="fade-up">

              <div class="single-post">
                <div class="post-meta"><span class="date">Category: {capitalizeFirstLetter(blog.category)}</span> <span class="mx-1">On:</span> <span>{blog.month} {blog.day}</span></div>
                <h1 class="mb-5">{blog.title}</h1>
                <p><span class="firstcharacter"></span>{blog.excerpt}</p>

                <figure class="my-4">
                  <img src={blog.thumbnail} alt="" class="img-fluid" />
                  <figcaption>Organised By: {blog.event_organiser}</figcaption>
                </figure>
              </div>



            </div>
            <div class="col-md-3">


              <div class="aside-block">
                <h3 class="aside-title">Categories</h3>
                <ul class="aside-links list-unstyled">
                  <li><a href="category.html"><i class="bi bi-chevron-right"></i> Business</a></li>
                  <li><a href="category.html"><i class="bi bi-chevron-right"></i> Culture</a></li>
                  <li><a href="category.html"><i class="bi bi-chevron-right"></i> Sport</a></li>
                  <li><a href="category.html"><i class="bi bi-chevron-right"></i> Food</a></li>
                  <li><a href="category.html"><i class="bi bi-chevron-right"></i> Politics</a></li>
                  <li><a href="category.html"><i class="bi bi-chevron-right"></i> Celebrity</a></li>
                  <li><a href="category.html"><i class="bi bi-chevron-right"></i> Startups</a></li>
                  <li><a href="category.html"><i class="bi bi-chevron-right"></i> Travel</a></li>
                </ul>
              </div>


            </div>
          </div>
        </div>
      </section>
    </main>

  )
}

export default EventDetail;