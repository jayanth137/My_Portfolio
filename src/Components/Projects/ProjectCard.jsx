import { Link } from 'react-router-dom';

import github from './icons/github.png';
import link from './icons/link.png';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';

const ProjectCard = ({ img, gitLink, liveLink, title, desc }) => {
  return (
    <div className="flex  w-auto h-80 bg-darkGray space-x-4  rounded-3xl m-8 p-4 py-12">
      <div className="w-28 h-28  ">
        <Link to={gitLink}>
          <img src={github} />
        </Link>
        <Link to={liveLink}>
          <img src={link} />
        </Link>
      </div>
      <div className="flex flex-col space-y-4 ">
        <h1 className="text-3xl ">{title}</h1>
        <desc className=" ">{desc}</desc>
        <button className="bg-black rounded-full w-fit px-4 py-2 items-center ">
          {' '}
          Full Case Study
          <EastOutlinedIcon />
        </button>
      </div>
      <div className="w-auto h-auto m-auto">
        <img src={img} alt="Admin" />
      </div>
    </div>
  );
};

export default ProjectCard;
