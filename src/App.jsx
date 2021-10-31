import React from "react";
import ThemeContext from "./utility/ThemeContext";
import { Paper } from "@mui/material";
import Header from "./containers/Header";
import Home from "./containers/Home";

function App() {
  return (
    <ThemeContext>
      <Paper style={{ width: "100%", height: "100%", borderRadius: 0 }}>
        <Header />
        <Home />
      </Paper>
    </ThemeContext>
  );
}

export default App;
