import './App.css';
import React, { useState, useEffect } from 'react';
import About from './components/about';
import Navbar from './components/Navbar';
import DropdownMenu from './components/Dropdown-menu';
import Home from './components/home';
import Education from './components/education';
import Projects from './components/projects';
import projImg1 from './assets/project-images/project1.png';
import projImg2 from './assets/project-images/project2.png';
import projImg3 from './assets/project-images/project3.png';

const projects = [
  {
    id: 1,
    name: 'Cinèra',
    image: projImg1,
    description: 'Movies and Shows Database and Recommendation Website',
    link: 'http://ashy-sea-04e9b9f10.2.azurestaticapps.net'
  },
  {
    id: 2,
    name: 'Portfolio Website',
    image: projImg2,
    description: 'My Portfolio Website',
    link: 'http://proud-water-0c81c2b10.2.azurestaticapps.net'
  },
  {
    id: 3,
    name: 'Gaussian Distribution Package',
    image: projImg3,
    description: 'Python package for Gaussian distribution calculations',
    link: 'https://github.com/MiSu2002/gaussian_python_package'
  },
  // add more projects as needed
];

function App() {
  const [page, setPage] = useState('home');

  useEffect(() => {
    const handlePageChange = () => {
      const pageHeight = document.body.scrollHeight;
      const scrollPos = window.pageYOffset;
      const windowHeight = window.innerHeight;

      if (scrollPos >= windowHeight && pageHeight > window.innerHeight) {
        const projectsSectionHeight = document.getElementById('projects').offsetHeight;
        if (scrollPos + windowHeight >= pageHeight) {
          setPage('projects'); // user has scrolled to the "Projects" section
        } else if (scrollPos + windowHeight >= pageHeight - projectsSectionHeight*2) {
          setPage('education'); // user has scrolled to the bottom of the page
        } else {
          setPage('about'); // user has scrolled to the "About" section
        }
      } else {
        setPage('home'); // user is at the top of the page
      }
      
    }

    window.addEventListener('scroll', handlePageChange);
    return () => window.removeEventListener('scroll', handlePageChange);
  }, []);

  return (
    <div className="App">
      <div className="row g-0 w-100 position-fixed" style={{background: '#15151550', zIndex: 91}}>
        <div className="col-4 p-0 mt-3" style={{zIndex: 91}}>
          <p className="ms-4 ms-lg-5 mt-2 logo ps-2">Portfolio</p>
        </div>
        <div className="col p-0 d-flex justify-content-end mt-3" style={{zIndex: 91}}>
          <Navbar activeLink={page}/>
          <DropdownMenu activeLink={page}/>
        </div>
      </div>
      <Home/>
      <About/>
      <Education/>
      <Projects projects={projects} />
    </div>
  );
}

export default App;