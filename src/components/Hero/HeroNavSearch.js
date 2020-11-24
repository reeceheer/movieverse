/** @jsx jsx */
/** @jsxRuntime classic */
import { css, jsx } from "@emotion/core";

const HeroNavSearch = () => {
    return(
        <form css={styles}>
            <input type="text" placeholder="Search for movies..." />
        </form>
    );
};

const styles = css`
    height: 40px;
    min-height: 40px;
    padding-left: 400px;
    input{
        border: none;
        outline: none;
        border-radius: 50px;
        border: 2px solid #3F006D;
        background: transparent;
        padding: 10px 16px;
        width: 260px;
        color: #ffffff;
        &::placeholder{
            color: #ffffff;
            letter-spacing: 1px;
        }
    }
    @media(max-width: 860px){
        input{
            width: 220px;
        }
    }
`;


export default HeroNavSearch;