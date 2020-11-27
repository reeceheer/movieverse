/** @jsx jsx */
/** @jsxRuntime classic */
import { css, jsx } from "@emotion/core";
import HeroNavLink from "./HeroNavLink";
import { useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";

const HeroNavMenu = () => {
    const {hiddenMenu} = useContext(MovieContext);

    return(
    <div css={styles} className={(hiddenMenu ? "hidden" : "") + " heroNavMenu"}>
        <a href="/Movies">
        <HeroNavLink btnText="Popular"/>
        </a>
        <a href="/AllMovies">
        <HeroNavLink btnText="All Movies"/>
        </a>
        <a href="/about">
        <HeroNavLink btnText="About"/> 
        </a>
    </div>
    );
};

const styles = css`
  display: flex;
  margin-left: 50px;
  @media (max-width: 860px) {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
    min-height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    padding-left: 0;
    padding: 20px 50px;
    width: 100%;
    max-width: 340px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    transition: all 800ms ease-in-out;
    &.hidden {
      left: -600px;
      opacity: 0;
    }
  }
`;


export default HeroNavMenu;