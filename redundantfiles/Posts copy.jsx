import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

import styled from "styled-components";
import info1 from "./Event/info1.png";
import info2 from "./Event/info2.png";
import info3 from "./Event/info3.png";

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
    <Section id="recommend">
      <div className="title">
        <h2>Featured Event</h2>
      </div>
      <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark container">
        <div className="col-md-6 px-0">
          <h1 className="display-4 font-italic">{featuredBlog.title}</h1>
          <p className="lead my-3">{featuredBlog.excerpt}</p>
          <p className="lead mb-0">
            <Link to={`/event/${featuredBlog.slug}`} className="text-white font-weight-bold">
              Continue reading...
            </Link>
          </p>
        </div>
      </div>
      <div className="packages">
        <ul>
          <Link className="p-2 text-muted" to='/category/parties'>Parties,Raves</Link>
          <Link className="p-2 text-muted" to='/category/tours'>Tours,Travel,Cruises</Link>
          <Link className="p-2 text-muted" to='/category/corporate_events'>Corporate Events</Link>
          <Link className="p-2 text-muted" to='/category/charities'>Charities</Link>
          <Link className="p-2 text-muted" to='/category/networking_events'>Networking Events</Link>
          <Link className="p-2 text-muted" to='/category/trade'>Trade Shows</Link>
          <Link className="p-2 text-muted" to='/category/get_togethers'>Get Togethers</Link>
          <Link className="p-2 text-muted" to='/category/conferences'>Conferences</Link>

        </ul>
      </div>


      <div className="destinations">
        {posts.map((post) => {
          return (

            <div className="destination">
              <Link to={`/event/${post.slug}`}>
                <img src={post.thumbnail} alt="" />
              </Link>


              <h3>{post.title.substr(0, 50)}...</h3>
              {post.excerpt.substr(0, 60)}...

              <div className="info">
                <div className="services">
                  <img src={info1} alt="" />
                  <img src={info2} alt="" />
                  <img src={info3} alt="" />
                </div>
                <h4>Ksh{1000}</h4>
              </div>
              <div className="distance">
                <Link to={`/event/${post.slug}`}>
                  <span>Continue Reading</span>
                </Link>
                <span>{capitalizeFirstLetter(post.category)}</span>
              </div>
            </div>

          );
        })}
      </div>
    </Section>
  );
}

export default Posts;


const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(4 , 1fr);
    gap: 3rem;
    padding: 0 9rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            // padding: 1rem; 
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 0.8rem;
          // font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;

