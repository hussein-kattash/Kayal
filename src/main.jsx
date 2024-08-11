import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "react-auth-kit";
import { CoursesProvider } from "./context/CoursesContext.jsx";
import { LevelsProvider } from "./context/LevelsContext.jsx";
import App from "./App.jsx";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#234250",
      dark: "#002884",
      contrastText: "#fff",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider authType={"cookie"} authName={"_auth"}>
      <CoursesProvider>
        <LevelsProvider>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </LevelsProvider>
      </CoursesProvider>
    </AuthProvider>
  </React.StrictMode>
);
