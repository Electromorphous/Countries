import React from "react";
import { Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";

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
    <Paper className={`home-container ${classes.homeContainer}`}>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item xs={12} sm={5}>
          <SearchBar />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Filter />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Home;
