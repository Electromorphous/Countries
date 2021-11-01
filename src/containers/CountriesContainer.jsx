import React, { useState, useEffect } from "react";
import { Grid, CircularProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  countriesContainer: {
    margin: "50px 10px",
  },
  loader: {
    color: theme.palette.loader.main,
    margin: "100px auto",
    opacity: 0.75,
  },
}));

function CountriesContainer() {
  const classes = useStyles();

  const [countries, setCountries] = useState([]);

  async function fetchCountries() {
    const data = await fetch("https://restcountries.com/v3.1/all").catch(
      (error) => {
        console.log(error);
      }
    );
    return data.json();
  }

  useEffect(() => {
    fetchCountries().then(setCountries);
  }, []);

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      className={classes.countriesContainer}
    >
      <>
        {!!countries.length ? (
          countries.map((country) => (
            <Grid item xs={12} sm={6} md={3} key={country.name.common}>
              {country.name.common}
            </Grid>
          ))
        ) : (
          <CircularProgress className={classes.loader} />
        )}
      </>
    </Grid>
  );
}

export default CountriesContainer;
