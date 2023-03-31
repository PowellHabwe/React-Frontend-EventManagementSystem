import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

// import styled from "styled-components";
// import info1 from "./Event/info1.png";
// import info2 from "./Event/info2.png";
// import info3 from "./Event/info3.png";

import homeImage from "../assets/hero.png";
import person from "../assets/person-2.jpg";
import b4 from "../assets/b4.jpg";

const Posts = (props) => {
  const [featuredBlog, setFeaturedBlog] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/featured`);
        setFeaturedBlog(res.data[0]);
        console.log(res.data)
      }
      catch (err) {

      }
    }

    fetchData();
  }, []);

  const capitalizeFirstLetter = (word) => {
    if (word)
      return word.charAt(0).toUpperCase() + word.slice(1);
    return '';
  };

  const { posts } = props;

  if (!posts || posts.length === 0) return <p>Can not find any posts, sorry</p>;




  return (

    <body>
      <main id="main">


        <section class="category-section">
          <div class="container" data-aos="fade-up">

            <div class="section-header d-flex justify-content-between align-items-center mb-5">
              <h2>Featured Event</h2>
            </div>

            <div class="row">
              <div class="col-md-9 order-md-2">

                <div class="d-lg-flex post-entry-2">
                  <a class="me-4 thumbnail d-inline-block mb-4 mb-lg-0">
                    <Link to={`/event/${featuredBlog.slug}`} className="text-white font-weight-bold">

                      <img src={featuredBlog.thumbnail} alt="" class="img-fluid" />
                    </Link>

                  </a>
                  <div>
                    <div class="post-meta"><span class="date">Featured Event</span> <span class="mx-1">&{featuredBlog.category};</span> <span>On: {featuredBlog.month} {featuredBlog.day} </span></div>
                    <div class="post-meta post-meta2"><span class="date">Ticket Price</span> <span class="mx-1">ksh {featuredBlog.price}</span> </div>
                    <h3><a href="single-post.html">{featuredBlog.title}</a></h3>
                    <p>{featuredBlog.excerpt}</p>
                    <div class="d-flex align-items-center author">
                      <div class="photo"><img src={person} alt="" class="img-fluid" /></div>
                      <div class="name">
                        <h3 class="m-0 p-0">{featuredBlog.event_organiser}</h3>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div class="col-md-3">
                <div class="post-entry-1 border-bottom">
                  <div class="post-meta"><span class="date">Featured Event Info</span></div>
                  <h2 class="mb-2"><a href="single-post.html">Only events that a reach a specific threshold in ticket sales and popularity are
                    featured in the Featured event Section</a></h2>
                </div>

                <div class="post-entry-1 border-bottom">
                  <div class="post-meta"><span class="date">Changes</span> </div>
                  <h2 class="mb-2"><a href="single-post.html">Changes in the featured section are weekly</a></h2>
                  <span class="author mb-3 d-block">Happy sales</span>

                </div>

              </div>
            </div>
          </div>
        </section>

        <section class="category-section">
          <div class="container" data-aos="fade-up">

            <div class="section-header d-flex justify-content-between align-items-center mb-5">
              <h2>All Events</h2>
              <div><a href="category.html" class="more">See All Event Categories</a></div>
            </div>

            <div class="row">
              <div class="col-md-9">

                {posts.map((post) => {
                  return (

                    <div class="d-lg-flex post-entry-2">
                      <a class="me-4 thumbnail mb-4 mb-lg-0 d-inline-block">
                        <Link to={`/event/${post.slug}`}>

                          <img src={post.thumbnail} alt="" class="img-fluid" />

                        </Link>

                      </a>
                      <div>
                        <div class="post-meta"><span class="date">{capitalizeFirstLetter(post.category)}</span> <span class="mx-1">&{post.category};</span> <span>On: {post.month} {post.day}</span></div>
                        <div class="post-meta post-meta2"><span class="date">Ticket Price</span> <span class="mx-1">ksh {post.price}</span> </div>
                        <h3><a href="#">{post.title.substr(0, 50)}...</a></h3>
                        <p>{post.excerpt.substr(0, 60)}...</p>
                        <div class="d-flex align-items-center author">
                          <div class="photo"><img src={person} alt="" class="img-fluid" /></div>
                          <div class="name">
                            <h3 class="m-0 p-0">{post.event_organiser}</h3>
                          </div>

                        </div>
                      </div>
                    </div>


                  );
                })}


                <div class="row">
                  <div class="col-lg-4">
                    <div class="post-entry-1 border-bottom">
                      <a href="single-post.html"></a>
                      <div class="post-meta"><span class="date">Easy</span></div>
                      <h2 class="mb-2"><a href="single-post.html">Make Your Work Easier</a></h2>
                      <p class="mb-4 d-block">Whether you're planning a conference, seminar, or party, our platform has everything you need to make your event a success</p>
                    </div>

                  </div>

                  <div class="col-lg-8">
                    <div class="post-entry-1">
                      <a href="single-post.html"><img src="assets/img/post-landscape-2.jpg" alt="" class="img-fluid" /></a>
                      <div class="post-meta"><span class="date">Our Platform</span> </div>
                      <h2 class="mb-2"><a href="single-post.html">What to we do?</a></h2>
                      <p class="mb-4 d-block">Welcome to our event management system! Our platform is designed to help you create, manage, and track your events with ease.</p>
                    </div>
                  </div>
                </div>
              </div>


              <div class="col-md-3">
                <div class="post-entry-1 border-bottom">
                  <div class="post-meta"><span class="date">Home Page</span> <span class="mx-1">Instructions</span></div>
                  <h2 class="mb-2"><a href="single-post.html">Welcome to our event management system!
                    Create, manage your events all in one place
                    Get started by creating a new event for an organiser or accessing the existing ones</a></h2>
                </div>

                <div class="post-entry-1 border-bottom">
                  <div class="post-meta"><span class="date">Event Creation</span> <span class="mx-1">Instructions</span> </div>
                  <h2 class="mb-2"><a href="single-post.html">Event Creation
                    Let's get started by creating your event
                    Enter the event name, date, time, and required info
                    Select the type of event (conference, seminar, party, etc.)
                    Choose a theme or upload a custom image for your event</a></h2>
                </div>

                <div class="post-entry-1 border-bottom">
                  <div class="post-meta"><span class="date">Event Ticket Creation</span> <span class="mx-1">Instructions</span></div>
                  <h2 class="mb-2"><a href="single-post.html">Proceed to the ticket creation section and input all the necessary details for the ticket.
                    Afterwards, download the ticket to preview its appearance.</a></h2>
                </div>

                <div class="post-entry-1 border-bottom">
                  <div class="post-meta"><span class="date">Ticket Purchase </span> <span class="mx-1">Instructions</span></div>
                  <h2 class="mb-2"><a href="single-post.html">Fill in your mpesa number in the input and you will receive an mpesa prompt.
                    Accept the payment and save the mpesa text for use in downloading your event ticket.</a></h2>
                </div>



                <div class="post-entry-1 border-bottom">
                  <div class="post-meta"><span class="date">Fraud Detection and Prevention</span> <span class="mx-1"></span></div>
                  <h2 class="mb-2"><a href="single-post.html">Your Mpesa code can only be used once so follow the Instructions carefully.
                    Presence of unique ids help prevent ticket duplication.</a></h2>
                </div>

                <div class="post-entry-1 border-bottom">
                  <div class="post-meta"><span class="date">Experiencing Issues?</span> <span class="mx-1"></span> <span></span></div>
                  <h2 class="mb-2"><a href="single-post.html">Incase of any problem,call our toll free numbers or email us for assistance</a></h2>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>


    </body>
  );
}
export default Posts;
