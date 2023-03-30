import './App.css';
import React, { useState, useEffect } from 'react';
import Body from './components/body';
import About from './components/about';
import Navbar from './components/Navbar';
import DropdownMenu from './components/Dropdown-menu';

function App() {
  const [page, setPage] = useState('home');

  useEffect(() => {
    const handlePageChange = () => {
      const pageHeight = document.body.scrollHeight;
      const scrollPos = window.pageYOffset;
      const windowHeight = window.innerHeight*0.9;

      if (scrollPos >= windowHeight && pageHeight > window.innerHeight) {
        setPage('about');
      } else {
        setPage('home');
      }
    };

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
      <Body/>
      <About/>
    </div>
  );
}

export default App;