import React from 'react';
import protest from './images/protest.png';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl space-y-2 bg-primary w-90 h-96 mx-60">
      <img src={protest} alt="share " className=" w-12 h-12" />
      <h1 className="text-3xl font-bold">Love what you See?</h1>
      <h2 className="text-3xl font-semibold">
        {' '}
        Wanna work with me or Share a feedback
      </h2>
      <button className="p-4 px-6 bg-lightGray text-black rounded-full">
        Get in Touch
      </button>
    </div>
  );
};

export default Contact;
