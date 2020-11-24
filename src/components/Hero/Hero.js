/** @jsx jsx */
/** @jsxRuntime classic */
import { css, jsx } from "@emotion/core";
import HeroNav from "./HeroNav";


const Hero = () => {
    return(
        <section css={styles} className="hero">
            <HeroNav />
            <h1>Looking for new movies <br></br>to watch?
                use movieverse to find <br></br>
                movies you may like.
            </h1>
            <button className="homeBtn"> Search Now </button>
        </section>

    );
};

const styles = css`
    width: 100%;
    min-height: 100vh;
    h1{
        padding-left: 220px;
        padding-top: 260px;
        font-size: 40px;
        letter-spacing: 0 10px;
    }
    .homeBtn{
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
        &::placeholder{
            color: #ffffff;
            letter-spacing: 1px;
        }
    }
`;

export default Hero;