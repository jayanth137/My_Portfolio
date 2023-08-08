import './ExperienceData';

const ExperienceCard = ({ duration, role, company, desc, skills }) => {
  return (
    <div className="lg:w-auto rounded-3xl p-8 my-8 lg:mx-2 lg:h-auto bg-darkGray">
      <div className="flex justify-items-start items-center space-x-4 ">
        <div className="text-sm text-textGray ">{duration}</div>
        <div className="lg:mx-2 text-lg ">{role}</div>
        <div className=" text-primary">*</div>
        <div className="lg:mx-2 text-lg">{company}</div>
      </div>
      <div className="lg:mx-16 my-4 ">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
