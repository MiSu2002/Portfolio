import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    return (

        <nav className="navbar navbar-dark d-none d-lg-block mt-3">
            <ul className="navbar-nav list-group list-group-horizontal d-flex justify-content-xl-end justify-content-center ms-5 ms-xl-0 me-xl-3">

                <li className="nav-item me-5">
                    <NavLink to="/" className="nav-link text-info">
                        Home
                    </NavLink>
                </li>

                <li className="nav-item me-5">
                    <NavLink to="/about" className="nav-link">About Me</NavLink>
                </li>
                <li className="nav-item me-5">
                    <NavLink to="/ed" className="nav-link">Education</NavLink>
                </li>
                {/* <li className="nav-item me-5">
        <p className="nav-link">Career</p> 
      </li>
      <li className="nav-item me-5">
        <p className="nav-link">Projects</p> 
      </li> */}
                <li className="nav-item me-5">
                    <NavLink to="/contact" className="nav-link">Contact Me</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;