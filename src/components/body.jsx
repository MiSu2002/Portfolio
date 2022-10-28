import React from "react";
import Navbar from "./Navbar";
import dp from "../assets/dp.jpg";

const Body = () => {
    return(
        <div className="body">
        <Navbar/>
        <div className="main">
        <p className="hello m-0 mt-lg-5 ms-5">- Hello, World!</p>
        <div className="row g-0 p-0 ms-lg-3">
            <div className="col-12 col-xl-8">
            <div className="container d-flex justify-content-center justify-content-lg-start p-0 pt-5 p-xxl-5 ms-xl-4 ms-xxl-5">
            <h1 className="text">
            <p className="thisIs mt-md-3 mt-xl-5"><p className="var me-2">var</p> Hi, I'm <p className="ms-1 equals text-light"> =</p> </p>
            <p className="name mt-5">Soumita Basu</p>
            <p className="designation"><p className="br1">(</p> College Student <p className="br2">)</p><p className="text-light">;</p></p>
            {/* eslint-disable-next-line */}
            <p className="about">
            /* A hardworking and dedicated student pursuing Bachelor of Technology in Computer Science and Engineering with around 1.5 years of experience in Web Development and Cloud Computing and with p deep interest in Entrepreneurship. */
            </p>

            <div className="row g-0 m-0 p-0">
                <div className="col-10 d-flex">
                <p className="more">Want to know more about me? <p className="link">Scroll Down</p></p>
                </div>
                <div className="col-2 d-flex justify-content-end">
                    {/* <img src={arrow} className="arrow"/> */}
                </div>
            </div>
            </h1>
            </div>
            </div>
            <div className=" d-none d-xl-block col-xl-4 mt-5 d-flex justify-content-xxl-center justify-content-xl-center">
                <img src={dp} width={350} className="dp ms-4" alt="Soumita Basu"/>
                {/* <img src={dp1} width={800} className="dp d-none d-xxl-block mt-5"/> */}
                {/* <img src={dp2} width={320}/> */}
            </div>
        </div>
        </div>
        </div>
    )
}

export default Body;