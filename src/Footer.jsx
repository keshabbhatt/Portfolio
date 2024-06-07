// src/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="p-10 bg-gray-900 text-center text-white">
      <h2 className="text-2xl font-bold mb-5">Let's work together on your next project</h2>
      <button className="bg-red-500 text-white py-2 px-5 rounded hover:bg-red-700">CONTACT</button>
      <div className="flex justify-center space-x-5 mt-5">
        <a href="#facebook" className="hover:text-red-500">Facebook</a>
        <a href="#twitter" className="hover:text-red-500">Twitter</a>
        <a href="#youtube" className="hover:text-red-500">YouTube</a>
      </div>
    </footer>
  );
};

export default Footer;
