import React from 'react'
import Home from '../Pages/Home';
import Footer from '../Components/Footer';
import Login from '../Pages/Login';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

const Rout = () => {
  return (
    <div>
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/login" element={<Login/>}/>

        </Routes>
    </div>
  )
}

export default Rout