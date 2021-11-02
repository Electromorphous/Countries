import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import CountriesContainer from "../containers/CountriesContainer";

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    background: theme.palette.primary.main,
    padding: "50px 5%",
    borderRadius: 0,
    minHeight: "100vh",
  },
}));

function Home() {
  const classes = useStyles();

  const [input, setInput] = useState("");
  const [regions, setRegions] = useState([]);

  const regionNames = ["Africa", "America", "Asia", "Europe", "Oceania"];

  return (
    <Paper elevation={0} className={`home-container ${classes.homeContainer}`}>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item xs={12} sm={7} md={5}>
          <SearchBar setInput={setInput} />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <Filter
            regions={regions}
            setRegions={setRegions}
            regionNames={regionNames}
          />
        </Grid>
      </Grid>

      <CountriesContainer input={input} />
    </Paper>
  );
}

export default Home;
