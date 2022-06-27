import { css } from "@emotion/react";

const GlobalStyles = (theme) => css`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Roboto&display=swap");

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Inter", sans-serif;
    background-color: ${theme.colors.background};
  }
`;

export default GlobalStyles;
