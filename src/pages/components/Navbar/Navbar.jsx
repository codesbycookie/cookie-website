/* eslint-disable no-unused-vars */
import React from "react";
import "./Navbar.css";
import { BiMenuAltRight } from "react-icons/bi";
import { NavLink , Link} from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar  sticky-top px-3 pt-4">
        <div className="container-fluid">
          <a className="navbar-brand" style={{ fontSize: "30px" }} href="#">
            <b>
              Cookie Inc <span style={{ color: "#c18b13" }}>.</span>
            </b>
          </a>
          <button
            className="btn d-block"
            type="button"
            style={{ backgroundColor: "transparent", border: "none" }}
            // data-bs-toggle="offcanvas"
            // data-bs-target="#offcanvasNavbar"
            // aria-controls="offcanvasNavbar"
            // onClick={(e) => {
            //   const img = e.currentTarget.querySelector(".cookie-ham");
            //   img.classList.toggle("rotate-once");
            // }}
          >
            <img
              src="/imgs/cookie-ham.png"
              className="cookie-ham"
              style={{ height: 45, width: 45 }}
              alt="hamburger icon"
            />
          </button>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
            Cookie Inc
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" data-bs-dismiss="offcanvas">
                <h4>Home</h4>
              </NavLink>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about"
                data-bs-dismiss="offcanvas"
              >
                <h4>About</h4>
              </Link>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/works"
                data-bs-dismiss="offcanvas"
              >
                <h4>Works</h4>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/contact-us"
                data-bs-dismiss="offcanvas"
              >
                <h4>Contact Us</h4>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
