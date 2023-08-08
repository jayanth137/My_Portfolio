import React from 'react';
import project from './icons/project.png';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div className="lg:m-28 md:m-18 sm:m-8">
      <div className="flex items-center space-x-2 ">
        <img src={project} className="h-12 w-12" />
        <h1 className="text-xl font-bold">Projects</h1>
      </div>
      <p></p>
      <div>
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
