import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  html, body {
    font-family: 'Inter Tight', sans-serif;
    padding: 0;
    margin: 0;
    line-height: 1.4;
    background-color: ${({ theme }) => theme.mainBGColor};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${({ theme }) => theme.textBlack || '#343434'};
    transition: background-color 0.5s ease, color 0.5s ease;
  }


  *, *::before, *::after {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
    outline: none;
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    background-color: transparent;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }
  
`;

export default GlobalStyles;