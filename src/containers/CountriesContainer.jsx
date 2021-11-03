import React, { useState, useEffect } from "react";
import { Grid, CircularProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomCard from "../components/CustomCard";
import { useCountries } from "../utility/CountriesProvider";

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

function CountriesContainer({ input, regions }) {
  const classes = useStyles();

  const countries = useCountries();

  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const filterCountries = () => {
      setFilteredCountries(
        countries.map((country) => {
          if (
            country.name.common.toLowerCase().includes(input.toLowerCase()) &&
            (regions.length === 0 || regions.includes(country.region))
          ) {
            return country;
          }
          return null;
        })
      );
    };
    filterCountries();
  }, [input, countries, regions]);

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      className={`countries-container ${classes.countriesContainer}`}
    >
      <>
        {!!filteredCountries.length ? (
          filteredCountries.map((country) => {
            if (country)
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
            return null;
          })
        ) : (
          <CircularProgress className={classes.loader} />
        )}
      </>
    </Grid>
  );
}

export default CountriesContainer;
