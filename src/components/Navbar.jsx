import React from "react";

const Navbar = (props) => {
  
    return (
      <nav className="navbar navbar-dark d-none d-xxl-block p-0">
        <ul className="navbar-nav list-group list-group-horizontal d-flex justify-content-end">
        <li className="nav-item me-5">
          <a href="#home" className={`nav-link ${props.activeLink === 'home' ? 'active' : ''}`}>
            Home
          </a>
        </li>
        <li className="nav-item me-5">
          <a href="#about" className={`nav-link ${props.activeLink === 'about' ? 'active' : ''}`}>
            About
          </a>
        </li>
                <li className="nav-item me-5">
                    <a href="#education" className={`nav-link ${props.activeLink === 'education' ? 'active' : ''}`}>Education</a>
                </li>

                <li className="nav-item me-5">
        <p className="nav-link">Projects</p> 
      </li>
                <li className="nav-item me-5">
        <p className="nav-link">Career</p> 
      </li>
                <li className="nav-item me-5">
                <p className="nav-link">Contact</p> 
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;