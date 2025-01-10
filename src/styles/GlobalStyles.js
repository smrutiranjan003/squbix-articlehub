import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;
export const lightTheme = {
  background: '#f5f5f5',
  color: '#333',
};

export const darkTheme = {
  background: '#333',
  color: '#f5f5f5',
};

export default GlobalStyles;
