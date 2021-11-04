import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid, CircularProgress } from "@mui/material";
import { useCountries } from "../utility/CountriesProvider";
import { makeStyles } from "@mui/styles";
import BackButton from "../components/BackButton";
import DetailsContainer from "./DetailsContainer";

const useStyles = makeStyles((theme) => ({
  infoContainer: {
    background: theme.palette.primary.main,
    padding: "50px 5%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  loader: {
    color: theme.palette.textColor.main,
    opacity: 0.75,
    margin: " 50px auto",
  },
  flagImage: {
    width: "100%",
    paddingRight: 30,
  },
}));

function Info() {
  let { name } = useParams();
  const classes = useStyles();
  const countries = useCountries();

  const [country, setCountry] = useState({});

  useEffect(() => {
    if (countries.length > 0) {
      for (let obj of countries) {
        if (obj.name.common.toLowerCase() === name.toLowerCase()) {
          setCountry(obj);
          break;
        }
      }
      // console.log(country);
      if (Object.keys(country).length === 0) console.log("country not found");
    }
    // console.log("here");
    console.log(country);

    // if (countries.length > 0 && Object.keys(country).length === 0) {
    //   console.log("Country not found");
    //   console.log(countries);
    //   console.log(country);
    // }

    return () => {
      // if (Object.keys(country).length === 0) console.log("country not found");
    };
  }, [countries, name, country]);

  // useMemo(() => country, [country]);

  return (
    <Grid container className={classes.infoContainer}>
      <Grid item xs={12}>
        <BackButton />
      </Grid>
      {!!(country && country.name) ? (
        <>
          <Grid item xs={12} md={6} position="relative">
            <img
              className={`${classes.flagImage} flag-image`}
              src={country.flags.svg}
              alt={country.name.common}
            />
            <div className="overlay"></div>
          </Grid>

          <DetailsContainer country={country} />
        </>
      ) : (
        <CircularProgress className={classes.loader} />
      )}
    </Grid>
  );
}

export default Info;
