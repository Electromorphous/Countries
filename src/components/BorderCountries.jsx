import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  borderCountriesContainer: {
    marginBottom: 50,
  },
  text: {
    fontSize: "1.2rem",
    fontWeight: 600,
    marginRight: 7,
  },
  button: {
    background: theme.palette.primary.light,
    color: theme.palette.textColor.main,
    fontSize: "1rem",
    margin: "5px 5px 10px 5px",
    padding: "5px 10px",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
    borderRadius: 7,
    textTransform: "capitalize",
  },
}));

export default function BorderCountries({ country }) {
  const classes = useStyles();
  const history = useHistory();

  const [borders, setBorders] = useState([]);

  const fetchBorder = async (code) => {
    return (
      await fetch(`https://restcountries.com/v3.1/alpha/${code}`).catch(
        console.log
      )
    ).json();
  };

  useEffect(() => {
    country.borders.forEach((border) => {
      console.log(border);
      fetchBorder(border).then((res) =>
        setBorders((prevArray) => [...prevArray, res[0].name.common])
      );
    });

    return () => {
      setBorders([]);
    };
  }, [country]);

  return (
    <div className={classes.borderCountriesContainer}>
      <span className={classes.text}>Border Countries:</span>
      <>
        {borders.map((border) => (
          <Button
            variant="text"
            className={classes.button}
            onClick={() => {
              history.push(`/${border}`);
            }}
          >
            {border}
          </Button>
        ))}
      </>
    </div>
  );
}
