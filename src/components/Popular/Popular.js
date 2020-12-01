/** @jsx jsx */
/** @jsxRuntime classic */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";
import Container from "../ReusableComponents/Container";

// function to display the Popular movies from the movie database API with images, title and ratings 


const Popular = () => {
    const {popularMovies} = useContext(MovieContext);

    return(
        <div css={styles} className="popularMovies">
            <Container>
                {popularMovies.results && popularMovies.results.map((popularMoviesItem, index) => (
                  <div>
                    <img key={index} src={`https://image.tmdb.org/t/p/w400/${popularMoviesItem.poster_path}`} alt="poster" />
                    <h4 className="itemTitle">{popularMoviesItem.title}</h4>
                    <h4 className="itemRating">{popularMoviesItem.vote_average}</h4>
                </div>
                ))}
            </Container>
        </div>
    );
};

// css styles

const styles = css`
  width: 100%;
  .container {
    &:nth-child(1) {
      height: 92vh;
      overflow-y: scroll;
      display: flex;
      padding-top: 20px;
      padding-bottom: 20px;
      justify-content: space-between;
      flex-wrap: wrap;
      &::-webkit-scrollbar {
        width: 0;
      }
    h4{
      font-size: 11px;    
    }
    }
    img {
      width: 100%;
      max-width: 240px;
      height: 360px;
      margin: 10px 0;
      margin-top: 40px;

    }
  }
  @media (max-width: 600px) {
    .container {
      img {
        max-width: 100%;
        height: 500px;
      }
    }
  }
  @media (min-width: 601px) and (max-width: 854px) {
    .container {
      img {
        max-width: 48%;
      }
    }
  }
  @media (min-width: 855px) and (max-width: 1144px) {
    .container {
      img {
        max-width: 31%;
      }
    }
  }
  @media (min-width: 1145px) and (max-width: 1365px) {
    .container {
      img {
        max-width: 23.4%;
      }
    }
  }
`;

export default Popular;