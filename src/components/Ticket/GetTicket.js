import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

const GetTicket = () => {
    const navigate = useNavigate();
    const url = 'http://127.0.0.1:8000/api/blog/'

    const [formData, setFormData] = useState({
        ticketCode: '',
    });
    // this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    // this.roomButtonPressed = this.roomButtonPressed.bind(this);

    const { ticketCode } = formData;


    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                code: formData.ticketCode,
            }),
        };

        fetch("http://127.0.0.1:8000/api/blog/ticket/get", requestOptions)
            .then((response) => {
                if (response.ok) {
                    console.log(response)
                    const url2 = `/ticket/${formData.ticketCode}`
                    navigate(url2);
                } else {
                    console.log('error')
                }
            })
            .catch((error) => {
                console.log(error);
            });


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

                            <MDBInput name='ticketCode' value={ticketCode} onChange={e => onChange(e)} wrapperClass='mb-4' label='ticketCode' id='formControlLg1' type='ticketCode' size="lg" />

                            <MDBBtn type='submit' className="mb-4 w-100" size="lg">Submit</MDBBtn>
                        </form>

                    </MDBCol>

                </MDBRow>

            </MDBContainer>

        </section>

    );
}



export default GetTicket;