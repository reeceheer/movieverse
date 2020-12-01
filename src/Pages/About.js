import React from 'react'
import { MovieState } from "../Context/MovieContext";
import HeroNav from '../components/Hero/HeroNav';
import '../About.css';

// function to create the About page and add the Navbar to the About page

const About = () => {
  return (
    <body className="AboutBody">
    <MovieState>
      <div className="aboutBody">
      <HeroNav />
      <div>
      </div>
      </div>
    </MovieState>
    </body>
  );
};

export default About;
