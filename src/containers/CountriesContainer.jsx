import React, { useState, useEffect } from "react";
import { Grid, CircularProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomCard from "../components/CustomCard";

const useStyles = makeStyles((theme) => ({
  countriesContainer: {
    margin: "20px 0",
    flexWrap: "wrap",
  },
  loader: {
    color: theme.palette.loader.main,
    margin: "100px auto",
    opacity: 0.75,
  },
}));

function CountriesContainer({ input }) {
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
      className={`countries-container ${classes.countriesContainer}`}
    >
      <>
        {!!countries.length ? (
          countries.map((country) => {
            if (
              country.name.common.toLowerCase().includes(input.toLowerCase())
            ) {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  className="card-container"
                  key={country.name.common}
                >
                  <CustomCard country={country} />
                </Grid>
              );
            }
            return (
              <div style={{ display: "none" }} key={country.name.common}></div>
            );
          })
        ) : (
          <CircularProgress className={classes.loader} />
        )}
      </>
    </Grid>
  );
}

export default CountriesContainer;
