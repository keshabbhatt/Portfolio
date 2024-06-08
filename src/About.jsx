import React from "react";
import { Icon } from "@iconify/react"; // Assuming you are using @iconify/react for icons

const About = () => {
  // Sample skills data
  const skills = ["UI/UX Design", "Backend Development", "Frontend Development", "Database Management", "Software Engineering"];

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto">Navbar</div>
      </nav>

      {/* Content */}
      <div className="container mx-auto py-8">
        {/* Introduction */}
        <div>
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="mb-4">
            I am a Computer Engineering student at Far Western University, hailing from Jhalari. My academic journey is driven by a keen interest in UI/UX design, where I am passionate about creating intuitive and engaging user interfaces. Alongside this, I have a deep enthusiasm for backend development, where I focus on building robust and efficient systems. My education provides a strong foundation in both front-end and back-end technologies, allowing me to develop comprehensive and well-rounded software solutions. Through my studies and projects, I continually strive to enhance my skills and stay updated with the latest trends in the ever-evolving field of technology.
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
                  <p className="text-center mt-2">{skill}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
