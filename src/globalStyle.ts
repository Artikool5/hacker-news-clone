import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: inherit;
}

a {
    text-decoration: none;
    color: inherit;
}

ul {
    list-style: none;
}

body {
    font-family: Verdana, Geneva, sans-serif;
    font-size: 10pt;
}

a:visited {
    color: #828282;
}
`;
