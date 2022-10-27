import React from 'react';
import '../App.css';

const aboutMe = (visible) => {
    return(
        <div className='aboutMe'>
            <h1 className='introduce me-4 mt-5 text-end'>About Me -</h1>
                <div className="row mt-5">
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
                    </div>
                    <div className="col-5 d-flex justify-content-center">
                        <div className="container">
                        <h1 className='skills text-warning'>S k i l l s</h1>
                        
                        <h2 className='tech-skills mt-4 mt-md-5 text-success font-monospace'>/* Technical Skills */</h2>
                        <div className="skill1 mt-3 mt-md-4 fw-semibold"><p>&nbsp;&nbsp;&nbsp;Full-Stack Web Development (MERN Stack)</p></div>
                        <div className="skill2 mt-2 mt-xl-3 fw-semibold"><p>&nbsp;&nbsp;&nbsp;Android App Development with Kotlin</p></div>
                        <div className="skill3 mt-2 mt-xl-3 fw-semibold"><p>&nbsp;&nbsp;&nbsp;C/C++/Java/JS/Python Programming</p></div>
                        <div className="skill4 mt-2 mt-xl-3 fw-semibold"><p>&nbsp;&nbsp;&nbsp;Data Structures & Algorithms</p></div>
                        <div className="skill5 mt-2 mt-xl-3 fw-semibold"><p>&nbsp;&nbsp;&nbsp;Operating Systems & Bash Shell Scripting</p></div>
                        <div className="skill6 mt-2 mt-xl-3 fw-semibold"><p>&nbsp;&nbsp;&nbsp;Artificial Intelligence & Machine Learning</p></div>
                        <div className="skill7 mt-2 mt-xl-3 fw-semibold"><p>&nbsp;&nbsp;&nbsp;UI/UX Design</p></div>
                        <div className="skill8 mt-2 mt-xl-3 fw-semibold"><p>&nbsp;&nbsp;&nbsp;Cloud Computing</p></div>
                        <div className="skill9 mt-2 mt-xl-3 fw-semibold"><p>&nbsp;&nbsp;&nbsp;Ethical Hacking</p></div>

                        <h2 className='tech-skills mt-4 mt-md-5 text-success font-monospace'>/* Other Skills */</h2>
                        <div className="skill4 mt-3 mt-md-4 fw-semibold"><p>&nbsp;&nbsp;&nbsp;Leadership</p></div>
                        <div className="skill6 mt-2 mt-xl-3 fw-semibold"><p>&nbsp;&nbsp;&nbsp;Time Management</p></div>
                        <div className="skill3 mt-2 mt-xl-3 fw-semibold"><p>&nbsp;&nbsp;&nbsp;Communication</p></div>
                        <div className="skill7 mt-2 mt-xl-3 fw-semibold"><p>&nbsp;&nbsp;&nbsp;Team Work</p></div>
                        <div className="skill5 mt-2 mt-xl-3 fw-semibold"><p>&nbsp;&nbsp;&nbsp;Digital Art & Photoshopping</p></div>
                        </div>
                    </div>
                </div>

                <div className="row mt-4 mt-xl-5">
                    <div className="col-7">
                        <div className="container ms-4 ms-lg-5">
                        <h1 className='skills text-warning mb-4'>I n t e r e s t s</h1>
                        <p className='interests font-monospace'>Coding, Development, Research, Teaching, AI & ML, Social Working, Bug Hunting, Digital Art and Entrepreneurship.</p>
                        </div>
                        </div>
                        <div className="col-5">
                        <div className="container me-4 text-success">
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
    )
}

export default aboutMe;