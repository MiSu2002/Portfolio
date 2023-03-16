import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    return (
        <div className="d-none d-xxl-block">
            <nav className="navbar navbar-dark d-flex mt-3">
            <p className="ms-4 ms-lg-5 logo ps-2">Portfolio</p>
            <ul className="navbar-nav list-group list-group-horizontal d-flex justify-content-xl-end justify-content-center ms-5 ms-xl-0 me-xl-3">

                <li className="nav-item me-5">
                    <NavLink to="/" className="nav-link">
                        Home
                    </NavLink>
                </li>

                <li className="nav-item me-5">
                    <NavLink to="/about" className="nav-link">About</NavLink>
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
        </div>
    )
}

export default Navbar;