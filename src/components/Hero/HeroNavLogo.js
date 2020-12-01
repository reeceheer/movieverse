/** @jsx jsx */
/** @jsxRuntime classic */
import { css, jsx } from "@emotion/core";

// Navigation Logo (moviverse text)

const HeroNavLogo = () => <a href="/"> <h2 css={styles} src="">movieverse</h2></a> 

const styles = css`
    font-size: 22px;
    font-weight: 800;
    margin-right: 140px;
    user-select: none;
    text-decoration: none;
`;

export default HeroNavLogo;