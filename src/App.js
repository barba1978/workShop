import React from 'react';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import {NavBar} from "../src/navBar/NavBar.js"
import  {AboutUs} from "../src/components/AboutUs.js"
import  {Home} from "../src/components/Home.js"
import  {Guest} from "../src/components/Guest.js"
import {Host} from "../src/components/Host.js"

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/host" element={<Host />} />
        <Route path="/guest" element={<Guest />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route index path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}



export default App;
