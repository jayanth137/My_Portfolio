import React from 'react';
import vite from './icons/vitejs.svg';
import netlify from './icons/netlify.png';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const Footer = () => {
  return (
    <div className=" flex justify-around mt-12 mb-2   ">
      <div className="flex">
        <p className="text-xs md:text-base">Build with </p>
        <div className="mx-2">
          <img src={vite} alt="" className="w-8 h-8" />
        </div>
        <p className="text-xs md:text-base">deployed on</p>
        <div className="mx-2">
          <img src={netlify} alt="" className="w-8 h-8" />
        </div>
        <p className="text-xs md:text-base">by Jayanth Koppala</p>
      </div>
      <div className="flex space-x-2 max-md:hidden">
        <div>
          <LinkedInIcon />
        </div>
        <div>
          <AlternateEmailIcon />
        </div>
        <div>
          <GitHubIcon />
        </div>
        <div>
          <TwitterIcon />
        </div>
      </div>
    </div>
  );
};

export default Footer;
