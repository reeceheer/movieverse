/** @jsx jsx */
/** @jsxRuntime classic */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";
import Container from "../ReusableComponents/Container";
import Loader from "../ReusableComponents/Loader";

const Movies = () => {
    const { movies, isLoading } = useContext(MovieContext);

    return(
        <div css={styles} className="movies">
            <Container>
                {movies.results && movies.results.length === 0 && (
                <h1 className="error">Movie not found</h1>
                )}
                {!isLoading ? (
                    movies.results && movies.results.map((movieItem, index) => (
                      <div>
                        <img key={index} src={`https://image.tmdb.org/t/p/w400/${movieItem.poster_path}` } alt={"poster"} />
                        <h4 className="itemTitle">{movieItem.title}</h4>
                        <h4 className="itemTitle">{movieItem.vote_average}</h4>
                      </div>
                    ))
                ): (
                    <Loader />
                )}
            </Container>
        </div>
    );
};

const styles = css`
  width: 100%;
  .container {
    &:nth-child(1) {
      height: 76vh;
      overflow-y: scroll;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      &::-webkit-scrollbar {
        width: 0;
      }
      .error {
        font-size: 100px;
        color: red;
      }
      .itemTitle{
        font-size: 11px;
      }
    }
    img {
      width: 100%;
      max-width: 240px;
      height: 360px;
      margin: 10px 0;
      margin-top: 20px;
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

export default Movies;