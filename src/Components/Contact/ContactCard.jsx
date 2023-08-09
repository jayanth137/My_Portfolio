import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import CallMadeIcon from '@mui/icons-material/CallMade';

const ContactCard = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center w-auto   justify-center backdrop-blur z-50">
      <div className="bg-[#FFFFFF] py-8 px-20 md:px-40 lg:px-80   rounded-xl">
        <h1 className="text-xl text-black font-semibold mb-4">
          Hey! Let's Connect
        </h1>
        <div>
          <button className="bg-contGray text-black px-8 py-4 rounded-2xl mx-1">
            <FileCopyIcon />
            Resume
          </button>
          <button className="bg-black px-8 py-4 rounded-2xl mx-1">
            <CallMadeIcon />
            Mail Me
          </button>
        </div>
        <div className="flex mx-8 my-2 space-x-4 ">
          <div className="p-3 rounded-lg  bg-contGray text-black">
            <LinkedInIcon />
          </div>
          <div className="p-3 rounded-lg bg-contGray text-black">
            <AlternateEmailIcon />
          </div>
          <div className="p-3 rounded-lg bg-contGray text-black">
            <GitHubIcon />
          </div>
          <div className="p-3 rounded-lg bg-contGray text-black">
            <TwitterIcon />
          </div>
        </div>
        <button
          className="p-2 bg-black text-gray-800 rounded-lg mt-4"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
