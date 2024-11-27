import React from 'react';

const Project = () => {
  const projects = [
    {
      name: 'project 1: DIRGHAAYU',
      title: 'fullstack development',
      description:
        'Dirghaayu is an innovative health and wellness platform designed to simplify medical care. By entering your symptoms, Dirghaayu analyzes and identifies potential diseases, provides a personalized diet plan tailored to your condition, and even helps you locate nearby hospitals for prompt medical attention.',
      image: 'https://i.ibb.co/2y9JjmG/24d984f5f7a2.png',
    },
    {
      name: 'project 2nd',
      title: 'AI :lab report analyzer',
      description:
        'I have created a Lab Report Analyzer powered by AI, where users can upload lab report images, and the system accurately analyzes the data to provide meaningful insights. This tool streamlines medical report interpretation, making health assessments faster and more efficient.',
      image: 'https://i.ibb.co/Cn66xjD/25fd7273a80e.png',
    },
    {
      name: 'Project 3rd: Royal gym',
      title: 'frontend Development',
      description:
        'I have created a sleek and user-friendly gym website, Royal Vyayamsala (royalvyamsala.vercel.app), showcasing fitness programs, facilities, and services. It offers an interactive platform to explore memberships, meal plans, and workout options tailored to every fitness enthusiast.',
      image: 'https://i.ibb.co/YfGvQzF/a6739a26db96.png',
    },
    {
      name: 'Project 4th:banking system',
      title: 'backend',
      description:
        'I have developed a robust banking mechanism system using C and C++, featuring functionalities like account management, transaction processing, and balance tracking. This system ensures efficient and secure handling of banking operations, demonstrating core programming concepts and problem-solving skills.',
      image: 'https://i.ibb.co/NLCgPYv/687f3e712296.jpg',
    },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-r from-blue-500 to-pink-500 flex items-center justify-center p-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card bg-white shadow-xl rounded-lg transform transition-transform hover:scale-105 overflow-hidden"
          >
            <figure>
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-xl font-bold">{project.name}</h2>
              <p className="text-lg font-semibold text-green-700">
                {project.title}
              </p>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
