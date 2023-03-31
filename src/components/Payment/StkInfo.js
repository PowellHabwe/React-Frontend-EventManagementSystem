import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';

import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';

const StkInfo = () => {
    const url = 'http://127.0.0.1:8000/api/blog/online/lipa'

    const [formData, setFormData] = useState({
        phone_number: '',
        ticket_title: '',

    });

    const { phone_number,ticket_title  } = formData;


    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        axios.post(url, {
            phone_number: formData.phone_number,
            ticket_title: formData.ticket_title
        })
    };

    return (

        <section className="vh-100">

            <MDBContainer fluid className="p-3 my-5">

                <MDBRow>

                    <MDBCol col='10' md='6'>
                        <img src="https://freesvg.org/img/cash1.png" class="img-fluid" alt="Pimage" />
                    </MDBCol>

                    <MDBCol col='4' md='4'>
                        <form onSubmit={e => onSubmit(e)}>

                            <MDBInput name='phone_number' value={phone_number} onChange={e => onChange(e)} wrapperClass='mb-4' label='Phone number' id='formControlLg1' type='phone_number' size="lg" />
                            <MDBInput name='ticket_title' value={ticket_title} onChange={e => onChange(e)} wrapperClass='mb-4' label='Ticket title' id='formControlLg1' type='ticket_title' size="lg" />

                            <div className="d-flex justify-content-between mx-4 mb-4">
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                                <Link to='/reset-password'>Reset Password</Link>
                            </div>

                            <MDBBtn type='submit' className="mb-4 w-100" size="lg">Submit</MDBBtn>
                        </form>
                        <div className="divider d-flex align-items-center my-4">
                            <p className="text-center fw-bold mx-3 mb-0">OR</p>
                        </div>


                        <Link to='/signup'>
                            <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: 'red' }}>
                                <MDBIcon className="mx-2" />
                                get your ticket
                            </MDBBtn>
                        </Link>

                    </MDBCol>

                </MDBRow>

            </MDBContainer>

        </section>
    );
}



export default StkInfo;