import React from "react";
import ThemeContext from "./utility/ThemeContext";
import { Paper } from "@mui/material";
import Header from "./containers/Header";
import Home from "./containers/Home";
import CountriesProvider from "./utility/CountriesProvider";

function App() {
  return (
    <ThemeContext>
      <Paper
        elevation={0}
        style={{ width: "100%", height: "100%", borderRadius: 0 }}
      >
        <CountriesProvider>
          <Header />
          <Home />
        </CountriesProvider>
      </Paper>
    </ThemeContext>
  );
}

export default App;
