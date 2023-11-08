import React from 'react';
import project from './icons/project.png';
import ProjectCard from './ProjectCard.jsx';
import { projectData } from './projectData.js';
import { Element } from 'react-scroll';

const Projects = () => {
  return (
    <Element name="Projects">
      <div id="projects" className="lg:m-28 md:m-18 m-8">
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
    </Element>
  );
};

export default Projects;
