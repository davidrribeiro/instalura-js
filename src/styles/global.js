import { createGlobalStyle, css } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: local(''),
    url('/fonts/Rubik-v23-latin-500.woff2') format('woff2'),
  }
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
      url('/fonts/Rubik-v23-latin-regular.woff2') format('woff2'),
  }
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local(''),
      url('/fonts/Rubik-v23-latin-700.woff2') format('woff2'),
  }

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${normalize}

  html, body {
    display: flex;
    min-height: 100vh;
    width: 100%;
  }

  #__next {
      flex: 1;
      display: flex;
      flex-direction: column;
  }

  body {
    font-family: {({theme}) => theme.fontFamily};
    background: #fff;
  }
`;

export default GlobalStyles;
