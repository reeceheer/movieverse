/** @jsx jsx */
/** @jsxRuntime classic */
import { css, jsx } from "@emotion/core";
import { useContext } from 'react';
import { MovieContext } from "../../Context/MovieContext";

// function to se the Active Link to the Navbar buttons 

const HeroNavLink = ({ btnText }) => {
    const {setHiddenMenu, activeLink, setActiveLink} = useContext(MovieContext);

    return (
        <button
        style={{ /*color: activeLink === btnText ? "#690AAF" : "#fff"*/ }}
          css={styles}
          onClick={() => {
            setActiveLink(btnText);
            setHiddenMenu(true);
          }}
        >
          {btnText}
        </button>
      );
    };

// css styles

const styles = css`
    border: none;
    outline: none;
    background: transparent;
    font-size: 22px;
    margin-right: 24px;
    font-weight: 800;
    cursor: pointer;
    user-select: none;
    @media (max-width: 860px) {
        font-size: 40px;
    }
`;

export default HeroNavLink;