/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home2";
import Navbar from "../pages/components/Navbar/Navbar";
import About from "../pages/About/About";
import Works from "../pages/Works/Works";
import Contact from "../pages/ContactUs/ContactUs";

export default function AppRoutes() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="*" element={<Home />} />


      </Routes>
    </>
  );
}
