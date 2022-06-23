import GlobalStyles from "./components/GlobalStyles";
import theme from "./theme";
import { ThemeProvider } from "@emotion/react";
import Login from "./pages/Login/Index";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <Login />
      </div>
    </ThemeProvider>
  );
}

export default App;
