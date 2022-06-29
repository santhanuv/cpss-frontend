import GlobalStyles from "./components/GlobalStyles";
import theme from "./theme";
import { ThemeProvider } from "@emotion/react";
import Login from "./pages/Login/Index";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/UserDashboard";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
