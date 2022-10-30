import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import DropdownMenu from '../components/Dropdown-menu';

const Education = () => {
    return (
        <div className="ed">

            <div className="row">
                <Navbar />
                <div className="more list-group list-group-horizontal d-flex justify-content-end">
                    Want to go back to About Me? <Link to="/about" className="link mt-1 ms-2 me-5" style={{ animation: 'slide-left 1s' }}>Click Here</Link>
                </div>
                <div className="col-5 d-flex mt-2 justify-content-start">
                    <div className="ms-4 d-block d-lg-none" style={{ animation: "slide-right 1s" }}>
                        <DropdownMenu />
                    </div>
                </div>
                <div className="col-7 col-lg-12 d-flex justify-content-end justify-content-lg-start" style={{ animation: "slide-left 2s" }}>
                    <p className="hello m-0 mt-5 ms-5 me-5">- Educational Background</p>
                </div>
            </div>

            <div className="edu">
                <div className="uni-name mt-5" style={{ animation: "slide-up 3s" }}>
                    <h5 className='edu-tags d-flex text-success ms-5 mt-2 font-monospace'>{'/* University: */'}</h5>
                    <h3 className='ms-5 text-info'>Maulana Abdul Kalam Azad University of Technology, Kolkata</h3>
                </div>

                <div className="college-name mt-3" style={{ animation: "slide-up 3s" }}>
                    <h5 className='edu-tags d-flex text-success ms-5 mt-2 font-monospace'>{'/* College: */'}</h5>
                    <h3 className='ms-5 text-info'>Dr. Sudhir Chandra Sur Institute of Technology & Sports Complex</h3>
                </div>

                <div className="row" style={{ animation: "slide-up 3s" }}>
                    <div className="col-4">
                        <h5 className='edu-tags d-flex text-success ms-5 mt-2 font-monospace'>{'/* Course: */'}</h5>
                        <h3 className='ms-5 text-info'>Bachelor of Technology</h3>
                    </div>
                    <div className="col-4">
                        <h5 className='edu-tags d-flex text-success ms-5 mt-2 font-monospace'>{'/* Branch: */'}</h5>
                        <h3 className='ms-5 text-info'>Computer Science and Engineering</h3>
                    </div>
                    <div className="col-4">
                        <h5 className='edu-tags d-flex text-success ms-5 mt-2 font-monospace'>{'/* Batch: */'}</h5>
                        <h3 className='ms-5 text-info'>2024</h3>
                    </div>
                </div>
            </div>

            <div className="achievements" style={{ animation: "slide-up 3s" }}>
                <h5 className='d-flex text-success ms-5 mt-5 font-monospace'>{'/* Academic Achievements: */'}</h5>
                <h4 className='ms-5'>
                    Secured CGPA 9.5 in Year 1 and CGPA 9.54 in Year 2
                    <br />
                    Cracked Hackathons
                    <br />
                    Studied Data Structure and Algorithms, Shell scripting and Software Engineering
                </h4>
            </div>

            <Link to='/transcripts' className='link ms-5 fs-5 mt-5 mb-5' style={{ animation: "slide-up 4s" }}>- Click here to view recent transcripts</Link>

            <h2 className='mt-5 ms-5 text-light text-decoration-underline' style={{ animation: "slide-up 4.5s" }}>School Education</h2>

            <div className="edu">
                <div className="uni-name mt-5" style={{ animation: "slide-up 3s" }}>
                    <h5 className='edu-tags d-flex text-success ms-5 mt-2 font-monospace'>{'/* Board: */'}</h5>
                    <h3 className='ms-5 text-info'>Indian School Certificate (ISC)</h3>
                </div>

                <div className="college-name mt-3" style={{ animation: "slide-up 3s" }}>
                    <h5 className='edu-tags d-flex text-success ms-5 mt-2 font-monospace'>{'/* School: */'}</h5>
                    <h3 className='ms-5 text-info'>W.W.A. Cossipore English School, Kolkata</h3>
                </div>

                <div className="row" style={{ animation: "slide-up 3s" }}>
                    <div className="col-4">
                        <h5 className='edu-tags d-flex text-success ms-5 mt-2 font-monospace'>{'/* Class: */'}</h5>
                        <h3 className='ms-5 text-info'>12th</h3>
                    </div>
                    <div className="col-4">
                        <h5 className='edu-tags d-flex text-success ms-5 mt-2 font-monospace'>{'/* Stream: */'}</h5>
                        <h3 className='ms-5 text-info'>Science (PCMB)</h3>
                    </div>
                    <div className="col-4">
                        <h5 className='edu-tags d-flex text-success ms-5 mt-2 font-monospace'>{'/* Batch: */'}</h5>
                        <h3 className='ms-5 text-info'>2020</h3>
                    </div>
                </div>
            </div>

            <div className="achievements" style={{ animation: "slide-up 3s" }}>
                <h5 className='d-flex text-success ms-5 mt-5 font-monospace'>{'/* Academic Achievements: */'}</h5>
                <h4 className='ms-5 achievements'>
                    Scored 90.25% in ISC Board Examinations
                </h4>
            </div>

            <div className="edu">
                <div className="uni-name mt-5" style={{ animation: "slide-up 3s" }}>
                    <h5 className='edu-tags d-flex text-success ms-5 mt-2 font-monospace'>{'/* Board: */'}</h5>
                    <h3 className='ms-5 text-info'>Indian Certificate of Secondary Education (ICSE)</h3>
                </div>

                <div className="college-name mt-3" style={{ animation: "slide-up 3s" }}>
                    <h5 className='edu-tags d-flex text-success ms-5 mt-2 font-monospace'>{'/* School: */'}</h5>
                    <h3 className='ms-5 text-info'>Rishi Aurobindo Memorial Academy, Kolkata</h3>
                </div>

                <div className="row" style={{ animation: "slide-up 3s" }}>
                    <div className="col-4">
                        <h5 className='edu-tags d-flex text-success ms-5 mt-2 font-monospace'>{'/* Class: */'}</h5>
                        <h3 className='ms-5 text-info'>10th</h3>
                    </div>
                    <div className="col-4">
                        <h5 className='edu-tags d-flex text-success ms-5 mt-2 font-monospace'>{'/* Stream: */'}</h5>
                        <h3 className='ms-5 text-info'>Science (PCCMB)</h3>
                    </div>
                    <div className="col-4">
                        <h5 className='edu-tags d-flex text-success ms-5 mt-2 font-monospace'>{'/* Batch: */'}</h5>
                        <h3 className='ms-5 text-info'>2018</h3>
                    </div>
                </div>
            </div>

            <div className="achievements" style={{ animation: "slide-up 3s" }}>
                <h5 className='d-flex text-success ms-5 mt-5 font-monospace'>{'/* Academic Achievements: */'}</h5>
                <h4 className='ms-5 achievements mb-5'>
                    Scored 84.4% in ICSE Board Examinations
                </h4>
            </div>

            <div className="more list-group list-group-horizontal ms-5 mb-5">
                Want to contact me? <Link to="/contact" className="link mt-1 ms-2 me-5" style={{ animation: 'slide-left 1s' }}>Click Here</Link>
            </div>
        </div>
    )
}

export default Education;