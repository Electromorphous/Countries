import React, { useEffect, useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
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
  loader: {
    position: "absolute",
    color: theme.palette.textColor.main,
    top: -5,
    left: 175,
    padding: 10,
    opacity: 0.75,
  },
}));

export default function BorderCountries({ country }) {
  const classes = useStyles();
  const history = useHistory();

  const [borders, setBorders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBorder = async (code) => {
    return (
      await fetch(`https://restcountries.com/v3.1/alpha/${code}`).catch(
        console.log
      )
    ).json();
  };

  useEffect(() => {
    setLoading(true);

    if (country.borders)
      country.borders.forEach((border) => {
        fetchBorder(border).then((res) =>
          setBorders((prevArray) => [...prevArray, res[0].name.common])
        );
      });
    else setLoading(false);

    return () => {
      setBorders([]);
    };
  }, [country]);

  return (
    <div style={{ position: "relative" }}>
      <span className={classes.text}>Border Countries:</span>
      <>
        {borders.length > 0 ? (
          borders.map((border) => (
            <Button
              variant="text"
              key={border}
              className={classes.button}
              onClick={() => {
                history.push(`/${border}`);
              }}
            >
              {border}
            </Button>
          ))
        ) : (
          <>
            {loading ? (
              <CircularProgress className={classes.loader} />
            ) : (
              <em>none</em>
            )}
          </>
        )}
      </>
    </div>
  );
}
