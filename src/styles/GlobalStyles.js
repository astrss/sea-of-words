import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'VAG World';
    src: url('../assets/fonts/VAG_World.woff2') format('woff2'),
        url('../assets/fonts/VAG_World.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    font-family: 'VAG World', sans-serif;
    color: #FFFFFF;
  }

  body {
    line-height: 1.5;
    background-color: #f5f5f5;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  #root {
    height: 100%;
    background: #000000;
  }
`;

export default GlobalStyle;
