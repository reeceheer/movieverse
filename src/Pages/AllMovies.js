import React from 'react'
import { MovieState } from "../Context/MovieContext";
import HeroNav from '../components/Hero/HeroNav';
import '../App.css';

const AllMovies = () => {
  return (
    <body className="PopularBody">
    <MovieState>
      <div className="">
      <HeroNav />
      <div>
          <h1>testing</h1>
      </div>
      </div>
    </MovieState>
    </body>
  );
};

export default AllMovies;
