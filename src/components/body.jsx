import React from "react";
import Navbar from "./Navbar";
import DropdownMenu from "./Dropdown-menu";
import ThreeScene from "./three";

const Body = () => {
  return (
    <div className="home position-relative">
      <div className="position-absolute h-100 w-100" style={{ zIndex: 9 }}>
        <Navbar className="mt-3" />
        <div className="d-block d-xxl-none">
          <DropdownMenu />
        </div>
        <p className="hello position-absolute">- Hello, World!</p>
        <div>
          <p className="name d-flex justify-content-center">Soumita Basu</p>
          <p className="line mb-3"></p>
          <p className="overview text-center">
            COMPUTER SCIENCE AND ENGINEERING
            <br />
            UNDERGRADUATE STUDENT
          </p>
        </div>
      </div>
      <div className="position-absolute" style={{ top: 0, left: 0, zIndex: 8 }}>
        <ThreeScene />
      </div>
    </div>
  );
};

export default Body;