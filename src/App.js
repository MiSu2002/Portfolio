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
import projImg4 from './assets/project-images/project4.png';
import Career from './components/career';

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
    name: 'Grocery Android App',
    image: projImg3,
    description: 'Grocery List Android App using Kotlin',
    link: 'https://github.com/smartinternz02/SPSGP-82116-Virtual-Internship---Android-Application-Development-Using-Kotlin'
  },
  {
    id: 4,
    name: 'Gaussian Distribution Package',
    image: projImg4,
    description: 'Python package for Gaussian distribution calculations',
    link: 'https://github.com/MiSu2002/gaussian_python_package'
  },
];

const careers = [
  {
    id: 1,
    job_title: 'Azure Developer Intern',
    company: 'Microsoft-EY-Future Ready Talent',
    description: [
      'Understood Cloud Computing fundamentals Learned working with Azure services such as Static Web Apps and QnA Chatbot',
      'Gained valuable knowledge on working with Azure services in different fields by Industrial Experts',
      'Created a portfolio website using ReactJS and Static Web Apps as project',
      'Link to my project website: https://proud-water-0c81c2b10.2.azurestaticapps.net',
      'Link to my project (Github): https://github.com/MiSu2002/Portfolio',
    ],
    from: 'June 2022',
    to: 'Present',
  },
  {
    id: 2,
    job_title: 'Anroid App Developer Intern',
    company: 'AICTE-Google-SmartInternz',
    description: [
      'Understood App development in Android',
      'Used Kotlin to make dice roller app',
      'Used git control',
      'Simulated the app in android device',
      'Completion of project within deadline',
      'Dice Roller Android App (Github): https://github.com/MiSu2002/Dice-Roller',
      'Final Project - Grocery List App (Github): https://github.com/smartinternz02/SPSGP-82116-Virtual-Internship---Android-Application-Development-Using-Kotlin',
    ],
    from: 'August 2022',
    to: 'September 2022',
  },
  {
    id: 3,
    job_title: 'Front-End Developer Intern (On-Site)',
    company: 'Graphe, Kolkata',
    description: [
      'Understood Figma UI/UX Design to develop the front-end layouts',
      'Used languages such as HTML, CSS, JS and JQuery',
      'Used git control',
      'Built responsive websites using Bootstrap 5 Responsible of finishing and submitting the projects within deadline',
      '1. Graphe-Weddings frontend website (Github): https://github.com/MiSu2002/Graphe-Weddings',
      '2. FoodSpin frontend website (Github): https://github.com/MiSu2002/FoodSpin',
    ],
    from: 'June 2022',
    to: 'June 2022',
  },
  {
    id: 4,
    job_title: 'Mechine Learning Student',
    company: 'Udacity-Amazon',
    description: [
      'Completed modules within deadline',
      'Understood ML models',
      'Implemented statistics and linear algebra in ML model',
      'Used git control',
      'Used pandas, numpy, scikit-learn, matplotlib and jupyter to create models',
      'Used Reinforcement Learning model to train a racing car and composed music using Generative Adversarial Networks (GANs) in Amazon SageMaker',
      'Created a python package that is imported in python file to calculate gaussian distribution and binomial distrubution',
    ],
    from: 'August 2022',
    to: 'September 2022',
  },
  {
    id: 5,
    job_title: 'Virtual Programme Student',
    company: 'Goldman Sachs Company',
    description: [
      'Completed modules within deadline',
      'Cracked passwords and tested outputs on Kali Linux',
    ],
    from: 'June 2022',
    to: 'July 2022',
  },
  {
    id: 6,
    job_title: 'Google Developer Students Clubs (GDSC)',
    company: 'Goldman Sachs Company',
    description: [
      'Worked as a Core Team Member and Program Management Lead',
      'Managed the team to work effectively and finish projects within deadline',
      'Assisted the Team Lead in organization of events',
      'Practiced Hands On Labs with Cloud Essentials, BigData, DBMS, BigQuery, Kubernetes, ML and AI, Dart Essentials and Flutter Development',
      'Participated in Google Cloud Program and Google Cloud Ready Facilitator Program',
    ],
    from: 'September 2021',
    to: 'July 2022',
  },
];

function App() {
  const [page, setPage] = useState('home');

  useEffect(() => {
    const handlePageChange = () => {
      const pageHeight = document.body.scrollHeight;
      const scrollPos = window.pageYOffset;
      const windowHeight = window.innerHeight;

      if (scrollPos >= windowHeight && pageHeight > window.innerHeight) {
        const careersSectionHeight = document.getElementById('careers').offsetHeight;
        const projectsSectionHeight = document.getElementById('projects').offsetHeight;
        const educationSectionHeight = document.getElementById('education').offsetHeight;
        const pos = scrollPos + windowHeight;
        const bottom = pageHeight - careersSectionHeight + educationSectionHeight*0.7;

        if (pos >= bottom) {
          setPage('careers'); // user has scrolled to the "Careers" section
        } else if (pos >= bottom - projectsSectionHeight) {
          setPage('projects'); // user has scrolled to the "Projects" section
        } else if (pos >= bottom - projectsSectionHeight - educationSectionHeight) {
          setPage('education'); // user has scrolled to the "Education" section
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
      <Career careers={careers}/>
    </div>
  );
}

export default App;