import React from 'react';
import '../App.css';
import Navbar from "../components//Navbar";
import DropdownMenu from "../components/Dropdown-menu";
import { Link } from "react-router-dom";

const aboutMe = () => {
    return(
        <div className='aboutMe'>
            <Navbar/>
            <div className="row">
            <div className="ms-5 more list-group list-group-horizontal" style={{animation: "slide-right 1s"}}>
                        Want to go back to Home? <Link to="/" className="link mt-1 ms-2">Click Here</Link>
                    </div>
                <div className="col-5 d-flex mt-2 justify-content-start">
                    <div className="ms-4 d-block d-lg-none" style={{animation: "slide-right 1s"}}>
                    <DropdownMenu/>
                    </div>
                </div>
                <div className="col-7 col-lg-12" style={{animation: "slide-left 2s"}}>
                <h1 className='introduce me-4 me-lg-5 mt-5 text-end'>About Me -</h1>
                </div>
            </div>

                <div className="row mt-5" style={{animation: "slide-up 2s"}}>
                    <div className="col-7">
                    <h1 className='myself container ms-4 ms-lg-5'>
                        Hello, World!
                        <br/>
                    I am Soumita Basu from Kolkata, India.
                <br/>
                I am a junior undergraduate, currently pursuing B.Tech in Computer Science and Engineering from Maulana Abdul Kalam Azad University of Technology, Kolkata.
                <br/>
                I have gained both: professional and student experiences in some of the most renowned product-based companies like Google, Amazon, etc., and have worked with the latest technologies.
                <br/>
                I am currently working as an Azure Developer Intern in Microsoft-Future Ready Talent. I am also a student in AWS Machine Learning, sponsored by AWS.
                <br/>
                Previously, I have worked in Front-end Development for Graphe, Kolkata, and Android App Development for AICTE-SmartInternz-Google. I have also attended a Forage Engineering Programme hosted by Goldman Sachs. I have also worked as the Core Team Program Lead for the Google Developer Student Clubs on our campus.
                </h1>
                <div className="row mt-4 mt-xl-5">
                    <div className="col-6 d-none d-xl-block">
                        <div className="container ms-4 ms-lg-5">
                        <h1 className='skills text-warning mb-4'>I n t e r e s t s</h1>
                        <p className='interests font-monospace'>Coding, Development, Research, Teaching, AI & ML, Social Working, Bug Hunting, Digital Art and Entrepreneurship.</p>
                        </div>
                        </div>
                        <div className="col-6 d-none d-xl-block">
                        <div className="container me-4 text-info">
                        <h1 className='skills text-warning mb-4'>L a n g u a g e s</h1>
                        <div className="row">
                        <div className="col-5">
                        <div className="lang font-monospace">ENGLISH (fluent)</div>
                        </div>
                        <div className="col-7">
                        <div className="lang font-monospace">HINDI (native)</div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-5">
                        <div className="lang font-monospace">BENGALI (fluent)</div>
                        </div>
                        <div className="col-7">
                        <div className="lang font-monospace">GUJARATI (intermediate)</div>
                        </div>
                        </div>
                        </div>
                        </div>
                </div>
                    </div>
                    <div className="col-5 d-flex justify-content-center">
                        <div className="container">
                        <h1 className='skills text-warning'>S k i l l s</h1>
                        
                        {/* eslint-disable-next-line */}
                        <h2 className='tech-skills mt-4 mt-md-5 text-success font-monospace'>/* Technical Skills */</h2>
                        <div className="skill1 mt-3 mt-md-4 fw-semibold"><p>
                            <div className="skill-text container">
                            Full-Stack Web Development (MERN Stack)
                            </div>
                            </p></div>
                        <div className="skill2 mt-2 mt-xl-3 fw-semibold"><p>
                            <div className="skill-text container">
                            Android App Development with Kotlin
                            </div>
                            </p></div>
                        <div className="skill3 mt-2 mt-xl-3 fw-semibold"><p>
                            <div className="skill-text container">
                            C/C++/Java/JS/Python Programming
                            </div>
                            </p></div>
                        <div className="skill4 mt-2 mt-xl-3 fw-semibold"><p>
                            <div className="skill-text container">
                            Data Structures & Algorithms
                            </div>
                            </p></div>
                        <div className="skill5 mt-2 mt-xl-3 fw-semibold"><p>
                            <div className="skill-text container">
                            Operating Systems & Bash Shell Scripting
                            </div>
                            </p></div>
                        <div className="skill6 mt-2 mt-xl-3 fw-semibold"><p>
                        <div className="skill-text container">
                            Artificial Intelligence & Machine Learning
                            </div>
                            </p></div>
                        <div className="skill7 mt-2 mt-xl-3 fw-semibold"><p>
                        <div className="skill-text container">
                            UI/UX Design
                            </div>
                            </p></div>
                        <div className="skill8 mt-2 mt-xl-3 fw-semibold"><p>
                        <div className="skill-text container">
                            Cloud Computing
                            </div>
                            </p></div>
                        <div className="skill9 mt-2 mt-xl-3 fw-semibold"><p>
                        <div className="skill-text container">
                            Ethical Hacking
                            </div>
                            </p></div>

                        {/* eslint-disable-next-line */}
                        <h2 className='tech-skills mt-4 mt-md-5 text-success font-monospace'>/* Other Skills */</h2>
                        <div className="skill4 mt-3 mt-md-4 fw-semibold"><p>
                        <div className="skill-text container">
                            Leadership
                            </div>
                            </p></div>
                        <div className="skill6 mt-2 mt-xl-3 fw-semibold"><p>
                        <div className="skill-text container">
                            Time Management
                            </div>
                            </p></div>
                        <div className="skill3 mt-2 mt-xl-3 fw-semibold"><p>
                        <div className="skill-text container">
                            Communication
                            </div>
                            </p></div>
                        <div className="skill7 mt-2 mt-xl-3 fw-semibold"><p>
                        <div className="skill-text container">
                            Team Work
                            </div>
                            </p></div>
                        <div className="skill5 mt-2 mt-xl-3 fw-semibold"><p>
                        <div className="skill-text container">
                            Digital Art & Photoshopping
                            </div>
                            </p></div>
                        </div>
                    </div>
                </div>

                <div className="row mt-4 mt-xl-5 mb-5">
                    <div className="col-7 d-block d-xl-none" style={{animation: "slide-left 2s"}}>
                        <div className="container ms-4 ms-lg-5">
                        <h1 className='skills text-warning mb-4'>I n t e r e s t s</h1>
                        <p className='interests font-monospace'>Coding, Development, Research, Teaching, AI & ML, Social Working, Bug Hunting, Digital Art and Entrepreneurship.</p>
                        </div>
                        </div>
                        <div className="col-5 d-block d-xl-none">
                        <div className="container me-4 text-info">
                        <h1 className='skills text-warning mb-4'>L a n g u a g e s</h1>
                        <div className="row">
                        <div className="col-5">
                        <div className="lang font-monospace">ENGLISH (fluent)</div>
                        </div>
                        <div className="col-7">
                        <div className="lang font-monospace">HINDI (native)</div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-5">
                        <div className="lang font-monospace">BENGALI (fluent)</div>
                        </div>
                        <div className="col-7">
                        <div className="lang font-monospace">GUJARATI (intermediate)</div>
                        </div>
                        
                        </div>
                        </div>
                        </div>

                        <div className="more list-group list-group-horizontal d-flex justify-content-end" style={{animation: "slide-right 1s"}}>
                        Want to know about my educational background? <Link to="/ed" className="link mt-1 ms-2 me-3">Click Here</Link>
                    </div>
                </div>
        </div>
    )
}

export default aboutMe;