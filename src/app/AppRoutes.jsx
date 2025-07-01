import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import Navbar from "../pages/components/Navbar/Navbar";
import About from "../pages/About/About";
import Works from "../pages/Works/Works";
import Contact from "../pages/ContactUs/ContactUs";
import Greet from '../pages/Greet/Greet'

export default function AppRoutes() {
  return (
    <>
      {/* <Navbar /> */}

      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works/>} />
        <Route path="/contact-us" element={<Contact/>} /> */}
<Route path='*' element={<Greet/>}/>
      </Routes>
    </>
  );
}
