import React from "react";
import { Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import Countries from "../components/Countries";

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    background: theme.palette.primary.main,
    padding: "50px 5%",
    borderRadius: 0,
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={`home-container ${classes.homeContainer}`}>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item xs={12} sm={7} md={5}>
          <SearchBar />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <Filter />
        </Grid>
      </Grid>
      <Grid container alignItems="center" justifyContent="space-between">
        <Countries />
      </Grid>
    </Paper>
  );
}

export default Home;
