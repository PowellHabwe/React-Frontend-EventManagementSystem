

import React, { useState, useEffect, Fragment } from 'react';
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

        

        <div class="d-lg-flex post-entry-2">
          <a href="single-post.html" class="me-4 thumbnail d-inline-block mb-4 mb-lg-0">
            <img src={blogPost.thumbnail} alt="" class="img-fluid" />
          </a>
          <div>
            <div class="post-meta"><span class="date">{capitalizeFirstLetter(blogPost.category)}</span>: <span class="mx-1"></span> <span>Browse</span></div>
            <h3><a href="single-post.html">{blogPost.title}</a></h3>
            <p>{blogPost.month} {blogPost.day}</p>
            <p>{blogPost.excerpt}</p>
            <p> <Link to={`/event/${blogPost.slug}`} className="stretched-link">Continue reading</Link></p>
            {/* <div class="d-flex align-items-center author">
              <div class="photo"><img src={blogPost.thumbnail} alt="" class="img-fluid" /></div>
              <div class="name">
                <h3 class="m-0 p-0">Wade Warren</h3>
              </div>
            </div> */}
          </div>


        </div>


      );
    });


    return list;
  };

  return (
    <Fragment>
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
        <section class="category-section">
          <div class="container" data-aos="fade-up">

            <div class="section-header d-flex justify-content-between align-items-center mb-5">
              <h2>Category</h2>
              <div><a href="category.html" class="more">All</a></div>
            </div>

            <div class="row">
              <div class="col-md-9 order-md-2">

                {getCategoryBlogs()}

                <div class="row">
                  <div class="col-lg-4">
                    <div class="post-entry-1 border-bottom">
                      {/* <a href="single-post.html"><img src="assets/img/post-landscape-5.jpg" alt="" class="img-fluid" /></a> */}
                      <div class="post-meta"><span class="date">Business</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                      <h2 class="mb-2"><a href="single-post.html">11 Work From Home Part-Time Jobs You Can Do Now</a></h2>
                      <span class="author mb-3 d-block">Jenny Wilson</span>
                      <p class="mb-4 d-block">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus</p>
                    </div>

                    <div class="post-entry-1">
                      <div class="post-meta"><span class="date">Business</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                      <h2 class="mb-2"><a href="single-post.html">5 Great Startup Tips for Female Founders</a></h2>
                      <span class="author mb-3 d-block">Jenny Wilson</span>
                    </div>
                  </div>
                  <div class="col-lg-8">
                    <div class="post-entry-1">
                      <a href="single-post.html"><img src="assets/img/post-landscape-7.jpg" alt="" class="img-fluid" /></a>
                      <div class="post-meta"><span class="date">Business</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                      <h2 class="mb-2"><a href="single-post.html">How to Avoid Distraction and Stay Focused During Video Calls?</a></h2>
                      <span class="author mb-3 d-block">Jenny Wilson</span>
                      <p class="mb-4 d-block">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="post-entry-1 border-bottom">
                  <div class="post-meta"><span class="date">Business</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                  <h2 class="mb-2"><a href="single-post.html">How to Avoid Distraction and Stay Focused During Video Calls?</a></h2>
                  <span class="author mb-3 d-block">Jenny Wilson</span>
                </div>

                <div class="post-entry-1 border-bottom">
                  <div class="post-meta"><span class="date">Business</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                  <h2 class="mb-2"><a href="single-post.html">17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut</a></h2>
                  <span class="author mb-3 d-block">Jenny Wilson</span>
                </div>

                <div class="post-entry-1 border-bottom">
                  <div class="post-meta"><span class="date">Business</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                  <h2 class="mb-2"><a href="single-post.html">9 Half-up/half-down Hairstyles for Long and Medium Hair</a></h2>
                  <span class="author mb-3 d-block">Jenny Wilson</span>
                </div>

                <div class="post-entry-1 border-bottom">
                  <div class="post-meta"><span class="date">Business</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                  <h2 class="mb-2"><a href="single-post.html">Life Insurance And Pregnancy: A Working Mom’s Guide</a></h2>
                  <span class="author mb-3 d-block">Jenny Wilson</span>
                </div>

                <div class="post-entry-1 border-bottom">
                  <div class="post-meta"><span class="date">Business</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                  <h2 class="mb-2"><a href="single-post.html">The Best Homemade Masks for Face (keep the Pimples Away)</a></h2>
                  <span class="author mb-3 d-block">Jenny Wilson</span>
                </div>

                <div class="post-entry-1 border-bottom">
                  <div class="post-meta"><span class="date">Business</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                  <h2 class="mb-2"><a href="single-post.html">10 Life-Changing Hacks Every Working Mom Should Know</a></h2>
                  <span class="author mb-3 d-block">Jenny Wilson</span>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Category;
