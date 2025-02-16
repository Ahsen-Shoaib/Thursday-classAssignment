import React from 'react';

import Header from '../Components/Header/page';


import Footer from '../Components/Footer/page';




const About: React.FC = () => {
  return (
    <div>
      <Header></Header>
      <h1>About Us</h1>
      <p>Welcome to our website! We are glad to have you here.</p>
      <p>Our mission is to provide excellent service and support.</p>
      <Footer></Footer>
    </div>
  );
};

export default About;

