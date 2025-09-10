// src/App.tsx

import React, { useEffect, useState, useCallback } from "react";
// Components
import Navbar from "./Components/navbar/navbar";
import Home from "./Components/home/home";
import About from "./Components/about/about";
import Structure from "./Components/structure/structure";
import Rules from "./Components/rules/rules";
import Slideshow from "./Components/Slideshow-spark/slideshow";
import Footer from "./Components/footer/footer";
import Contact from "./Components/contact/contact";

const App: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // ✅ wrap in useCallback so it's stable
  const controlNavbar = useCallback(() => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [controlNavbar]); // ✅ dependency is stable now

  return (
    <div className="bg-slate-900 overflow-x-hidden">
      <Navbar showNavbar={showNavbar} scrollToSection={scrollToSection} />

      <main>
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

        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer className="w-full flex items-center justify-center h-auto bg-gray-800 text-white">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
