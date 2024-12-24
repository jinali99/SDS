"use client";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-white shadow-md py-4 px-6 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo (Left Side) */}
        <div className="text-2xl font-bold text-gray-800">
          <img src="/logo.png" alt="Logo" />
          {/* </a> */}
        </div>

        {/* Menu (Desktop) */}
        <nav className="hidden md:flex space-x-8 text-lg text-gray-800">
          <a href="#home">Home</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <a href="#client">Client</a>
          <a href="#3d">3D</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md mt-4">
          <div className="flex flex-col items-center space-y-4 py-4">
            <a
              href="#home"
              onClick={() => handleNavClick("home")}
              className={`text-lg text-gray-800 hover:text-indigo-600 ${
                activePage === "home" ? "text-indigo-600" : ""
              }`}
            >
              Home
            </a>
            <a
              href="#portfolio"
              onClick={() => handleNavClick("portfolio")}
              className={`text-lg text-gray-800 hover:text-indigo-600 ${
                activePage === "portfolio" ? "text-indigo-600" : ""
              }`}
            >
              Portfolio
            </a>
            <a
              href="#contact"
              onClick={() => handleNavClick("contact")}
              className={`text-lg text-gray-800 hover:text-indigo-600 ${
                activePage === "contact" ? "text-indigo-600" : ""
              }`}
            >
              Contact
            </a>
            <a
              href="#about"
              onClick={() => handleNavClick("about")}
              className={`text-lg text-gray-800 hover:text-indigo-600 ${
                activePage === "about" ? "text-indigo-600" : ""
              }`}
            >
              About
            </a>
            <a
              href="#client"
              onClick={() => handleNavClick("client")}
              className={`text-lg text-gray-800 hover:text-indigo-600 ${
                activePage === "client" ? "text-indigo-600" : ""
              }`}
            >
              Client
            </a>
            <a
              href="#3d"
              onClick={() => handleNavClick("3d")}
              className={`text-lg text-gray-800 hover:text-indigo-600 ${
                activePage === "3d" ? "text-indigo-600" : ""
              }`}
            >
              3D
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
