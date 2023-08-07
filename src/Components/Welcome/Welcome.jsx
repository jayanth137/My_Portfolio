import React from 'react';
import { Link } from 'react-router-dom';
import sparkles from './Images/sparkles.png';
import at from './Images/at.png';
import X from './Images/x.png';
import resume from './Images/attach.png';
import hat from './Images/hat.png';

const Welcome = () => {
  return (
    <div>
      {' '}
      <div className="flex flex-col items-center">
        <div className="lg:text-8xl md:text-6xl mt-12 font-bold text-white text-5xl	">
          Jayanth Koppala
        </div>
        <div className="lg:text-6xl mt-6 text-white text-3xl	">
          Full Stack & Blockchain{' '}
        </div>
        <div className="lg:text-6xl md:text-4xl text-3xl  m-4 text-secondary">
          Practitioner
        </div>
      </div>
      <div className="lg:flex lg:flex-row lg:mx-28 sm:mx-14 sm:flex-col">
        <div>
          <Link to="/Navbar">
            <div className="bg-primary lg:p-40 rounded-[40px]  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90  duration-300 sm:p-14 ">
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
        <div className="lg:flex-col sm:flex">
          <div className="  sm:basis-1/2 lg:mx-2 lg:mb-0 sm:mr-2 sm:my-2 ">
            {' '}
            <Link to="/Experience">
              <div className="bg-darkGray lg:p-48  lg:py-16 rounded-[40px] space-y-5  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90  duration-300 sm:px-12 sm:py-12">
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
          <div className="lg:mx-2  sm:mt-2  sm:basis-1/2 ">
            {' '}
            <Link to="/Projects">
              <div className="bg-secondary  text-black lg:p-48 lg:py-16 lg:w-10px rounded-[40px]  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90  duration-300 sm:p-12 sm:py-12  ">
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
        <div className="lg:flex-col sm:flex">
          <div className="lg:mx-0 lg:my-2  sm:basis-1/2  sm:mx-2">
            {' '}
            <Link to="/Contact">
              <div className="bg-lightGray text-black lg:px-24 lg:py-16 rounded-[40px]  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90  duration-300 sm:px-12 sm:py-8">
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
          </div>
          <div className=" sm:basis-1/2">
            {' '}
            <Link to="/https://drive.google.com/file/d/1-KmSUFM-tFSKModC3ASHWq_-sLNgNuoJ/view?usp=sharing">
              <div className="bg-primary lg:px-24 lg:py-16 rounded-[40px]  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90  duration-300 sm:px-12 sm:py-10">
                <div className="flex items-center">
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
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
