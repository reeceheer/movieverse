/** @jsx jsx */
/** @jsxRuntime classic */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";
import Container from "../ReusableComponents/Container";
import Popular from "../Popular/Popular";
import Movies from "../Movies/Movies";
import MoviesButton from "../Movies/MoviesButton";

// function to output the movies onto different pages when the link is clicked using activeLink

const Output = () => {
    const {activeLink} = useContext(MovieContext);

/* WHEN Popular IS CLICKED GETS POPULAR MOVIES FROM API USING FUCNTION IN Popular.js */
/* WHEN All Movies IS CLICKED GETS ALL MOVIES FROM API USING FUCNTION IN Movies.js and MoviesButton.js */
    return(
        <div css={styles} className="output">
            {activeLink === "Popular" && (
                <Container>
                    <Popular />
                </Container>
            )}
            {activeLink === "All Movies" && (
                <Container>
                    <Movies />
                    <MoviesButton />
                </Container>
            )}
        </div>
    );
};

// css styles for pages

const styles = css`
  width: 100%;
  min-height: calc(100vh - 80px);
  display: flex;
  .Infinity{
    margin-left: 1062px;
    position:relative; top:462px;
  }
  > .container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  @media (max-width: 1365px) {
    > .container {
      max-width: 90%;
    }
  }
`;

export default Output;