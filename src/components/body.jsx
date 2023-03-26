import React, { useState, useEffect }  from "react";
import ThreeScene from "./three";

const Body = () => {
  const [helloRotate, setHelloRotate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.3) {
        setHelloRotate(true);
      } else {
        setHelloRotate(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id='home' style={{overflowX: 'hidden'}}>
      <div className="home position-relative">
      <div className="position-absolute h-100 w-100" style={{ zIndex: 9 }}>
        <p className={`hello position-absolute ${helloRotate ? 'rotate-0 w-100' : ''}`}>- Hello, World!</p>
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
    </section>
  );
};

export default Body;