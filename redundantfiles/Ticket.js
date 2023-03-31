import React, { useState, useEffect, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';


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
        <section class="vh-100">

            <div ref={componentRef}>
                <div>this is the ticketdetail</div>
                <div>{data.tickets.title}</div>
                <div>{data.tickets.price}</div>
                <div>{data.tickets.venue}</div>

            </div>
            <button onClick={handlePrint}>Print this Out</button>
        </section>

    );
}



export default Ticket;