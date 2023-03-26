import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ activeLink }) => {
    
    const handleAboutClick = () => {
      const aboutSection = document.getElementById('about');
      window.scrollTo({
        top: aboutSection.offsetTop - (window.innerHeight * 0.3),
        behavior: 'smooth'
      });
    };
  
    return (
      <nav className="navbar navbar-dark d-none d-xxl-block p-0">
        <ul className="navbar-nav list-group list-group-horizontal d-flex justify-content-end">
        <li className="nav-item me-5">
          <a href="#home" className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}>
            Home
          </a>
        </li>
        <li className="nav-item me-5">
          <a onClick={handleAboutClick} href="#about" className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}>
            About
          </a>
        </li>
                <li className="nav-item me-5">
                    <NavLink to="/ed" className="nav-link">Education</NavLink>
                </li>
                <li className="nav-item me-5">
        <p className="nav-link">Projects</p> 
      </li>
                <li className="nav-item me-5">
        <p className="nav-link">Career</p> 
      </li>
                <li className="nav-item me-5">
                    <NavLink to="/contact" className="nav-link">Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;