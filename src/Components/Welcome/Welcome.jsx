import React, { useState } from 'react';
import sparkles from './Images/sparkles.png';
import at from './Images/at.png';
import X from './Images/x.png';
import resume from './Images/attach.png';
import hat from './Images/hat.png';
import ContactCard from '../Contact/ContactCard';

import { Link } from 'react-scroll';

const Welcome = () => {
  const [Card, setCard] = useState(false);

  const openCard = () => {
    setCard(true);
  };

  const closeCard = () => {
    setCard(false);
  };
  return (
    <div id="home">
      {' '}
      <div className="flex flex-col items-center">
        <div className="lg:text-8xl md:text-6xl mt-12 font-bold text-white text-4xl	">
          Jayanth Koppala
        </div>
        <div className="lg:text-6xl mt-6 text-white text-3xl	">
          Full Stack & Blockchain{' '}
        </div>
        <div className="lg:text-6xl md:text-4xl text-3xl  m-4 text-secondary">
          Practitioner
        </div>
      </div>
      <div className="  lg:flex lg:flex-row lg:mx-28 mx-14 sm:flex-col">
        <div className="flex-grow">
          <Link to="about" smooth={true} duration={1000}>
            <div className="bg-primary p-8  lg:p-40 rounded-[40px] w-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90  duration-300 cursor-pointer ">
              <div className="lg:flex lg:items-center ">
                <img
                  src={sparkles}
                  width={40}
                  height={40}
                  alt="Picture of the author"
                  style={{ objectFit: 'contain', margin: '0 5px' }}
                />
                About
              </div>
            </div>
          </Link>
        </div>
        <div className=" flex-grow lg:flex-col sm:flex">
          <div className="flex-grow lg:mx-2 lg:mb-0 sm:mr-2 sm:my-2 ">
            {' '}
            <Link to="Experience" smooth={true} duration={1000}>
              <div className="bg-darkGray px-6 py-4 lg:p-48 w-auto  lg:py-16 rounded-[40px] space-y-5  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90  duration-300 cursor-pointer">
                {' '}
                <div className="lg:flex lg:flex-row lg:items-center sm:flex-col">
                  <img
                    src={X}
                    width={40}
                    height={40}
                    alt="Picture of the author"
                    style={{ objectFit: 'contain', margin: '0 5px' }}
                  />
                  Experience
                </div>
              </div>
            </Link>
          </div>
          <div className=" flex-grow lg:mx-2  sm:mt-2   ">
            {' '}
            <Link to="Projects" smooth={true} duration={1000}>
              <div className="bg-secondary w-auto text-black lg:p-48 lg:py-16 lg:w-10px rounded-[40px]  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90  duration-300  px-6 py-4  cursor-pointer">
                {' '}
                <div className="lg:flex lg:flex-row  lg:items-center sm:flex-col ">
                  <img
                    src={hat}
                    width={40}
                    height={40}
                    alt="Picture of the author"
                    style={{ objectFit: 'contain', margin: '0 5px ' }}
                  />
                  Projects
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className=" flex-grow lg:flex-col xl:hidden sm:flex">
          <div className="lg:mx-0 lg:my-2  basis-1/2  sm:mx-2">
            {' '}
            <Link to="/" onClick={openCard}>
              <div className="bg-lightGray text-black w-auto lg:px-24 lg:py-16 rounded-[40px]  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90  duration-300 px-4 py-4 cursor-pointer">
                <div className="lg:flex lg:flex-row lg:items-center sm:flex-col">
                  <img
                    src={at}
                    width={40}
                    height={40}
                    alt="Picture of the author"
                    style={{ objectFit: 'contain', margin: '0  5px' }}
                  />
                  Contact
                </div>
              </div>
            </Link>
            {Card && <ContactCard onClose={closeCard} />}
          </div>
          <div className=" flex-grow basis-1/2">
            {' '}
            <a
              href="https://drive.google.com/file/d/1xBmhQ5fx8hPnKLONx4OWfGnBtgLL9lvP/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-primary lg:px-24 lg:py-16 rounded-[40px] w-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90  duration-300 px-4 py-4">
                <div className="   lg:flex lg:flex-row items-center">
                  <img
                    src={resume}
                    width={40}
                    height={40}
                    alt="Picture of the author"
                    style={{ objectFit: 'contain', margin: '0 5px ' }}
                  />
                  Resume
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
