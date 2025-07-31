// src/App.tsx

import React, { useEffect, useState } from "react";
// Components
import Navbar from "./Components/navbar/navbar"; // <-- Import the new Navbar
import Home from "./Components/home/home";
import About from "./Components/about/about";
import Structure from "./Components/structure/structure";
import Rules from "./Components/rules/rules";
import Slideshow from "./Components/Slideshow-spark/slideshow";
import Footer from "./Components/footer/footer";
import Contact from "./Components/contact/contact";
// import Contact from "./Components/contact/contact"; // You would add a contact component

const App: React.FC = () => {
  // State for controlling navbar visibility is kept here
  const [showNavbar, setShowNavbar] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  // This function controls elements on the page, so it stays in App.tsx
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // This effect controls page-level scroll behavior
  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    // Base styles for the entire app
    <div className="bg-slate-900">
      <Navbar showNavbar={showNavbar} scrollToSection={scrollToSection} />

      <main>
        {/* Each section now has a simple div wrapper with an ID for scrolling */}
        <section id="home">
          <Home />
        </section>
        
        <section id="slideshow">
          <Slideshow />
        </section>

        <section id="about">
          <About />
        </section>
        
        <section id="structure">
          <Structure />
        </section>
        
        <section id="rules_page">
          <Rules />
        </section>
        <section id="contact ">
          <Contact/>
        </section>
      </main>
      
      {/* The existing styled footer */}
      <footer className="w-full flex items-center justify-center h-auto  bg-gray-800 text-white">
        <Footer />
      </footer>
    </div>
  );
};

export default App;