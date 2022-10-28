import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark d-none d-lg-block mt-3">
    <ul className="navbar-nav list-group list-group-horizontal d-flex justify-content-xl-end justify-content-center ms-5 ms-xl-0 me-xl-3">
      
      <li className="nav-item me-5">
      <Link to="/" className="nav-link active">
        Home
        </Link>
      </li>
      
      <li className="nav-item me-5">
        <Link to="/about" className="nav-link">About Me</Link>
      </li>
      <li className="nav-item me-5">
        <p className="nav-link">Education</p> 
      </li>
      <li className="nav-item me-5">
        <p className="nav-link">Career</p> 
      </li>
      <li className="nav-item me-5">
        <p className="nav-link">Achievements</p> 
      </li>
      <li className="nav-item me-5">
        <p className="nav-link">Contact Me</p> 
      </li>
    </ul>
</nav>
    )
}

export default Navbar;