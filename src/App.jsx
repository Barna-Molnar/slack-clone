import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import styled from '@emotion/styled';
import Chat from './components/Chat';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Login from './components/Login';
import Spinner from 'react-spinkit';

//Switch was replaced with Routes !!!!
//component was replaced with elements !!!!
// don't need exact keyword

// https://dev.to/gabrlcj/react-router-v6-some-of-the-new-changes-181m
// https://www.robinwieruch.de/react-router/

const AppBody = styled.div`
    height: 100vh;
    display: flex;
`;

const AppLaoding = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;



`;
const AppLaodingContent = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-bottom: 100px;
      > img  {
        height: 100px;
        padding: 20px;
        margin-bottom: 40px;
      }

`;


function App() {
  const [user, loading] = useAuthState(auth);
  console.log(user);

  if (loading) {
    return (
      <AppLaoding>
        <AppLaodingContent>
          <img src='https://cdn-icons-png.flaticon.com/512/2111/2111615.png' alt="" />
          <Spinner 
            name='ball-spin-fade-loader'
            color='purple'
            fadeIn='none'
          
          />
        </AppLaodingContent>

      </AppLaoding>
    );
  }

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (

          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Routes>
                <Route path="/" element={<Chat />} >

                </Route>
              </Routes>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
