const TechCard = ({ img, Name }) => {
  return (
    <div className="flex items-center  space-x-1 md:space-x-4 p-1 md:p-6 ">
      <div className="inline-block w-4 h-4  md:w-8 md:h-8 object-fill ">
        <img src={img} alt="image" />
      </div>
      <div>
        <h1 className=" text-xs lg:text-xl md:text-base  ">{Name}</h1>
      </div>
    </div>
  );
};

export default TechCard;
