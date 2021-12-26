import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import styled from 'styled-components';

const DIV = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
`

const Home = () => {
    return (
        <DIV>
            <Header/>
            <Sidebar/>
        </DIV>
    )
}

export default Home
