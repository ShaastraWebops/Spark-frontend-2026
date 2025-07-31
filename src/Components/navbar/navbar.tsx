// src/Components/Navbar.tsx

import React, { useState } from 'react';
import logo1 from "/src/assets/ShaastraLogoWhite.png"; // Make sure this path is correct for your project setup

// Define the types for the props this component will receive
interface NavbarProps {
  showNavbar: boolean;
  scrollToSection: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ showNavbar, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Data for Navigation Links for easier management
  const navLinks = [
    { id: "home", text: "Home" },
    { id: "about", text: "About" },
    { id: "structure", text: "Structure" },
    { id: "rules_page", text: "Rules" },
    { id: "contact", text: "Contact" }, // Assuming a contact section
  ];
  
  const handleLinkClick = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false); // Close mobile menu after clicking a link
  };

  return (
    <>
      {/* --- Main Navigation Bar --- */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-md transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 ">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" onClick={() => handleLinkClick("home")} className="cursor-pointer">
                <img className="h-8 w-auto" src={logo1} alt="Shaastra Logo" />
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => { e.preventDefault(); handleLinkClick(link.id); }}
                  // Add 'group' and 'relative' for the hover effect
                  className="relative group text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors"
                >
                  {link.text}
                  {/* The gradient line */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-teal-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <a
                href="/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium transition-transform hover:scale-105"
              >
                Signup
              </a>
              <a
                href="/login"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 bg-gray-700 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Login
              </a>
            </div>

            {/* Hamburger Menu Button */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                type="button"
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
                <svg className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* --- Mobile Menu (Dropdown) --- */}
        <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden border-t border-gray-700`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.id); }}
                // Apply the same hover effect for mobile
                className="relative group text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {link.text}
                 {/* The gradient line for mobile (optional, but good for consistency) */}
                 <span className="absolute bottom-0 left-3 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-teal-400 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></span>
              </a>
            ))}
            <div className="pt-4 border-t border-gray-700 mt-4">
              <a
                href="/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md text-base font-medium transition-colors mb-2"
              >
                Signup
              </a>
              <a
                href="/login"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-gray-300 bg-gray-700 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;