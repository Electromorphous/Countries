import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  line: {
    margin: "10px 0",
  },
  key: {
    fontSize: "1.1rem",
    fontWeight: 600,
  },
  value: {
    fontSize: "1.1rem",
    fontWeight: 300,
    marginLeft: 10,
  },
}));

export default function Details1({ country }) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.line}>
        <span className={classes.key}>Official name:</span>
        <span className={classes.value}>{country.name.official}</span>
      </div>
      <div className={classes.line}>
        <span className={classes.key}>Population:</span>
        <span className={classes.value}>{country.population}</span>
      </div>
      <div className={classes.line}>
        <span className={classes.key}>Region:</span>
        <span className={classes.value}>{country.region}</span>
      </div>
      <div className={classes.line}>
        <span className={classes.key}>Subregion:</span>
        <span className={classes.value}>{country.subregion}</span>
      </div>
      <div className={classes.line}>
        <span className={classes.key}>Capital:</span>
        <span className={classes.value}>
          {country.capital ? country.capital : <em>none</em>}
        </span>
      </div>
    </>
  );
}
