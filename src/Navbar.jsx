import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-800 via-indigo-600 to-blue-500 text-white p-5 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Welcome with Typewriter Effect */}
        <div className="text-4xl font-bold">
          <span className="typewriter">welcome</span>
        </div>

        {/* Hamburger Menu */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current text-white"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16v2H4V6zm0 6h16v2H4v-2zm0 6h16v2H4v-2z" />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`lg:flex ${
            isOpen ? "block" : "hidden"
          } w-full lg:w-auto text-lg`}
        >
          <a
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-yellow-300 mx-4 transition duration-300"
          >
            Home
          </a>
          <a
            href="/project"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-yellow-300 mx-4 transition duration-300"
          >
            Project
          </a>
          <a
            href="/about"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-yellow-300 mx-4 transition duration-300"
          >
            About
          </a>
          <a
            href="/contact"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-yellow-300 mx-4 transition duration-300"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Typewriter Effect Styles */}
      <style>
        {`
          .typewriter {
            overflow: hidden;
            display: inline-block;
            white-space: nowrap;
            border-right: 3px solid white;
            animation: typing 3.5s steps(30, end), blink 0.8s step-end infinite;
          }
          
          @keyframes typing {
            from { width: 0 }
            to { width: 100% }
          }

          @keyframes blink {
            from, to { border-color: transparent }
            50% { border-color: white }
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
