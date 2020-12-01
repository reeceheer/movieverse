import React from 'react'
import { MovieState } from "./Context/MovieContext";
import Hero from './components/Hero/Hero.js';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from "./Pages/About";
import AllMovies from "./Pages/AllMovies";
import Movies from "./Pages/Movies";
import Home from "./Pages/Home";

// function to route the pages together using react router

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/popular" exact component={Movies} />
        <Route path="/allMovies" exact component={AllMovies} />
    <MovieState>
      <Hero />
    </MovieState>
      </Switch>
    </Router>
  );
};

export default App;
