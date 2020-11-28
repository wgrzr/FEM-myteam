import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    overflow-x: hidden;
  }

  html, body {
  font-family: 'Livvic', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: hsl(185, 100%, 17%);
  color: hsl(0, 0%, 100%);
  font-size: 16px;
  max-width: 100vw;
  overflow-x: hidden;
	touch-action: none;

  }

    `;
