import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Welcome from './Components/Welcome/Welcome';
import Experience from './Components/Experience/Experience';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Experience />
    </div>
  );
};

export default Home;
