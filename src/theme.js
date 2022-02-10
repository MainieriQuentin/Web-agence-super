import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#DCDADB",
  fontColor: "#123",
};

export const darkTheme = {
  body: "#16010E",
  fontColor: "#fff",
};

export const GlobalStyles = createGlobalStyle`
    body {
      background-color: ${(props) => props.theme.body};
    }
`;
