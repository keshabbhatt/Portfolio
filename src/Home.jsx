import React, { useState } from 'react';

const Banner = () => {
  const [showAboutMe, setShowAboutMe] = useState(false);

  const handleToggleAboutMe = () => {
    setShowAboutMe(!showAboutMe);
  };

  return (
    <section className="flex flex-col items-center p-10 bg-black text-white">
      <img
        src="https://i.ibb.co/9Hkb1K4/c359a89e6565.jpg"alt="Profile"
        className="rounded-full w-40 h-40 object-cover mb-5 border-4 border-red-500"
      />
      <h1 className="text-5xl font-bold">Hello, its me Kunaal</h1>
      <h2 className="text-3xl font-semibold text-red-500">A computer engineering student</h2>
      
      <button
        onClick={handleToggleAboutMe}
        className="bg-red-500 text-white py-2 px-5 mt-5 rounded hover:bg-red-700"
      >
        {showAboutMe ? 'HIDE ABOUT ME' : 'ABOUT ME'}
      </button>

      {showAboutMe && (
        <div className="mt-10 p-5 bg-gray-800 text-white rounded">
          <h3 className="text-2xl font-semibold mb-3">About Me</h3>
          <p className="text-lg">
          I am a Computer Engineering student at Far Western University, hailing from kanchanpur,NEPAL. My academic journey is driven by a keen interest in UI/UX design along with frontend developer, where I am passionate about creating intuitive and engaging user interfaces. Alongside this, I have a deep enthusiasm for backend development, where I focus on building robust and efficient systems. My education provides a strong foundation in both front-end and back-end technologies, allowing me to develop comprehensive and well-rounded software solutions. Through my studies and projects, I continually strive to enhance my skills and stay updated with the latest trends in the ever-evolving field of technology.

          </p>
        </div>
      )}
    </section>
  );
};

export default Banner;
