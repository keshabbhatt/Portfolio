import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Footer from './Footer';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Banner />
      {/* Add other components and content here */}
      <div className="flex-grow"></div>
      <Footer />
    </div>
  );
};

export default App;
