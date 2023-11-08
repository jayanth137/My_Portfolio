import React, { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Images/logo.png';
import Switch from './Switch';
import SendIcon from '@mui/icons-material/Send';

const Navbar = () => {
  const navigate = useNavigate();
  let element;

  const gotoId = (id) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 500);
    } else {
      element = document.getElementById(id);
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  let menuRef = useRef();

  return (
    <nav className="flex justify-between items-center w[92%] mx-28 my-5 rounded-3xl py-4 px-4 bg-darkGray max-md:m-0 max-md:rounded-none">
      <div>
        <img
          src={Logo}
          alt="Logo"
          loading="lazy"
          width="40rem"
          height="40rem"
        />
      </div>
      <div className="nav-links duration-500 md:static absolute max-md:bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
        <div className="flex md:flex-row flex-col space-x-8 md:items-center md:gap-[4vw]">
          <nav className="flex sm:justify-center space-x-4">
            {[['Home'], ['Experience'], ['Projects'], ['Contact']].map(
              ([title]) => (
                <p
                  key={title}
                  className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
                  onClick={() => {
                    gotoId(title.toLowerCase());
                  }}
                >
                  {title}
                </p>
              )
            )}
          </nav>
        </div>
      </div>
      <div>
        <SendIcon fontSize="medium" className="mr-4" />
      </div>
    </nav>
  );
};

export default Navbar;
