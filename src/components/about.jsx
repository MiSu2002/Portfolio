import React, {useState, useEffect} from "react";
import Skills from "./skills";

const progressesData = [
    { skill: "C++", percent: 93 },
    { skill: "Java / OOP", percent: 90 },
    { skill: "React", percent: 93 },
    { skill: "Power Platform", percent: 90 },
    { skill: "MongoDB / SQL", percent: 75 },
    { skill: "DSA", percent: 88 },
    { skill: "NodeJS", percent: 85 },
    { skill: "AI / ML", percent: 75 },
    { skill: "Linux", percent: 90 },
    { skill: "CyberSecurity", percent: 85 },
    { skill: "Cloud Computing", percent: 88 },
  ];
  
  const progressesData2 = [
    { skill: "Leadership", percent: 9.7 },
    { skill: "Communication", percent: 9.4 },
    { skill: "Time Management", percent: 9.1 },
    { skill: "Teamwork", percent: 9 }
  ];

const About = () => {
    const [helloRotate, setHelloRotate] = useState(false);
    const [showAbout, setShowAbout] = useState(false);

      useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight * 0.15) {
                setShowAbout(true);
              }
          if (window.scrollY > window.innerHeight * 1.8) {
            setHelloRotate(true);
          } else {
            setHelloRotate(false);
          }
          // Fade in each paragraph when it's in view
        const paragraphs = document.querySelectorAll('.about-content p, .about-content .divider');
        paragraphs.forEach((p) => {
            const position = p.getBoundingClientRect();
            if (position.top < window.innerHeight * 0.8) {
                p.style.opacity = 1;
                p.style.transition = 'opacity 1s';
            } else {
                p.style.opacity = 0;
                p.style.transition = 'opacity 1s';
            }
        });
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

    return(
            <section id="about" style={{overflowX: 'hidden'}}>
                {showAbout && (
                <div>
                <div className="text-white ms-4 ms-lg-5" style={{overflowX: 'hidden'}}>
                <style>
                    {`
                    .about-content{
                        font-family: Poppins;
                        width: 50%;
                        margin-top: 3vh;
                    }

                    .about-content .para{
                        font-size: calc(0.7rem + 0.6vw);
                        line-height: 1.7;
                    }

                    @media screen and (max-width: 1199px){
                        .about-content{
                            width: 85%;
                        }
                    }
                    @media screen and (min-width: 1200px) and (max-width: 1599px){
                        .about-content{
                            width: 65%;
                        }
                    }
                    .hi{
                        margin-left: -5%;
                        color: rgb(0, 172, 172,0.7);
                    }
                    .divider{
                        border: 1px solid rgb(0, 172, 172,0.1);
                        background-color: rgb(0, 172, 172,0.1);
                    }
                    .hello1{
                        top: 110vh;
                        margin-left: -5vh;
                    }
                    .rotate1{
                        margin-top: 10vh;
                        margin-left: 47%;
                    }                    
                    `}
                </style>
                    <div className="mb-5 p-3 mx-auto about-content">
                    <p className="mb-5 hi"> - Hello, World!</p>
                    <div className="divider mt-lg-5 mb-lg-5"></div>
                    <p className="mt-4 p-3 p-xl-4 para">I am Soumita Basu from Kolkata, India.</p>
                    <div className="divider mt-lg-5 mb-lg-5"></div>
                    <p className="mt-4 p-3 p-xl-4 para">I am a senior undergraduate, currently pursuing B.Tech in Computer Science and Engineering from Maulana Abdul Kalam Azad University of Technology, Kolkata.</p>
                    <div className="divider mt-lg-5 mb-lg-5"></div>
                    <p className="mt-4 p-3 p-xl-4 para">I am also pursuing B.S. in Data Science from Indian Institute of Technology, Madras.</p>
                    <div className="divider mt-lg-5 mb-lg-5"></div>
                    <p className="mt-4 p-3 p-xl-4 para">I have gained both professional and student experiences in some of the most renowned product-based companies like Google, Amazon, Microsoft-EY and Goldman Sachs, and have worked with the latest technologies.</p>
                    <div className="divider mt-lg-5 mb-lg-5"></div>
                    <p className="mt-4 p-3 p-xl-4 para">Recently, I have worked as a Software Engineer Intern in SigiloTech, Kolkata.</p>
                    <div className="divider mt-lg-5 mb-lg-5"></div>
                    <p className="mt-4 p-3 p-xl-4 para">Previously, I have worked as Front-end Developer in Graphe, Kolkata; Azure Developer Intern in Microsoft-Future Ready Talent and Android App Developer Intern in AICTE-SmartInternz-Google.</p>
                    <div className="divider mt-lg-5 mb-lg-5"></div>
                    <p className="mt-4 p-3 p-xl-4 para">I have attended AWS Machine Learning course, sponsored by Amazon Web Services and Forage Engineering Programme hosted by Goldman Sachs.</p>
                    <div className="divider mt-lg-5 mb-lg-5"></div>
                    </div>
                    <Skills data={progressesData} skillTitle={"Technical"}/>
                    <Skills data={progressesData2} skillTitle={"Other"}/>
                    <p className={`hello hello1 position-absolute ${helloRotate ? 'rotate-0 rotate1 w-100 position-sticky' : ''}`}>- About Me</p>
                </div>
                </div>
                )}
                {/* <Education/> */}
            </section>
    )
}

export default About;