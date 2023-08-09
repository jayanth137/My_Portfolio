import React from 'react';
import project from './icons/project.png';
import ProjectCard from './ProjectCard.jsx';
import { projectData } from './projectData.js';

const Projects = () => {
  return (
    <div className="lg:m-28 md:m-18 sm:m-12">
      <div className="flex items-center space-x-2 ">
        <img src={project} className="h-12 w-12" />
        <h1 className="text-xl font-bold">Projects</h1>
      </div>
      <p></p>
      <div>
        {projectData.map((e, Index) => (
          <ProjectCard
            key={Index}
            img={e.img}
            desc={e.desc}
            liveLink={e.liveLink}
            gitLink={e.gitLink}
            title={e.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
