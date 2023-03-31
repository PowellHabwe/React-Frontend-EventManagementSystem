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

const TicketCreate = () => {
    const url = 'http://127.0.0.1:8000/api/blog/ticket/create'

    const [formData, setFormData] = useState({
        title: '',
        price: '',
        venue: '',

    });

    const { title, price, venue } = formData;


    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        axios.post(url, {
            title: formData.title,
            price: formData.price,
            venue: formData.venue,
        })
    };

    return (
        <section className="vh-100">

            <MDBContainer fluid className="p-3 my-5">

                <MDBRow>

                    <MDBCol col='10' md='6'>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Pimage" />
                    </MDBCol>

                    <MDBCol col='4' md='4'>
                        <form onSubmit={e => onSubmit(e)}>

                            <MDBInput name='title' value={title} onChange={e => onChange(e)} wrapperClass='mb-4' label='title' id='formControlLg1' type='title' size="lg" />
                            <MDBInput name='price' value={price} onChange={e => onChange(e)} wrapperClass='mb-4' label='price' id='formControlLg1' type='price' size="lg" />
                            <MDBInput name='venue' value={venue} onChange={e => onChange(e)} wrapperClass='mb-4' label='venue' id='formControlLg1' type='venue' size="lg" />

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



export default TicketCreate;