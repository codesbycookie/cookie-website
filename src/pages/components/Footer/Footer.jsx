import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section bg-dark text-light py-5">
      <div className="container">
        <div className="row justify-content-between align-items-start">
          
          {/* Left: Logo + Description */}
          <div className="col-md-4 mb-4">
            <h3 className="footer-logo"><b>Cookie Inc <span className='colored_text'>.</span></b></h3>
            <p className="ms-1">
              Experience Every Byte <span style={{color: '#c18b13'}}>.</span>
            </p>
          </div>

          {/* Center: Navigation Links */}
          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#about-us">About Us</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact-us">Contact Us</a></li>
            </ul>
          </div>

          {/* Right: Social Media Icons */}
          <div className="col-md-4 mb-4">
            <h5>Follow Us</h5>
            <div className="footer-social d-flex gap-3 mt-3">
              <a href="https://github.com/yourhandle" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://x.com/yourhandle" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
            </div>
          </div>
        </div>

        <hr className="mt-4 border-secondary" />
        <div className="text-center small">
          © {new Date().getFullYear()} Cookie | All rights reserved.
        </div>
      </div>
    </footer>
  );
}
