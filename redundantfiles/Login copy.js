import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { login } from '../actions/auth';


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

const Login = ({ login, isAuthenticated }) => {

    const styles = {
        marginTop:'300px'
      };

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        login(email, password);
    };

    const continueWithGoogle = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}/google`)

            window.location.replace(res.data.authorization_url);
        } catch (err) {

        }
    }

    if (isAuthenticated) {
        return <Navigate to='/' />
    }
    return (
        <MDBContainer fluid className="p-3 my-5" style={styles}>

            <MDBRow>

                <MDBCol col='10' md='6'>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Pimage" />
                </MDBCol>

                <MDBCol col='4' md='4'>
                    <form onSubmit={e => onSubmit(e)}>

                        <MDBInput name='email' value={email} onChange={e => onChange(e)} wrapperClass='mb-4' label='Email address' id='formControlLg1' type='email' size="lg" />
                        <MDBInput name='password' value={password} onChange={e => onChange(e)} wrapperClass='mb-4' label='Password' id='formControlLg2' type='password' size="lg" />


                        <div className="d-flex justify-content-between mx-4 mb-4">
                            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                            <Link to='/reset-password'>Reset Password</Link>
                        </div>

                        <MDBBtn type='submit' className="mb-4 w-100" size="lg">Sign in</MDBBtn>
                    </form>
                    <div className="divider d-flex align-items-center my-4">
                        <p className="text-center fw-bold mx-3 mb-0">OR</p>
                    </div>

                    <MDBBtn onClick={continueWithGoogle} className="mb-4 w-100" size="lg" style={{ backgroundColor: '#3b5998' }}>
                        <MDBIcon fab icon="facebook-f" className="mx-2" />
                        Continue with Google
                    </MDBBtn>

                    <Link to='/signup'>
                        <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: 'red' }}>
                            <MDBIcon className="mx-2" />
                            No Account?Sign Up
                        </MDBBtn>
                    </Link>

                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);