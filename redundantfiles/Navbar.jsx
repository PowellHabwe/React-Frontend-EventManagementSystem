import React, { Fragment, useState } from "react";
import styled from "styled-components";
// import logo from "../assets/logo.png";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { VscChromeClose } from "react-icons/vsc";

import { Link, Navigate } from 'react-router-dom';
import { logout } from '../actions/auth';
import { connect } from 'react-redux';

const Navbar = ({ logout, isAuthenticated }) => {
  // const [navbarState, setNavbarState] = useState(false);

  const [redirect, setRedirect] = useState(false);

  const logout_user = () => {
    logout();
    setRedirect(true);
  };

  const guestLinks = () => (
    <Fragment>
      <li className='nav-item'>
        <Link className='nav-link' to='/login'>Login</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/signup'>Sign Up</Link>
      </li>
    </Fragment>
  );

  const authLinks = () => (
    <li className='nav-item'>
      <a className='nav-link' href='#!' onClick={logout_user}>Logout</a>
    </li>
  );
  return (
    <Fragment>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link className='navbar-brand' to='/'>Auth System</Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/'>Home <span className='sr-only'>(current)</span></Link>
            </li>

            <li className='nav-item active'>
              <Link className='nav-link' to='/event'>Event</Link>
            </li>

            {isAuthenticated ? authLinks() : guestLinks()}
          </ul>
        </div>
      </nav>
      {redirect ? <Navigate to='/' /> : <Fragment></Fragment>}
    </Fragment>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Navbar);

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .brand {
    .container {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;
      font-size: 1.2rem;
      font-weight: 900;
      text-transform: uppercase;
    }
    .toggle {
      display: none;
    }
  }
  ul {
    display: flex;
    gap: 1rem;
    list-style-type: none;
    li {
      a {
        text-decoration: none;
        color: #0077b6;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #023e8a;
        }
      }
      &:first-of-type {
        a {
          color: #023e8a;
          font-weight: 900;
        }
      }
    }
  }
  button {
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 1rem;
    border: none;
    color: white;
    background-color: #48cae4;
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: #023e8a;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .toggle {
        display: block;
      }
    }
    ul {
      display: none;
    }
    button {
      display: none;
    }
  }
`;

// const ResponsiveNav = styled.div`
//   display: flex;
//   position: absolute;
//   z-index: 5;
//   top: ${({ state }) => (state ? "50px" : "-400px")};
//   background-color: white;
//   height: 30vh;
//   width: 100%;
//   align-items: center;
//   transition: 0.3s ease-in-out;
//   ul {
//     list-style-type: none;
//     width: 100%;
//     li {
//       width: 100%;
//       margin: 1rem 0;
//       margin-left: 2rem;

//       a {
//         text-decoration: none;
//         color: #0077b6;
//         font-size: 1.2rem;
//         transition: 0.1s ease-in-out;
//         &:hover {
//           color: #023e8a;
//         }
//       }
//       &:first-of-type {
//         a {
//           color: #023e8a;
//           font-weight: 900;
//         }
//       }
//     }
//   }
// `;
