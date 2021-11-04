import React from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Details1 from "../components/Details1";
import Details2 from "../components/Details2";

const useStyles = makeStyles((theme) => ({
  detailsContainer: {
    width: "100%",
    paddingLeft: 30,
  },
  countryDetails: {
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
}));

export default function DetailsContainer({ country }) {
  const classes = useStyles();
  return (
    <Grid
      className={`${classes.detailsContainer} details-container`}
      item
      xs={12}
      md={6}
    >
      <h1 className={classes.title}>{country.name.common}</h1>
      <Grid container className={classes.countryDetails}>
        <Grid item xs={12} md={6} padding="20px 20px 0 0">
          <Details1 country={country} />
        </Grid>
        <Grid item xs={12} md={6} padding="20px 20px 0 0">
          <Details2 country={country} />
        </Grid>
      </Grid>
    </Grid>
  );
}
