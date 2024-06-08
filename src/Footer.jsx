import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto text-center">
      <p className="text-lg">lets work together on your next project</p>
        <p className="text-lg">drop your messages:</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://www.facebook.com/kunaal.bhatta" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.instagram.com/stories/keshabrajbhatt12345/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.youtube.com/channel/UChDXl4fsiehFhitvIh_m_Yw" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500">
            <FaYoutube size={24} />
          </a>
        </div>
        <p className="mt-4">&copy; 2024 Kunaal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
