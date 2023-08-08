import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Welcome from './Components/Welcome/Welcome';
import Experience from './Components/Experience/Experience';
import Tech from './Components/Tech/Tech';
import Project from './Components/Projects/Project';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Experience />
      <Tech />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
