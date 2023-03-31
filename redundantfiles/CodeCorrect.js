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

const CodeCorrect = () => {
    const url = 'http://127.0.0.1:8000/api/blog/ticket/go'
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        code: '',

    });

    const { code } = formData;


    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        axios.post(url, {
            code: formData.code,

        })
            .then((res) => {
                console.log(res.data.code)
                const url2 = `/ticket/get`
                navigate(url2);
                // return <Navigate to = 'http://127.0.0.1:8000/api/blog/ticket/create/' />
            });
    };

    return (
        <section className="vh-100">

            <MDBContainer fluid className="p-3 my-5">

                <MDBRow>

                    <MDBCol col='10' md='6'>
                        {/* <img src="https://img.freepik.com/free-psd/ticket-template-summer-festival_23-2148174538.jpg?w=1380&t=st=1680207985~exp=1680208585~hmac=df2298177540ffb90aa68c385fc394d74c1518b03d96e2c0fd268c4ccaad8161" class="img-fluid" alt="Pimage" /> */}
                    </MDBCol>

                    <MDBCol col='4' md='4'>
                        <form onSubmit={e => onSubmit(e)}>

                            <MDBInput name='code' value={code} onChange={e => onChange(e)} wrapperClass='mb-4' label='Mpesacode' id='formControlLg1' type='code' size="lg" />


                            <MDBBtn type='submit' className="mb-4 w-100" size="lg">Submit</MDBBtn>
                        </form>
                        <div className="divider d-flex align-items-center my-4">
                            <p className="text-center fw-bold mx-3 mb-0">OR</p>
                        </div>




                    </MDBCol>

                </MDBRow>

            </MDBContainer>

        </section>
    );
}



export default CodeCorrect;