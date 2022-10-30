import React from "react";
import {Link} from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import menu from "../assets/more.png";

const DropdownMenu = () => {
    return(
        <div>
          <Dropdown className="dropdown">
      <Dropdown.Toggle className="toggle" variant="transparent">
      <img src={menu} width={38} height={35} alt="Tap to reveal menu" className="mt-4 "/>
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-menu">
        <Dropdown.Item><Link to="/" className="nav-link">Home</Link></Dropdown.Item>
        <Dropdown.Item><Link to="/about" className="nav-link">About Me</Link></Dropdown.Item>
        <Dropdown.Item><Link to="/ed" className="nav-link">Education</Link></Dropdown.Item>
        {/* <Dropdown.Item><Link to="/career" className="nav-link">Career</Link></Dropdown.Item>
        <Dropdown.Item><Link to="/projects" className="nav-link">Projects</Link></Dropdown.Item>
        <Dropdown.Item><Link to="/contact" className="nav-link">Contact Me</Link></Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>

</div>
    )
}

export default DropdownMenu;