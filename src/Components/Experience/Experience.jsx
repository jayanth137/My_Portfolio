import React from 'react';
import workdesk from './Icons/workdesk.png';
import ExperienceCard from './ExperienceCard';
import './ExperienceData.js';
import { ExperienceData } from './ExperienceData.js';

const Experience = () => {
  return (
    <div className="lg:m-28 md:m-18 sm:m-8">
      <div className="flex items-center">
        <>
          {' '}
          <img
            src={workdesk}
            width={30}
            height={30}
            alt="Picture of the author"
            style={{ objectFit: 'contain', margin: '0 5px ' }}
          />
        </>
        <div className="text-xl ms-1 font-bold">Experience</div>
      </div>
      <div className="mt-8 mx-2">
        <h1 className="text-4xl font-bold my-2 ">
          HELLO<span className="text-primary">!</span>
        </h1>
        <h3 className="lg:text-3xl md:text-xl max-w-screen-xl">
          Im Jayanth Koppala, an Experienced Full Stack Developer with 1 year
          hands-on experience & Acquiring knowledge in blockchain development.
        </h3>
      </div>
      <div>
        <div className="lg:flex    ">
          {ExperienceData.map((e, index) => (
            <ExperienceCard
              key={index}
              role={e.role}
              duration={e.duration}
              company={e.company}
              desc={e.desc}
              skills={e.skills}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
