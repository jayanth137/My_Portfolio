import { techData } from './techdata';
import TechCard from './TechCard';

const Tech = () => {
  return (
    <div className="lg:m-28 md:m-18 sm:m-8">
      <h1 className="text-3xl"> My Work Includes</h1>
      <div className="grid md:grid-cols-4 sm:grid-cols-3">
        {techData.map((e, Index) => (
          <TechCard key={Index} img={e.img} Name={e.Name} />
        ))}
      </div>
    </div>
  );
};

export default Tech;
