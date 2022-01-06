import styled from '@emotion/styled';
import { Button } from '@mui/material';
import React from 'react'
import { auth, provider } from '../firebase';


const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
`
const LoginInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 100px;
    text-align: center;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.24);

    > img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }
    > button {

        margin-top: 40px;
        background-color: #0a8d48 !important;
        text-transform: inherit !important;
        color: white;

    }
`

const Login = () => {

    const signIn = e => {
        e.preventDefault()
        auth.signInWithPopup(provider).catch(e=> alert(e.message))
    } 
    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img src='https://cdn-icons-png.flaticon.com/512/2111/2111615.png' alt="" />
                <h2>Sign In for Keep Coding React</h2>
                <p>keepCoding.slack.com</p>
                <Button onClick={signIn} >SignIn with Google</Button>
            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default Login
