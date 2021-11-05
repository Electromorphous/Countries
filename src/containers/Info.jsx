import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import { useCountries } from "../utility/CountriesProvider";
import { makeStyles } from "@mui/styles";
import BackButton from "../components/BackButton";
import DetailsContainer from "./DetailsContainer";
import Finding from "./Finding";

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
  const [found, setFound] = useState(0);

  useEffect(() => {
    if (countries.length > 0) {
      const foundCountry = countries.find(
        (c) => c.name.common.toLowerCase() === name.toLowerCase()
      );
      if (foundCountry) {
        setCountry(foundCountry);
        setFound(1);
        return;
      } else {
        setFound(-1);
        return;
      }
    }
  }, [countries, name, country]);

  return (
    <Grid container className={classes.infoContainer}>
      <Grid item xs={12}>
        <BackButton />
      </Grid>
      {found === 1 ? (
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
        <Finding found={found} />
      )}
    </Grid>
  );
}

export default Info;
