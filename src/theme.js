import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#c8d6e5",
  fontColor: "#123",
};

export const darkTheme = {
  body: "#222f3e",
  fontColor: "#fff",
};

export const GlobalStyles = createGlobalStyle`
    body {
      background-color: ${(props) => props.theme.body};
    }
`;
