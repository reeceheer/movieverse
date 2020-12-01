import React from 'react'
import { MovieState } from "../Context/MovieContext";
import HeroNav from '../components/Hero/HeroNav';
import '../home.css';

// function to create the Homepage and add Navbar, images and a button

const Home = () => {
  return (
    <body className="HomeBody">
    <MovieState>
      <section>
          <HeroNav />
      <h1>Looking for new movies <br></br>to watch?
                use movieverse to find <br></br>
                movies you may like.
            </h1>
            <button className="homeBtn" src=""> Search Now </button>
      </section>
    </MovieState>
    </body>
  );
};

export default Home;
