import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import CallMadeIcon from '@mui/icons-material/CallMade';
import CancelIcon from '@mui/icons-material/Cancel';

const ContactCard = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 flex items-center w-auto  justify-center backdrop-blur  z-50"
      onClick={onClose}
    >
      <div className="bg-[#FFFFFF]  py-8 px-8 md:px-40 lg:px-80  rounded-3xl  ">
        <h1 className="text-xl text-black font-semibold py-4 px-16">
          Hey! Let's Connect
        </h1>
        <div className="flex flex-row">
          <button className="bg-contGray text-black px-8 py-4 rounded-2xl mx-1 hover:bg-black hover:text-white">
            <FileCopyIcon />
            Resume
          </button>
          <button className="bg-black px-8 py-4 rounded-2xl mx-1  hover:text-black hover:bg-contGray">
            <CallMadeIcon />
            Mail Me
          </button>
        </div>
        <div className="flex mx-8 my-2 space-x-4 ">
          <div className="p-3 rounded-lg  bg-contGray text-black  hover:bg-black hover:text-white">
            <LinkedInIcon />
          </div>
          <div className="p-3 rounded-lg bg-contGray text-black  hover:bg-black hover:text-white ">
            <AlternateEmailIcon />
          </div>
          <div className="p-3 rounded-lg bg-contGray text-black  hover:bg-black hover:text-white">
            <GitHubIcon />
          </div>
          <div className="p-3 rounded-lg bg-contGray text-black  hover:bg-black hover:text-white">
            <TwitterIcon />
          </div>
        </div>
        <button
          className="p-2 bg-black text-gray-800 absolute  top-6 right-6 rounded-lg mt-4"
          onClick={onClose}
        >
          <CancelIcon />
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
