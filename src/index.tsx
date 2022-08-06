import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    text: { primary: "rgba(0,0,0,0.87)" },
    primary: {
      dark: "rgba(255,255,255,1)",
      light: "rgba(255,255,255,1)",
      main: "rgba(255,255,255,1)",
    },
  },
  typography: { fontFamily: "Quicksand" },
});

ReactDOM.render(
  <BrowserRouter>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
