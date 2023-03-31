
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
// import axios from 'axios';
import { reset_password } from '../actions/auth';

import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
} from 'mdb-react-ui-kit';

const ResetPassword = ({ reset_password }) => {
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        email: ''
    });

    const { email } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        reset_password(email);
        setRequestSent(true);
    };

    if (requestSent) {
        return <Navigate to='/' />
    }

    return (
        <MDBContainer fluid className="p-3 my-5 h-custom">

            <MDBRow>

                <MDBCol col='10' md='6'>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample" />
                </MDBCol>

                <MDBCol col='4' md='6'>

                    <div className="d-flex flex-row align-items-center justify-content-center">

                        <p className="lead fw-normal mb-0 me-3">Sign in with</p>

                        <MDBBtn floating size='md' tag='a' className='me-2'>
                            <MDBIcon fab icon='facebook-f' />
                        </MDBBtn>

                        <MDBBtn floating size='md' tag='a' className='me-2'>
                            <MDBIcon fab icon='twitter' />
                        </MDBBtn>

                        <MDBBtn floating size='md' tag='a' className='me-2'>
                            <MDBIcon fab icon='linkedin-in' />
                        </MDBBtn>

                    </div>

                    <div className="divider d-flex align-items-center my-4">
                        <p className="text-center fw-bold mx-3 mb-0">Change Password</p>
                    </div>

                    <form onSubmit={e => onSubmit(e)}>

                        <MDBInput minLength='6' required value={email} name='email' wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" onChange={e => onChange(e)} />

                        <div className="d-flex justify-content-between mb-4">

                            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                            <a href="!#">Forgot password?</a>
                        </div>

                        <div className='text-center text-md-start mt-4 pt-2'>
                            <MDBBtn className="mb-0 px-5" size='lg'>
                                Change Password
                            </MDBBtn>
                            <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="#!" className="link-danger">Register</a></p>
                        </div>
                    </form>
                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
}

export default connect(null, { reset_password })(ResetPassword);