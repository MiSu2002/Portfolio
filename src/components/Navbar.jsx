import React from "react";

const Navbar = (props) => {
    
    const handleAboutClick = () => {
      const aboutSection = document.getElementById('about');
      window.scrollTo({
        top: aboutSection.offsetTop + (window.innerHeight * 0.3),
        behavior: 'smooth'
      });
    };
  
    return (
      <nav className="navbar navbar-dark d-none d-xxl-block p-0">
        <ul className="navbar-nav list-group list-group-horizontal d-flex justify-content-end">
        <li className="nav-item me-5">
          <a href="#home" className={`nav-link ${props.activeLink === 'home' ? 'active' : ''}`}>
            Home
          </a>
        </li>
        <li className="nav-item me-5">
          <a onClick={handleAboutClick} href="#about" className={`nav-link ${props.activeLink === 'about' ? 'active' : ''}`}>
            About
          </a>
        </li>
                <li className="nav-item me-5">
                    <li className="nav-link">Education</li>
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