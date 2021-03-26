import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'TT Norm';

    font-size: ${({ theme }) => theme.font.sizes.medium};
    background: ${({ theme }) => theme.colors.background};

  }

  a {
    color: ${({ theme }) => theme.colors.lightGray};
    text-decoration: none;
    transition: opacity 300ms ease-in-out;

    &:hover {
      opacity: .6;
    }
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
  }

  h1,h2,h3,h4,h5,h6, strong, p {
    color: ${({ theme }) => theme.colors.black};
  }
`;
