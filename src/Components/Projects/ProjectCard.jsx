import { Link } from 'react-router-dom';
import Admin from './icons/AdminPanel.png';
import github from './icons/github.png';
import link from './icons/link.png';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';

const ProjectCard = () => {
  return (
    <div className="flex  w-auto h-80 bg-darkGray space-x-4  rounded-3xl m-8 p-4 py-12">
      <div className="w-28 h-28  ">
        <Link to="https://github.com/jayanth137/GamaAdmin-App">
          <img src={github} />
        </Link>
        <Link to="https://gamaadmin.netlify.app/">
          <img src={link} />
        </Link>
      </div>
      <div className="flex flex-col space-y-4 ">
        <h1 className="text-3xl ">title</h1>
        <desc className=" ">
          desc Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          deleniti cumque quaerat, non provident eligendi aliquam voluptatem
          itaque pariatur commodi dolorem officiis maiores eius consequatur
          velit sequi perspiciatis enim ad!
        </desc>
        <button className="bg-black rounded-full w-fit px-4 py-2 items-center ">
          {' '}
          Full Case Study
          <EastOutlinedIcon />
        </button>
      </div>
      <div className="w-auto h-auto m-auto">
        <img src={Admin} alt="Admin" />
      </div>
    </div>
  );
};

export default ProjectCard;
