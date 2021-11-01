import React, { useState, useContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const ThemeUpdateContext = React.createContext();

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export default function ThemeContext({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const lightTheme = createTheme({
    palette: {
      mode: "light",

      background: {
        default: "#fff",
      },
      primary: {
        light: "#fff",
        main: "#eee",
        dark: "#ddd",
      },
      textColor: {
        main: "#000",
      },
      loader: {
        main: "#000",
      },
    },
  });
  const darkTheme = createTheme({
    palette: {
      mode: "dark",

      background: {
        default: "#2B3743",
      },
      primary: {
        light: "#2B3743",
        main: "#212E37",
        dark: "#1c262e",
      },
      textColor: {
        main: "#fff",
      },
      loader: {
        main: "#fff",
      },
    },
  });

  const toggleTheme = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        <CssBaseline />
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeProvider>
  );
}
