import React from 'react';

const Project = () => {
  const projects = [
    {
      name: 'Project One',
      title: 'UI/UX Design',
      description: 'This is a description of project one. It includes details about the design and development process.',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Project Two',
      title: 'Backend Development',
      description: 'This is a description of project two. It includes details about the server-side logic and database.',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Project Three',
      title: 'Full Stack Development',
      description: 'This is a description of project three. It includes details about both frontend and backend development.',
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="container mx-auto p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <div key={index} className="card bg-base-100 shadow-xl transform transition-transform hover:scale-105">
            <figure>
              <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.name}</h2>
              <p className="text-lg font-semibold text-gray-700">{project.title}</p>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
