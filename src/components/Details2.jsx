import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  line: {
    margin: "10px 0",
  },
  key: {
    fontSize: "1rem",
    fontWeight: 600,
  },
  value: {
    fontSize: "1rem",
    fontWeight: 300,
    marginLeft: 10,
  },
}));

export default function Details2({ country }) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.line}>
        <span className={classes.key}>Top Level Domain:</span>
        <span className={classes.value}>{country.tld[0]}</span>
      </div>
      <div className={classes.line}>
        <span className={classes.key}>Currencies:</span>
        <span className={classes.value}>
          {Object.keys(country.currencies)
            .map((oneKey, i) => {
              return <span key={i}>{country.currencies[oneKey].name}</span>;
            })
            .reduce((prev, curr) => [prev, ", ", curr])}
        </span>
      </div>
      <div className={classes.line}>
        <span className={classes.key}>Languages:</span>
        <span className={classes.value}>
          {Object.keys(country.languages)
            .map((oneKey, i) => {
              return <span key={i}>{country.languages[oneKey]}</span>;
            })
            .reduce((prev, curr) => [prev, ", ", curr])}
        </span>
      </div>
    </>
  );
}
