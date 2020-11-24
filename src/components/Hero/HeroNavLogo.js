/** @jsx jsx */
/** @jsxRuntime classic */
import { css, jsx } from "@emotion/core";

const HeroNavLogo = () => <h2 css={styles}>movieverse</h2>

const styles = css`
    font-size: 22px;
    font-weight: 800;
    user-select: none;

`;

export default HeroNavLogo;