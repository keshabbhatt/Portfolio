import React from "react";
import { Icon } from "@iconify/react"; // Assuming you are using @iconify/react for icons

const About = () => {
  // Sample skills data
  const skills = ["UI/UX Design", "Backend Development", "Frontend Development", "Database Management", "AI"];

  return (
    <div className="bg-gradient-to-r from-blue-500 to-pink-500 min-h-screen">
      {/* Navbar */}
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto"></div>
      </nav>

      {/* Content */}
      <div className="container mx-auto py-8">
        {/* Introduction */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-red-700">About Me</h2>
          <p className="mb-4">
            I am a passionate Computer Engineering student at Far Western University, with a strong foundation in UI/UX design, backend development, and frontend technologies. I enjoy crafting intuitive user interfaces and developing robust, efficient systems. My skills extend to database management and AI, enabling me to build comprehensive software solutions. With a dedication to continuous learning, I strive to stay updated with emerging trends and deliver impactful projects that bridge innovation and practicality.
          </p>
        </div>

        {/* Skills */}
        <div className="my-8">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="flex flex-wrap">
            {skills.map((skill, index) => (
              <div key={index} className="w-1/2 md:w-1/4 p-2">
                <div className="bg-gray-200 p-4 rounded-md flex flex-col items-center">
                  <Icon icon={`simple-icons:${skill.toLowerCase().replace("/", "-").replace(" ", "")}`} width="100" height="100" />
                  <p className="text-center mt-2 text-green-600">{skill}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
