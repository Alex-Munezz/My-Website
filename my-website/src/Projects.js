import React from 'react';
import project1Image from './images/project1.png'; // Replace with actual images
import project2Image from './images/react.png';
import project3Image from './images/react.png';

const projects = [
  {
    title: 'CommunityCrafters Marketplace',
    image: project1Image,
    languages:'ReactJS, TailwindCSS, JavaScript, Python, Flask, PostgreSQL',
    description: 'A web app and an innovative platform for booking home services according to your own convenience.',
    link: 'https://communityc-backend.onrender.com'
  },
  {
    title: 'SpeedySend',
    image: project2Image,
    description: 'An innovative platform for booking home services with real-time tracking.',
    link: 'https://project2.com'
  },
  {
    title: 'Project 3',
    image: project3Image,
    description: 'A mobile-friendly app for managing personal finances with advanced analytics.',
    link: 'https://project3.com'
  },
];

const Projects = () => {
  return (
    <div className="bg-gray-800 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Projects I Have Accomplished</h2>
      <div className="overflow-x-auto flex space-x-6 px-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg min-w-[300px] max-w-[350px] p-4 flex-shrink-0">
            <h4 className='text-black'><strong>{project.title}</strong></h4><br />
            <img src={project.image} alt={project.title} className="h-40 w-full object-cover rounded-md" />
            <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p><br />
            <p className='text-black'><strong>Languages used:</strong> {project.languages}</p>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block mt-4 text-blue-500 hover:underline"
            >
              Check it out
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
