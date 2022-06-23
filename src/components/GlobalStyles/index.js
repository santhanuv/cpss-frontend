import Styles from "./GlobalStyles";
import { Global, useTheme } from "@emotion/react";

const GlobalStyles = () => {
  const theme = useTheme();

  return <Global styles={Styles(theme)} />;
};

export default GlobalStyles;
