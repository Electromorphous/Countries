import React, { useState, useEffect, useMemo } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Grid, Button } from "@mui/material";
import { useCountries } from "../utility/CountriesProvider";
import { makeStyles } from "@mui/styles";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const useStyles = makeStyles((theme) => ({
  infoContainer: {
    background: theme.palette.primary.main,
    padding: "50px 5%",
  },
  buttonContainer: {
    marginBottom: 50,
  },
  button: {
    background: theme.palette.primary.light,
    color: theme.palette.textColor.main,
    padding: "10px 30px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    borderRadius: 7,
    textTransform: "capitalize",
    fontSize: "1rem",
  },
}));

function Info() {
  let { name } = useParams();

  const classes = useStyles();
  const countries = useCountries();
  const history = useHistory();

  const [country, setCountry] = useState({});

  useEffect(() => {
    for (let obj of countries) {
      if (obj.name.common.toLowerCase() === name.toLowerCase()) {
        setCountry(obj);
        break;
      }
    }
  }, [countries, name]);

  useMemo(() => country, [country]);

  return (
    <Grid container className={classes.infoContainer}>
      <Grid item xs={12} className={classes.buttonContainer}>
        <Button
          variant="text"
          startIcon={<KeyboardBackspaceIcon />}
          className={classes.button}
          onClick={() => {
            history.push("/");
          }}
        >
          back
        </Button>
      </Grid>
      {!!(country && country.name) ? country.name.common : "country not found"}
    </Grid>
  );
}

export default Info;
