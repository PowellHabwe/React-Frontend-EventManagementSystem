

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Category = () => {
  const { category } = useParams()
  // console.log('idddddd',id)
  const [blogs, setBlogs] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('');

  useEffect(() => {
    setCurrentCategory(capitalizeFirstLetter(category));

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const fetchData = async () => {
      try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/blog/category`, { category }, config);
        setBlogs(res.data);
        console.log(res.data)
      }
      catch (err) {

      }
    };

    fetchData();
  }, [category]);

  const capitalizeFirstLetter = (word) => {
    if (word)
      return word.charAt(0).toUpperCase() + word.slice(1);
    return '';
  };

  const getCategoryBlogs = () => {
    let list = [];
    // let result = [];

    blogs.map(blogPost => {
      return list.push(
        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary">{capitalizeFirstLetter(blogPost.category)}</strong>
            <h3 className="mb-0">{blogPost.title}</h3>
            <div className="mb-1 text-muted">{blogPost.month} {blogPost.day}</div>
            <p className="card-text mb-auto">{blogPost.excerpt}</p>
            <Link to={`/event/${blogPost.slug}`} className="stretched-link">Continue readingss</Link>
          </div>
          <div className="col-auto d-none d-lg-block">
            <img width='200' height='250' src={blogPost.thumbnail} alt='thumbnail' />
          </div>
        </div>
      );
    });

    // for (let i = 0; i < list.length; i += 2) {
    //   result.push(
    //     <div key={i} className='row mb-2'>
    //       <div className='col-md-6'>
    //         {list[i]}
    //       </div>
    //       <div className='col-md-6'>
    //         {list[i + 1] ? list[i + 1] : null}
    //       </div>
    //     </div>
    //   )
    // }

    return list;
  };

  return (
    <div className='container mt-3'>
      <h3 className='display-4'>{currentCategory} Category</h3>
      <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex justify-content-between">
          <Link className="p-2 text-muted" to='/category/parties'>Parties,Raves</Link>
          <Link className="p-2 text-muted" to='/category/tours'>Tours,Travel,Cruises</Link>
          <Link className="p-2 text-muted" to='/category/corporate_events'>Corporate Events</Link>
          <Link className="p-2 text-muted" to='/category/charities'>Charities</Link>
          <Link className="p-2 text-muted" to='/category/networking_events'>Networking Events</Link>
          <Link className="p-2 text-muted" to='/category/trade'>Trade Shows</Link>
          <Link className="p-2 text-muted" to='/category/get_togethers'>Get Togethers</Link>
          <Link className="p-2 text-muted" to='/category/conferences'>Conferences</Link>
        </nav>
      </div>
      {getCategoryBlogs()}
    </div>
  );
};

export default Category;
