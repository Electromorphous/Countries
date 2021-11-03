import React from "react";
import { Route, Switch } from "react-router-dom";
import ThemeContext from "./utility/ThemeContext";
import { Paper } from "@mui/material";
import CountriesProvider from "./utility/CountriesProvider";
import Header from "./containers/Header";
import Home from "./containers/Home";
import Info from "./containers/Info";

function App() {
  return (
    <ThemeContext>
      <Paper
        elevation={0}
        style={{ width: "100%", height: "100%", borderRadius: 0 }}
      >
        <CountriesProvider>
          <Header />
          <Switch>
            <Route exact from="/" component={Home} />
            <Route exact from="/:name" component={Info} />
          </Switch>
        </CountriesProvider>
      </Paper>
    </ThemeContext>
  );
}

export default App;
