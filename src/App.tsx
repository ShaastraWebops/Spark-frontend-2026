import React, { useEffect, useState } from 'react';
import logo1 from './assets/ShaastraLogoWhite.png';
import './App.css';
import Home from './Components/home/home';
import About from './Components/about/about';
import Structure from './Components/structure/structure';
import Rules from './Components/rules/rules';
// import Login from './auth/Login';
// import Signup from './auth/Signup';
import Slideshow from './Components/Slideshow-spark/slideshow';
const App: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div className="App">
      <nav className={`floating-navbar ${showNavbar ? "" : "collapsed"}`}>
        <div className="logo">
          <a href="#"><img src={logo1} alt="Shaastra Logo" /></a>
        </div>
        <ul className="nav-links">
          <li><a href="#" onClick={() => scrollToSection('floating-container')}>Home</a></li>
          <li><a href="#" onClick={() => scrollToSection('about')}>About</a></li>
          <li><a href="#" onClick={() => scrollToSection('structure')}>Structures</a></li>
          <li><a href="#" onClick={() => scrollToSection('rules_page')}>Rules</a></li>
          <li><a href="/signup" target="_blank" rel="noopener noreferrer">Signup</a></li>
          <li><a href="/login" target="_blank" rel="noopener noreferrer">Login</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <button></button>
      </nav>
      <div className="floating-container" id='floating-container'>
        <Home />
      </div>
      <div className='slideshow' id='slideshow'><Slideshow /></div>
      <div className='about about_main' id='about'><About /></div>

      <div className='structure' id='structure'><Structure /></div>

      <div className='rules_page' id="rules_page"><Rules /></div>
      {/* <div className='hi'></div>
      <div className='hi'></div> */}

    </div>
  );
};

export default App;
