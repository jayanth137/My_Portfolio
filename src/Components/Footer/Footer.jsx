import React from 'react';
import vite from './icons/vitejs.svg';
import netlify from './icons/netlify.png';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className=" flex justify-around mt-12 mb-2   ">
      <div className="flex">
        <p className="text-xs md:text-base">Build with </p>
        <div className="mx-2">
          <img src={vite} alt="" className="w-8 h-8" />
        </div>
        <p className="text-xs md:text-base">deployed on </p>

        <div className="mx-2">
          <img src={netlify} alt="" className="w-8 h-8" />
        </div>

        <Link
          to="https://jayanthkoppala.netlify.app/"
          rel="noopener noreferrer"
        >
          <p className="text-xs md:text-base ">
            by{' '}
            <span className="text-xs md:text-base border-dotted border-b-2 border-primary">
              Jayanth Koppala
            </span>
          </p>
        </Link>
      </div>
      <div className="flex space-x-2 max-md:hidden">
        <div>
          <Link
            to="https://www.linkedin.com/in/koppala-jayanth-71a8091b9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </Link>
        </div>
        <div>
          <Link
            to="mailto:jayanth.sms.in@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AlternateEmailIcon />
          </Link>
        </div>
        <div>
          <Link
            to="https://github.com/jayanth137"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </Link>
        </div>
        <div>
          <Link
            to="https://twitter.com/JayanthKoppala"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
