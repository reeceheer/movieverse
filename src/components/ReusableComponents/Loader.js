/** @jsx jsx */
/** @jsxRuntime classic */
import { css, jsx } from "@emotion/core";

// function for a Loader which loads the Movies for when clicking next Page on All Movies page

const Loader = () => <div css={styles} className="loader"></div>;

// css styles for loading

const styles = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 10px;
  border-radius: 5px;
  animation: spinner 1.8s ease-in-out infinite;
  &:before,
  &:after {
    position: absolute;
    display: block;
    content: "";
    animation: spinner 1.8s ease-in-out infinite;
    height: 10px;
    border-radius: 5px;
  }
  &:before {
    top: -20px;
    left: 10px;
    width: 40px;
  }
  &:after {
    bottom: -20px;
    width: 35px;
  }
  @keyframes spinner {
    0% {
      transform: translateX(40px);
    }
    50% {
      transform: translateX(-30px);
    }
    100% {
      transform: translateX(40px);
    }
  }
`;

export default Loader;