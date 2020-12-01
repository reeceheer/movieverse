/** @jsx jsx */
/** @jsxRuntime classic */
import { css, jsx } from "@emotion/core";
import HeroNav from "./HeroNav";
import Output from "../Output/Output";


// function to display the Navbar and the Popular Movie output onto the Popular Page

const Hero = () => {
    return(
    <body className="PopularBody">
        <section css={styles} className="hero">
            <HeroNav />
            <Output />
        </section>
    </body>
    );
};

// styling for the Popular page

const styles = css`
    width: 100%;
    min-height: 100vh;
    h3{
        font-size: 30px;
        padding-left: 300px;
        margin-top: 50px;
        margin-bottom: 10px;

    }
`;

export default Hero;