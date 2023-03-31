import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../actions/auth';
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

const Signup = ({ signup, isAuthenticated }) => {

    const [accountCreated, setAccountCreated] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        re_password: ''
    });

    const { name, email, password, re_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (password === re_password) {
            signup(name, email, password, re_password);
            setAccountCreated(true);
        }
    };

    const continueWithGoogle = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}/google`)

            window.location.replace(res.data.authorization_url);
        } catch (err) {

        }
    };


    if (isAuthenticated) {
        return <Navigate to='/' />
    }
    if (accountCreated) {
        return <Navigate to='/login' />
    }
    return (
        <section class="vh-100">

            <MDBContainer fluid className="p-3 my-5">

                <MDBRow>

                    <MDBCol col='10' md='6'>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="imagehere" />
                    </MDBCol>

                    <MDBCol col='4' md='4'>
                        <form onSubmit={e => onSubmit(e)}>

                            <MDBInput required name='name' value={name} onChange={e => onChange(e)} wrapperClass='mb-4' label='Name' id='formControlLg1' type='name' size="lg" />
                            <MDBInput required name='email' value={email} onChange={e => onChange(e)} wrapperClass='mb-4' label='Email address' id='formControlLg2' type='email' size="lg" />
                            <MDBInput required name='password' value={password} onChange={e => onChange(e)} wrapperClass='mb-4' label='Password' id='formControlLg3' type='password' size="lg" />
                            <MDBInput required name='re_password' value={re_password} onChange={e => onChange(e)} wrapperClass='mb-4' label='Re_password' id='formControlLg4' type='password' size="lg" />


                            <div className="d-flex justify-content-between mx-4 mb-4">
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                                <Link to='/reset-password'>Reset Password</Link>
                            </div>

                            <MDBBtn type='submit' className="mb-4 w-100" size="lg">Sign Up</MDBBtn>
                        </form>
                        <div className="divider d-flex align-items-center my-4">
                            <p className="text-center fw-bold mx-3 mb-0">OR</p>
                        </div>

                        <MDBBtn onClick={continueWithGoogle} className="mb-4 w-100" size="lg" style={{ backgroundColor: '#3b5998' }}>
                            <MDBIcon fab icon="facebook-f" className="mx-2" />
                            Continue with Google
                        </MDBBtn>

                        <Link to='/login'>
                            <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: 'red' }}>
                                <MDBIcon className="mx-2" />
                                Already have an account? Sign In
                            </MDBBtn>
                        </Link>

                    </MDBCol>

                </MDBRow>

            </MDBContainer>

        </section>

    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signup })(Signup);
