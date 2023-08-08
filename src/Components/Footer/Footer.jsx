import React from 'react';
import vite from './icons/vitejs.svg';
import netlify from './icons/netlify.png';

const Footer = () => {
  return (
    <div className=" flex justify-around lg:mt-28 md:mt-18 sm:mt-8 mb-4 px-60  ">
      <div className="flex">
        <p>Build with </p>
        <div className="mx-2">
          <img src={vite} alt="" className="w-8 h-8" />
        </div>
        <p>deployed on</p>
        <div className="mx-2">
          <img src={netlify} alt="" className="w-8 h-8" />
        </div>
        by Jayanth Koppala
      </div>
      <div className="flex">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </div>
  );
};

export default Footer;
