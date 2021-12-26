import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './features/components/Home';
import Header from './features/components/Header';
import Sidebar from './features/components/Sidebar';
import styled from '@emotion/styled';

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
  return (
    <div className="App">
      <Router>
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Routes>
              <Route path="/" />
            </Routes>
          </AppBody>
        </>
      </Router>
    </div>
  );
}

export default App;
