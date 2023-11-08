import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import CallMadeIcon from '@mui/icons-material/CallMade';
import CancelIcon from '@mui/icons-material/Cancel';
import { contactData } from './contactData.js';
import { Link } from 'react-router-dom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

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
          <Link
            to="https://drive.google.com/file/d/1xBmhQ5fx8hPnKLONx4OWfGnBtgLL9lvP/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="link"
              className="bg-contGray text-black px-8 py-4 rounded-2xl mx-1 hover:bg-black hover:text-white"
            >
              <FileCopyIcon />
              Resume
            </button>
          </Link>
          <Link
            to="mailto:jayanth.sms.in@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="email"
              className="bg-black px-8 py-4 rounded-2xl mx-1  hover:text-black hover:bg-contGray"
            >
              <CallMadeIcon />
              Mail Me
            </button>
          </Link>
        </div>
        <div className="flex mx-8 my-2 space-x-4 ">
          <Link
            to="https://www.linkedin.com/in/koppala-jayanth-71a8091b9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="p-3 rounded-lg  bg-contGray text-black  hover:bg-black hover:text-white">
              <LinkedInIcon />
            </div>
          </Link>

          <Link
            to="https://calendly.com/jayanth137/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="p-3 rounded-lg bg-contGray text-black  hover:bg-black hover:text-white ">
              <CalendarMonthIcon />
            </div>
          </Link>
          <Link
            to="https://github.com/jayanth137"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="p-3 rounded-lg bg-contGray text-black  hover:bg-black hover:text-white">
              <GitHubIcon />
            </div>
          </Link>
          <Link
            to="https://twitter.com/JayanthKoppala"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="p-3 rounded-lg bg-contGray text-black  hover:bg-black hover:text-white">
              <TwitterIcon />
            </div>
          </Link>
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
