import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Raleway", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${theme.colors.primaryFont};
  line-height:1.2
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

button {
  background-color:unset;
  border: none;
  cursor: pointer;
}

section {
  background-color: ${theme.colors.primaryBg};
  padding: 65px 0px;
}

`;

export default GlobalStyle;
