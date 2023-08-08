import { NavLink } from 'react-router-dom';
import Logo from './Images/logo.png';
import { useState } from 'react';
import Switch from './Switch';
import DehazeIcon from '@mui/icons-material/Dehaze';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center w[92%] mx-28 my-5 rounded-3xl   py-4 px-4 bg-darkGray max-md:m-0 max-md:rounded-none  ">
      <div>
        <img
          src={Logo}
          alt="Logo"
          loading="lazy"
          width="40rem"
          height="40rem "
        />
      </div>
      <div
        className="nav-links duration-500 md:static absolute 
         max-md:bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5 "
      >
        <div className="flex md:flex-row flex-col space-x-8 md:items-center md:gap-[4vw]">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">Experience</NavLink>
          <NavLink to="/">Projects</NavLink>
          <NavLink to="/">Contacts</NavLink>
        </div>
      </div>
      <div>
        <Switch />
      </div>
    </nav>
  );
};

export default Navbar;
