import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import DropdownMenu from '../components/Dropdown-menu';

const Contact = () => {
    return (
        <div className="contactMe">
            <div className="row">
                <Navbar />
                <div className="more list-group list-group-horizontal d-flex justify-content-start ms-5">
                    Want to go back to Education? <Link to="/ed" className="link mt-1 ms-2" style={{ animation: 'slide-right 0.5s' }}>Click Here</Link>
                </div>
                <div className="col-5 d-flex mt-2 justify-content-start">
                    <div className="ms-4 d-block d-lg-none" style={{ animation: "slide-left 1s" }}>
                        <DropdownMenu />
                    </div>
                </div>
                <div className="col-7 col-lg-12 d-flex justify-content-end justify-content-lg-end" style={{ animation: "slide-left 0.5s" }}>
                    <p className="hello m-0 mt-5 ms-5 me-5">Contact Me -</p>
                </div>
            </div>

            <div className="contact">
                <div className="mt-5" style={{ animation: "slide-up 3s" }}>
                    <h2 className='edu-tags d-flex text-warning ms-5 mt-2 font-monospace'><p className="var me-3">const</p>Still Interested?</h2>
                    <h4 className='ms-5 text-info list-group list-group-horizontal font-monospace'><p className='me-2 link fs-4'>=</p><p className='me-2 text-primary'>{'{'}</p>Contact Me<p className='ms-2 text-primary'>{'}'}</p>;</h4>
                </div>

                <div className="row ms-5 me-3 mt-0 mt-lg-5" style={{ animation: "slide-up 3s" }}>
                    <div className="col-12 col-lg-6 mt-5 mt-lg-3">
                        <h5 className='text-success mt-2 font-monospace'>{'/* Email: */'}</h5>
                        <h3 className='fs-3 link' onClick={() => window.location = 'mailto:moon1237879@gmail.com'}>moon1237879@gmail.com</h3>
                    </div>
                    <div className="col-12 col-lg-6 mt-3">
                        <h5 className='d-flex text-success mt-2 font-monospace'>{'/* Contact Number: */'}</h5>
                        <h3 className='fs-3 link'>+91 9330284663</h3>
                    </div>
                    <div className="col-12 col-lg-6 mt-3">
                        <h5 className='text-success mt-2 font-monospace'>{'/* LinkedIn: */'}</h5>
                        <h3 className='fs-3 link' onClick={() => window.location.href = 'https://www.linkedin.com/in/soumita-basu-135505202/'}>https://www.linkedin.com/in/soumita-basu-135505202/</h3>
                    </div>
                    <div className="col-12 col-lg-6 mt-3">
                        <h5 className='text-success mt-2 font-monospace'>{'/* Github: */'}</h5>
                        <h3 className='fs-3 link' onClick={() => window.location.href = 'https://github.com/MiSu2002/'}>https://github.com/MiSu2002/</h3>
                    </div>
                    <div className="col-12 col-lg-6 mt-3">
                        <h5 className='text-success mt-2 font-monospace'>{'/* Facebook: */'}</h5>
                        <h3 className='fs-3 link' onClick={() => window.location.href = 'https://www.facebook.com/soumita.basu.980/'}>https://www.facebook.com/soumita.basu.980/</h3>
                    </div>
                    <div className="resume mt-5 mb-5">
                        <h5 className='font-monospace text-success'>{'/* To view/download My Resume */'}</h5>
                        <Link to={require("../assets/SoumitaBasu_Resume.pdf")} target="blank">
                            <button className='mt-3 btn btn-primary text-decoration-underline'>Click Here to view/download My Resume</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;