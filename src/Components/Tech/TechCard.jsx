import react from './icons/react.png';

const TechCard = ({ img, Name }) => {
  return (
    <div className="flex items-center space-x-4 m-8">
      <div className="inline-block lg:h-12 lg:w-12 md:h-8 md:w-8 sm:h-6 sm:w-6  object-contain">
        <img src={img} alt="image" />
      </div>
      <div>
        <h1 className="lg:text-xl md:text-base sm:text-xs ">{Name}</h1>
      </div>
    </div>
  );
};

export default TechCard;
