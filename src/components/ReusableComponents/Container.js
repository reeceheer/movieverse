/** @jsx jsx */
/** @jsxRuntime classic */
import { css, jsx } from "@emotion/core";

// function for global containers use throughout the site

const Container = ({ children }) => (
  <div css={styles} className="container">
    {children}
  </div>
);

// css styles for container

const styles = css`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
`;

export default Container;