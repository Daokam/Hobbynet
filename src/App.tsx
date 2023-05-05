import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainPage from "./pages/main-page/main-page";
import { theme } from "./utils/theme";
import { ThemeProvider } from "@emotion/react";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainPage></MainPage>
    </ThemeProvider>
  );
}

export default App;
