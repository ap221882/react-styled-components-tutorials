import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`:root {
  --mainBorder: 1px solid red;
}

body {
  background-color: #f2f4f8;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.btn {
  background-color: rgb(46, 174, 116);
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: capitalize;
  padding: 0.25rem;
  display: block;
  width: 200px;
  margin: 1rem auto;}
`;

export default GlobalStyles;
