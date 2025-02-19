import React from "react";
import "./Navbar.css";
import { BiMenuAltRight } from "react-icons/bi";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary p-md-4 px-3 pt-4">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="/imgs/cookie_logo.jpeg"
            height="40"
            style={{ border: "3px solid black" }}
            alt=""
          />
        </a>
        <button
          className="navbar-toggler"
          style={{
            fontSize: "40px",
            color: "black",
            border: "none",
            borderRadius: "50%",
            outline: "none",
            boxShadow: "none",
          }}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <BiMenuAltRight />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                <h3>Home</h3>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                <h3>About</h3>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/works">
                <h3>Works</h3>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact-us">
                <h3>Contact Us</h3>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
