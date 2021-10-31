import React from "react";
import ThemeContext from "./utility/ThemeContext";
import Header from "./containers/Header";
import { Paper } from "@mui/material";

function App() {
  return (
    <ThemeContext>
      <Paper style={{ width: "100%", height: "100%", borderRadius: 0 }}>
        <Header />
        hello world
      </Paper>
    </ThemeContext>
  );
}

export default App;
