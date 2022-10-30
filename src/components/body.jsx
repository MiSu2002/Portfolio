import React from "react";
import Navbar from "./Navbar";
import DropdownMenu from "./Dropdown-menu";
import { Link } from "react-router-dom";
import dp from "../assets/dp.jpg";

const Body = () => {
    return(
        <div className="body">
        <Navbar/>
        <div className="main">
        <div className="row">
            <div className="col-9">
            <p className="hello m-0 mt-5 ms-5">- Hello, World!</p>
            </div>
            <div className="col-3 d-flex d-block d-lg-none mt-2 justify-content-end">
                <div className="me-4">
                <DropdownMenu/>
                </div>
            </div>
        </div>
        <div className="row g-0 p-0 ms-lg-3">
            <div className="col-12 col-xl-8">
            <div className="container d-flex justify-content-center justify-content-xl-start p-0 pt-5 p-xxl-5 ms-xl-4 ms-xxl-5">
            <h1 className="text">
            <p className="thisIs mt-md-3 mt-xl-5 list-group list-group-horizontal"><p className="var me-2">var</p>&nbsp;Hi, I'm<p className="ms-1 equals text-light">&nbsp;=</p> </p>
            <p className="name mt-5">Soumita Basu</p>
            <p className="designation list-group list-group-horizontal"><p className="br1">(</p>&nbsp;College Student&nbsp;<p className="br2">)</p><p className="text-light">;</p></p>
            {/* eslint-disable-next-line */}
            <p className="about">
            /* A hardworking and dedicated student pursuing Bachelor of Technology in Computer Science and Engineering with around 1.5 years of experience in Web Development and Cloud Computing and with a deep interest in Entrepreneurship. */
            </p>

            <div className="row g-0 m-0 p-0">
                <div className="col-10 d-flex">
                <p className="more list-group list-group-horizontal">Want to know more about me? <Link to="/about" className="link mt-1 ms-2">Click Here</Link></p>
                </div>
                <div className="col-2 d-flex justify-content-end">
                </div>
            </div>
            </h1>
            </div>
            </div>
            <div className=" d-none d-xl-block col-xl-4 mt-5 d-flex justify-content-xxl-center justify-content-xl-center">
                <img src={dp} className="dp ms-4" alt="Soumita Basu"/>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Body;