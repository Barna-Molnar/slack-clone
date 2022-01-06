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

//Switch was replaced with Routes !!!!
//component was replaced with elements !!!!
// don't need exact keyword

// https://dev.to/gabrlcj/react-router-v6-some-of-the-new-changes-181m
// https://www.robinwieruch.de/react-router/

const AppBody = styled.div`
    height: 100vh;
    display: flex;
`;


function App() {
  const [user, loading] = useAuthState(auth);
  console.log(user);
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
