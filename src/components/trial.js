import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

import styled from "styled-components";
import info1 from "./Event/info1.png";
import info2 from "./Event/info2.png";
import info3 from "./Event/info3.png";

import homeImage from "../assets/hero.png";
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

                <section id="hero-slider" class="hero-slider">
                    <div class="container-md" data-aos="fade-in">
                        <div class="row">
                            <div class="col-12">
                                <div class="swiper sliderFeaturedPosts">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <a class="img-bg d-flex align-items-end" style={{ backgroundImage: `url(${b4})` }}>
                                                <div class="img-bg-inner">
                                                    <h2>The first event template</h2>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="custom-swiper-button-next">
                                        <span class="bi-chevron-right"></span>
                                    </div>
                                    <div class="custom-swiper-button-prev">
                                        <span class="bi-chevron-left"></span>
                                    </div>

                                    <div class="swiper-pagination"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="category-section">
                    <div class="container" data-aos="fade-up">

                        <div class="section-header d-flex justify-content-between align-items-center mb-5">
                            <h2>Maverick Events</h2>
                            <div><a href="category.html" class="more">See All Events</a></div>
                        </div>

                        <div class="row">
                            <div class="col-md-9">

                                <div class="d-lg-flex post-entry-2">
                                    <a href="single-post.html" class="me-4 thumbnail mb-4 mb-lg-0 d-inline-block">
                                        <img src={homeImage} alt="" class="img-fluid" />
                                    </a>
                                    <div>
                                        <div class="post-meta"><span class="date">Culture</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                                        <h3><a href="single-post.html"> Deuce Gruden doing Now?</a></h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat exercitationem magni voluptates dolore?</p>
                                        <div class="d-flex align-items-center author">
                                            <div class="photo"><img src="assets/img/person-2.jpg" alt="" class="img-fluid" /></div>
                                            <div class="name">
                                                <h3 class="m-0 p-0">Wade Warren</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="post-entry-1 border-bottom">
                                            <a href="single-post.html"><img src="assets/img/post-landscape-1.jpg" alt="" class="img-fluid" /></a>
                                            <div class="post-meta"><span class="date">Culture</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                                            <h2 class="mb-2"><a href="single-post.html">11 Work From Home Part-Time Jobs You Can Do Now</a></h2>
                                            <span class="author mb-3 d-block">Jenny Wilson</span>
                                            <p class="mb-4 d-block">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus</p>
                                        </div>

                                        <div class="post-entry-1">
                                            <div class="post-meta"><span class="date">Culture</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                                            <h2 class="mb-2"><a href="single-post.html">5 Great Startup Tips for Female Founders</a></h2>
                                            <span class="author mb-3 d-block">Jenny Wilson</span>
                                        </div>

                                        <div class="post-entry-1">
                                            <div class="post-meta"><span class="date">Culture</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                                            <h2 class="mb-2"><a href="single-post.html">5 Great Startup Tips for Female Founders</a></h2>
                                            <span class="author mb-3 d-block">Jenny Wilson</span>
                                        </div>
                                    </div>

                                    <div class="col-lg-8">
                                        {posts.map((post) => {
                                            return (
                                                <div class="post-entry-1">
                                                    <Link to={`/event/${post.slug}`}>
                                                        <a href="single-post.html"><img src={post.thumbnail} alt="" class="img-fluid" /></a>
                                                    </Link>
                                                    <div class="post-meta"><span class="date">{capitalizeFirstLetter(post.category)}</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                                                    <h2 class="mb-2"><a href="single-post.html">{post.title.substr(0, 50)}...</a></h2>
                                                    <Link to={`/event/${post.slug}`}>

                                                        <span class="author mb-3 d-block">Continue Reading</span>
                                                    </Link>
                                                    <p class="mb-4 d-block">{post.excerpt.substr(0, 60)}...</p>
                                                </div>

                                            );
                                        })}

                                    </div>

                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="post-entry-1 border-bottom">
                                    <div class="post-meta"><span class="date">Culture</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                                    <h2 class="mb-2"><a href="single-post.html">How to Avoid Distraction and Stay Focused During Video Calls?</a></h2>
                                    <span class="author mb-3 d-block">Jenny Wilson</span>
                                </div>

                                <div class="post-entry-1 border-bottom">
                                    <div class="post-meta"><span class="date">Culture</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                                    <h2 class="mb-2"><a href="single-post.html">17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut</a></h2>
                                    <span class="author mb-3 d-block">Jenny Wilson</span>
                                </div>

                                <div class="post-entry-1 border-bottom">
                                    <div class="post-meta"><span class="date">Culture</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                                    <h2 class="mb-2"><a href="single-post.html">9 Half-up/half-down Hairstyles for Long and Medium Hair</a></h2>
                                    <span class="author mb-3 d-block">Jenny Wilson</span>
                                </div>

                                <div class="post-entry-1 border-bottom">
                                    <div class="post-meta"><span class="date">Culture</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                                    <h2 class="mb-2"><a href="single-post.html">Life Insurance And Pregnancy: A Working Mom’s Guide</a></h2>
                                    <span class="author mb-3 d-block">Jenny Wilson</span>
                                </div>

                                <div class="post-entry-1 border-bottom">
                                    <div class="post-meta"><span class="date">Culture</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                                    <h2 class="mb-2"><a href="single-post.html">The Best Homemade Masks for Face (keep the Pimples Away)</a></h2>
                                    <span class="author mb-3 d-block">Jenny Wilson</span>
                                </div>

                                <div class="post-entry-1 border-bottom">
                                    <div class="post-meta"><span class="date">Culture</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                                    <h2 class="mb-2"><a href="single-post.html">10 Life-Changing Hacks Every Working Mom Should Know</a></h2>
                                    <span class="author mb-3 d-block">Jenny Wilson</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>


            <footer id="footer" class="footer">
                <div class="footer-content">
                    <div class="container">

                        <div class="row g-5">
                            <div class="col-lg-4">
                                <h3 class="footer-heading">About Maverick Events</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ab, perspiciatis beatae autem deleniti voluptate nulla a dolores, exercitationem eveniet libero laudantium recusandae officiis qui aliquid blanditiis omnis quae. Explicabo?</p>
                                <p><a href="about.html" class="footer-link-more">Learn More</a></p>
                            </div>
                            <div class="col-6 col-lg-2">
                                <h3 class="footer-heading">Navigation</h3>
                                <ul class="footer-links list-unstyled">
                                    <li><a href="index.html"><i class="bi bi-chevron-right"></i> Home</a></li>
                                    <li><a href="index.html"><i class="bi bi-chevron-right"></i> Blog</a></li>
                                    <li><a href="category.html"><i class="bi bi-chevron-right"></i> Categories</a></li>
                                    <li><a href="single-post.html"><i class="bi bi-chevron-right"></i> Single Post</a></li>
                                    <li><a href="about.html"><i class="bi bi-chevron-right"></i> About us</a></li>
                                    <li><a href="contact.html"><i class="bi bi-chevron-right"></i> Contact</a></li>
                                </ul>
                            </div>
                            <div class="col-6 col-lg-2">
                                <h3 class="footer-heading">Categories</h3>
                                <ul class="footer-links list-unstyled">
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

                            <div class="col-lg-4">
                                <h3 class="footer-heading">Recent Posts</h3>

                                <ul class="footer-links footer-blog-entry list-unstyled">
                                    <li>
                                        <a href="single-post.html" class="d-flex align-items-center">
                                            <img src="assets/img/post-sq-1.jpg" alt="" class="img-fluid me-3" />
                                            <div>
                                                <div class="post-meta d-block"><span class="date">Culture</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                                                <span>5 Great Startup Tips for Female Founders</span>
                                            </div>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="single-post.html" class="d-flex align-items-center">
                                            <img src="assets/img/post-sq-2.jpg" alt="" class="img-fluid me-3" />
                                            <div>
                                                <div class="post-meta d-block"><span class="date">Culture</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                                                <span>What is the son of Football Coach John Gruden, Deuce Gruden doing Now?</span>
                                            </div>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="single-post.html" class="d-flex align-items-center">
                                            <img src="assets/img/post-sq-3.jpg" alt="" class="img-fluid me-3" />
                                            <div>
                                                <div class="post-meta d-block"><span class="date">Culture</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                                                <span>Life Insurance And Pregnancy: A Working Mom’s Guide</span>
                                            </div>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="single-post.html" class="d-flex align-items-center">
                                            <img src="assets/img/post-sq-4.jpg" alt="" class="img-fluid me-3" />
                                            <div>
                                                <div class="post-meta d-block"><span class="date">Culture</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                                                <span>How to Avoid Distraction and Stay Focused During Video Calls?</span>
                                            </div>
                                        </a>
                                    </li>

                                </ul>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="footer-legal">
                    <div class="container">

                        <div class="row justify-content-between">
                            <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                <div class="copyright">
                                    © Copyright <strong><span>Maverick</span></strong>. All Rights Reserved
                                </div>

                                <div class="credits">
                                    Designed by <a href="https://bootstrapmade.com/">Powell</a>
                                </div>

                            </div>

                            <div class="col-md-6">
                                <div class="social-links mb-3 mb-lg-0 text-center text-md-end">
                                    <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                                    <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                                    <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                                    <a href="#" class="google-plus"><i class="bi bi-skype"></i></a>
                                    <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </footer>
        </body>
    );
}
export default Posts;
