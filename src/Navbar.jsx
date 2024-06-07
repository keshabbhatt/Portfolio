import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-4xl font-bold">Kunaal</div>
        <div className="lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="focus:outline-none"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16v2H4V6zm0 6h16v2H4v-2zm0 6h16v2H4v-2z" />
              )}
            </svg>
          </button>
        </div>
        <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} w-full lg:w-auto`}>
          <a href="#home" className="block mt-4 lg:mt-0 lg:inline-block hover:text-red-500 mx-4">Home</a>
          <a href="#project" className="block mt-4 lg:mt-0 lg:inline-block hover:text-red-500 mx-4">Project</a>
          <a href="#about" className="block mt-4 lg:mt-0 lg:inline-block hover:text-red-500 mx-4">About</a>
          <a href="#contact" className="block mt-4 lg:mt-0 lg:inline-block hover:text-red-500 mx-4">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
