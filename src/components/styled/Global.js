import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    color: #1C2833
  }
  
  body {
    background-color: #f7f7f7;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
  }
`