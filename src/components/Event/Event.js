import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import axios from 'axios';
import info1 from "./info1.png";
import info2 from "./info2.png";
import info3 from "./info3.png";



import Destination2 from "./Destination1.png";
const Event = () => {



  const [blogs, setBlogs] = useState([]);
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

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/`);
        setBlogs(res.data);
      }
      catch (err) {

      }
    }

    fetchBlogs();
  }, []);

  const capitalizeFirstLetter = (word) => {
    if (word)
      return word.charAt(0).toUpperCase() + word.slice(1);
    return '';
  };

 
  const data = [
    {
      image: Destination2,
      title: "Singapore",
      subTitle: "Singapore, officialy thr Republic of Singapore, is a",
      cost: "38,800",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination2,
      title: "Thailand",
      subTitle: "Thailand is a Southeast Asia country. It's known for",
      cost: "54,200",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination2,
      title: "Paris",
      subTitle: "Paris, France's capital, is a major European city and a",
      cost: "45,500",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination2,
      title: "New Zealand",
      subTitle: "New Zealand is an island country in the",
      cost: "24,100",
      duration: "Approx 1 night trip",
    },
    {
      image: Destination2,
      title: "Bora Bora",
      subTitle: "Bora Bora is a small South Pacific island northwest of",
      cost: "95,400",
      duration: "Approx 2 night 2 day trip",
    },
    {
      image: Destination2,
      title: "London",
      subTitle: "London, the capital of England and the United",
      cost: "38,800",
      duration: "Approx 3 night 2 day trip",
    },
  ];

  // const packages = [
  //   "The Weekend Break",
  //   "The Package Holiday",
  //   "The Group Tour",
  //   "Long Term Slow Travel",
  // ];

  const [active, setActive] = useState(1);
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
            <Link to={`/blog/${featuredBlog.slug}`} className="text-white font-weight-bold">
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

      {/* <div className="destinations">
        {posts.map((post) => {
          return (

            <div className="destination">
              <Link to={`/post/${post.id}`}>
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
                <span>1000 Kms</span>
                <span>2 weeks</span>
              </div>
            </div>

          );
        })}
      </div> */}


    </Section>
  );
}


export default Event;


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
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
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
            /* padding: 1rem; */
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
          font-size: 2vh;
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
