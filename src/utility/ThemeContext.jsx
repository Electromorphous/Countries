import React, { useState, useContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const ThemeUpdateContext = React.createContext();

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export default function ThemeContext({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const lightTheme = createTheme({
    palette: {
      mode: "light",

      primary: {
        light: "#fff",
        main: "#eee",
      },
      textColor: {
        main: "#000",
      },
    },
  });
  const darkTheme = createTheme({
    palette: {
      mode: "dark",

      primary: {
        light: "#2B3743",
        main: "#212E37",
      },
      textColor: {
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
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeProvider>
  );
}
