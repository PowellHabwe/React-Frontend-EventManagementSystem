import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';


import styled from "styled-components";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
export default function Footer({ match }) {

    const { postId } = useParams();
    let [note, setNote] = useState(null)

    useEffect(() => {
        getNote()
    }, [postId])


    let getNote = async () => {
        if (postId === 'new') return

        let response = await fetch(`http://localhost:8000/api/posts/${postId}/`)
        let data = await response.json()
        setNote(data)
    }
    return (
        <FooterContainer>
            <span>{ note?.title }&copy;  </span>

            <ul className="social__links">
                <li>
                    <BsFacebook />
                </li>
                <li>
                    <AiFillInstagram />
                </li>
                <li>
                    <BsLinkedin />
                </li>
            </ul>
        </FooterContainer>
    );
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  background-color: #d0d8ff;
  border-radius: 0.5rem;
  padding: 2.5rem;

  ul {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      a {
        text-decoration: none;
        color: black;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #302ce9;
        }
      }
      svg {
        font-size: 1.3rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #302ce9;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    ul {
      flex-direction: column;
    }
    .social__links {
      flex-direction: row;
    }
  }
`;


