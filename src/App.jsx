import React from "react";
import ThemeContext from "./utility/ThemeContext";
import Bruh from "./Bruh";

function App() {
  return (
    <ThemeContext>
      hello world
      <Bruh />
    </ThemeContext>
  );
}

export default App;
