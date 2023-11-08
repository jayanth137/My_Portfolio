import { Link } from 'react-router-dom';

import github from './icons/github.png';
import link from './icons/link.png';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import InsertLinkIcon from '@mui/icons-material/InsertLink';

const ProjectCard = ({ img, gitLink, liveLink, title, desc }) => {
  return (
    <section className="flex flex-col grow md:flex-row  w-auto m-4 p-4  md:w-full sm:mx-auto sm:p-auto sm:py-16   bg-darkGray space-x-4 container  rounded-3xl  ">
      <>
        <div className="   w-auto h-auto grow m-auto">
          <img src={img} alt="Admin" />
        </div>
        <div className="flex flex-col space-y-4 md:mx-8 grow  ">
          <Link target="_blank" rel="noopener noreferrer" to={gitLink}>
            <GitHubIcon className="bg-black w-8 h-8" />
          </Link>
          <Link target="_blank" rel="noopener noreferrer" to={liveLink}>
            <InsertLinkIcon />
          </Link>
        </div>
      </>
      <div className="flex flex-col space-y-4 ">
        <h1 className="text-3xl ">{title}</h1>
        <desc className=" text-xs md:text-base ">{desc}</desc>
        <Link target="_blank" rel="noopener noreferrer" to={gitLink}>
          <button className="bg-black rounded-full w-fit px-4 py-2 items-center ">
            {' '}
            Full Case Study
            <EastOutlinedIcon />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ProjectCard;
