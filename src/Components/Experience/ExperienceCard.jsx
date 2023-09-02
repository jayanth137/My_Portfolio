import './ExperienceData';
import { ExperienceData } from './ExperienceData';

const ExperienceCard = ({ duration, role, company, desc, skills }) => {
  return (
    <div className=" lg:w-auto rounded-3xl px-8 py-8 my-4 lg:mx-2 lg:h-auto bg-darkGray ">
      <div className="flex justify-items-start items-center space-x-4 ">
        <div className="text-sm text-textGray ">{duration}</div>
        <div className="lg:mx-2 text-lg md:text-xl ">{role}</div>
        <div className=" text-primary">*</div>
        <div className="lg:mx-2 text-lg md:text-xl">{company}</div>
      </div>
      <div className="lg:mx-8 my-8 ">
        <p>{desc}</p>
        <div className=" flex flex-wrap rounded-2xl my-4 mr-2   space-x-4">
          {skills.map((skill, skillIndex) => (
            <div
              className="bg-[#26473A] p-2 text-[#3BD8A1]  px-4  rounded-full"
              key={skillIndex}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
