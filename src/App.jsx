import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './features/components/Home';

//Switch was replaced with Routes !!!!
//component was replaced with elements !!!!
// don't need exact keyword

// https://dev.to/gabrlcj/react-router-v6-some-of-the-new-changes-181m
// https://www.robinwieruch.de/react-router/


function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Routes>
            <Route  path="/" element={<Home/>}/>
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
