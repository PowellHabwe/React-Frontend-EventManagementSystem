import React, { useState, useEffect, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from "styled-components";

import './ticket.css'
const Ticket = () => {


    const { ticketCode } = useParams();


    const [data, setData] = useState({
        tickets: [],
    });;

    useEffect(() => {
        axios.get('http://localhost:8000/api/blog/ticket/' + ticketCode).then((res) => {
            setData({
                tickets: res.data,
            });
            console.log(res.data);
        });
    }, [setData]);

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'your_ticket',
        OneAfterPrint: () => alert('print success')
    })

    return (
        <section className="vh-100">

            <div ref={componentRef}>

                <div className="muck-up">
                    <div className="overlay"></div>
                    <div className="top">
                        <div className="nav">
                            <span className="ion-android-menu"></span>
                            <p>By Maverick Events</p>
                            <span className="ion-ios-more-outline"></span>
                        </div>
                        <div className="user-profile">
                            <img src="https://cdn-icons-png.flaticon.com/512/10238/10238858.png" />
                            <div class="user-details">
                                <h4>{data.tickets.venue}</h4>
                            </div>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="filter-btn">
                        <a id="one" href="#"><i class="ion-ios-checkmark-outline"></i></a>
                        <a id="two" href="#"><i class="ion-ios-alarm-outline"></i></a>
                        <a id="three" href="#"><i class="ion-ios-heart-outline"></i></a>
                        <a id="all" href="#"><i class="ion-ios-star-outline"></i></a>
                        <span class="toggle-btn ion-android-funnel"></span>
                    </div>
                    <div class="clearfix"></div>
                    <div class="bottom">
                        <div class="title">
                            <h3>{data.tickets.title}</h3>
                            <small>February 8,2015</small>
                        </div>
                        <ul class="tasks">
                            <li class="one red">
                                <span class="task-title">Venue</span>
                                {/* <span class="task-time">5pm</span> */}
                                <span class="task-cat">{data.tickets.venue}</span>

                            </li>
                            <li class="one red">
                                <span class="task-title">Price</span>
                                {/* <span class="task-time">3pm</span> */}
                                <span class="task-cat">ksh{data.tickets.price}</span>

                            </li>
                            <li class="two green">
                                <span class="task-title">Ticket Id</span>
                                {/* <span class="task-time">2pm</span> */}
                                <span class="task-cat">{data.tickets.id}</span>

                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className='dbutton'>
                <button onClick={handlePrint} >Print this Out</button>

            </div>
        </section>

    );
}



export default Ticket;



