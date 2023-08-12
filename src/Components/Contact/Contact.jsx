import React, { useState } from 'react';
import protest from './images/protest.png';
import ContactCard from './ContactCard.jsx';

const Contact = () => {
  const [Card, setCard] = useState(false);

  const openCard = () => {
    setCard(true);
  };

  const closeCard = () => {
    setCard(false);
  };

  return (
    <div className="flex flex-col mx-10 sm:mx-auto my-4 sm:my-auto  w-auto h-64 sm:w-full sm:h-90  py-40 sm:py-62 items-center justify-center rounded-3xl space-y-2 bg-primary container ">
      <img src={protest} alt="share " className=" w-12 h-12" />
      <h1 className="lg:text-3xl font-bold md:text-2xl sm:text-xl">
        Love what you See?
      </h1>
      <h2 className="lg:text-3xl font-bold md:text-2xl sm:text-xl mx-8">
        Wanna work with me or Share a feedback
      </h2>
      <button
        className="p-4 px-6 bg-lightGray text-black rounded-full "
        onClick={openCard}
      >
        Get in Touch
      </button>
      {Card && <ContactCard onClose={closeCard} />}
    </div>
  );
};

export default Contact;
