import React, { useState, createContext, useEffect } from "react";

export const MovieContext = createContext();

export const MovieState = ({ children }) => {
   /* My API key from the movie database */
   const API_KEY = "c4754b29495fbcd478d0882a9f03490b";

   /* states */
    const [isLoading, setIsLoading] = useState(false);
    const [hiddenMenu, setHiddenMenu] = useState(true);
    const [activeLink, setActiveLink] = useState("Popular"); /* Popular set to active Link so movies can show up on popular page when clicked */
    const [popularMovies, setPopularMovies] = useState([]);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [movies, setMovies] = useState([]);
    const [showButton, setShowButton] = useState(true);

    /* function to get popular movies from the movie database using my API key */
    const getPopularMovies = async () => {
       const popularMoviesResponse = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=4` /* fetches the API_KEY state to get access to the movies in tmbd */
          );
          
    const popularMoviesData = await popularMoviesResponse.json();
         setPopularMovies(popularMoviesData);
         console.log(popularMoviesData)
    };

 /* function to get all movies from the movie database using my API key */
    const getMovies = async () => {
       const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage}` /* fetches the currentPage state which is set to 1 */
       );
    const data = await response.json();
       if(search.trim() === '') {
          setMovies(data);
       }
    };

 /* function to make the movie search work */
    const handleSearch = async (e) => {
       e.preventDefault();
       if(search.trim === '') return;
       const searchResponse = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=${currentPage}`
       );
       const searchData = await searchResponse.json();
       setMovies(searchData);
       setShowButton(false);
    };

 /* function to get allow borwsing through previous page and next page */
    const newPage = (direction) => {
      if (direction === "next") {
        setCurrentPage(currentPage + 1);
        setIsLoading(true);
      } else if (direction === "previous" && currentPage !== 1) {
        setCurrentPage(currentPage - 1);
      }
    };

    /* displays the popular movies */
    useEffect(() => {
       getPopularMovies(); 
    },[])

    /* displays all movies on all movies page */
    useEffect(() => {
       if(search.trim() === ""){ 
          setShowButton(true);
       }
      getMovies();
    },[search, currentPage])

    /* allows movies to be displayed when browsing through the pages */
    useEffect(() => {
      const loadingTimeout = setTimeout(() => { 
         setIsLoading(false);
      }, 100)
      return () => clearTimeout(loadingTimeout);
    },[movies, currentPage])
   

   return (
      <MovieContext.Provider 
        value={{ hiddenMenu,
         setHiddenMenu,
         activeLink,
         setActiveLink,
         popularMovies,
         search,
         setSearch,
         currentPage,
         setCurrentPage,
         movies,
         setMovies,
         getPopularMovies,
         getMovies,
         handleSearch,
         isLoading,
         setIsLoading,
         showButton,
         setShowButton,
         newPage,
         }}>
          {children}
      </MovieContext.Provider>
   );
};