import GlobalStyles from "./components/GlobalStyles";
import theme from "./theme";
import { ThemeProvider } from "@emotion/react";
import CustomRoutes from "./router/CustomRoutes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <CustomRoutes />
      </div>
    </ThemeProvider>
  );
}

export default App;
