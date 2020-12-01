/** @jsx jsx */
/** @jsxRuntime classic */
import { css, jsx } from "@emotion/core";
import Container from "../ReusableComponents/Container";
import { MovieContext } from "../../Context/MovieContext";
import React, { useContext } from "react";

// function to make the Previous and Next buttons work on the All Movies Page

const MoviesButton = () => {
    const { newPage, currentPage, showButton } = useContext(MovieContext);

    return (
        <div css={styles} className="moviesButton">
          {showButton && (
            <Container>
              <React.Fragment>
                <button
                  style={{
                    cursor: currentPage !== 1 ? "pointer" : "not-allowed",
                    
                  }}
                  onClick={() => newPage("previous")}
                >
                  Prev Page
                </button>
                <button onClick={() => newPage("next")}>Next Page</button>
              </React.Fragment>
            </Container>
          )}
        </div>
      );
    };

// css for the buttons and page

    const styles = css`
  width: 100%;
  .container {
    &:nth-child(1) {
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      button {
        border: none;
        outline: none;
        border-radius: 50px;
        border: 2px solid #5F1B91;
        background: transparent;
        padding: 10px 16px;
        margin-top: 50px;
        margin-left: 220px;
        width: 190px;
        color: #ffffff;
        user-select: none;
        margin: 0 10px;
        transition: background 500ms ease-in-out;
        &:hover {
          background: #690AEF;
        }
      }
    }
  }
`;

export default MoviesButton;