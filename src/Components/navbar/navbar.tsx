// src/Components/Navbar.tsx

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation
import logo1 from "/src/assets/ShaastraLogoWhite.png"; // Make sure this path is correct
import { useMutation, useQuery } from "@apollo/client";
import { GET_ME } from "../../graphql/queries"; // ensure it uses context, not token arg
import { LOGOUT } from "../../graphql/mutations"; // Import the LOGOUT mutation

// Define the types for the props this component will receive
interface NavbarProps {
  showNavbar: boolean;
  scrollToSection: (id: string) => void;
}
type NavLink = {
  id: string;
  text: string;
  type: "scroll" | "link";
  path?: string;
};
// Updated navLinks array with the new Schedule page link
const navLinks: NavLink[] = [
  { id: "home", text: "Home", type: "scroll" },
  { id: "about", text: "About", type: "scroll" },
  { id: "structure", text: "Structure", type: "scroll" },
  { id: "schedule", text: "Schedule", type: "link", path: "/schedule" }, // This is now a link
  { id: "rules_page", text: "Rules", type: "scroll" },
  { id: "contact", text: "Contact", type: "scroll" },
];
const Navbar: React.FC<NavbarProps> = ({ showNavbar, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const location = useLocation(); // Get the current URL location
  const { data, loading } = useQuery(GET_ME);
  const isLoggedIn = !!data?.getMe;
  const [logout] = useMutation(LOGOUT);

  const handleLogout = async () => {
    try {
      await logout(); // Clear cookie from backend
      window.location.href = "/login"; // Redirect
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const handleLinkClick = (id: string) => {
    // If we are not on the homepage, first navigate there, then scroll.
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
    } else {
      scrollToSection(id);
    }
    setIsMenuOpen(false); // Close mobile menu after clicking a link
  };

  const renderLink = (
    link: (typeof navLinks)[0],
    isMobile: boolean = false
  ) => {
    const baseClasses = isMobile
      ? "relative group text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
      : "relative group text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors";

    const activeClasses = "text-white font-bold";

    // --- Link to a separate page ---
    if (link.type === "link" && link.path) {
      const isActive = location.pathname === link.path;
      return (
        <Link
          key={link.id}
          to={link.path}
          className={`${baseClasses} ${isActive ? activeClasses : ""}`}
          onClick={() => setIsMenuOpen(false)}
        >
          {link.text}
          <span
            className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-teal-400 transition-all duration-300 ${
              isMobile
                ? "left-3 group-hover:w-[calc(100%-1.5rem)]"
                : "group-hover:w-full"
            } ${
              isActive ? (isMobile ? "w-[calc(100%-1.5rem)]" : "w-full") : "w-0"
            }`}
          ></span>
        </Link>
      );
    }

    // --- Scroll link for the homepage ---
    return (
      <a
        key={link.id}
        href={`#${link.id}`}
        onClick={(e) => {
          e.preventDefault();
          handleLinkClick(link.id);
        }}
        className={baseClasses}
      >
        {link.text}
        <span
          className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-teal-400 transition-all duration-300 ${
            isMobile
              ? "left-3 group-hover:w-[calc(100%-1.5rem)]"
              : "group-hover:w-full"
          }`}
        ></span>
      </a>
    );
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-md transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 ">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="/#"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("home");
                }}
                className="cursor-pointer"
              >
                <img
                  className="h-12 w-auto relative"
                  src={logo1}
                  alt="Shaastra Logo"
                />
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-4">
              {navLinks.map((link) => renderLink(link))}

              {isLoggedIn ? (
                <>
                  <a
                    href="/dashboard"
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-md text-sm font-medium transition-transform hover:scale-105"
                  >
                    Dashboard
                  </a>
                  <button
                    onClick={() => {
                      handleLogout();
                    }}
                    className="text-gray-300 bg-gray-700 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <a
                    href="/signup"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium transition-transform hover:scale-105"
                  >
                    Signup
                  </a>
                  <a
                    href="/login"
                    className="text-gray-300 bg-gray-700 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Login
                  </a>
                </>
              )}
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
                <svg
                  className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
                <svg
                  className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* --- Mobile Menu (Dropdown) --- */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden border-t border-gray-700`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => renderLink(link, true))}

            <div className="pt-4 border-t border-gray-700 mt-4">
              {isLoggedIn ? (
                <>
                  <a
                    href="/dashboard"
                    className="block text-center bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-md text-base font-medium transition-colors mb-2"
                  >
                    Dashboard
                  </a>
                  <button
                    onClick={() => {
                      localStorage.removeItem("token");
                      window.location.href = "/login"; // or use `navigate` if using `react-router`
                    }}
                    className="block w-full text-center text-gray-300 bg-gray-700 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
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
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
