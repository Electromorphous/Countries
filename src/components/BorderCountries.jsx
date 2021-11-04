import React from "react";
// import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: "1.2rem",
    fontWeight: 600,
  },
  button: {
    background: theme.palette.primary.light,
    color: theme.palette.textColor.main,
    marginBottom: 50,
    padding: "10px 30px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    borderRadius: 7,
    textTransform: "capitalize",
    fontSize: "1rem",
  },
}));

export default function BorderCountries({ country }) {
  const classes = useStyles();

  return (
    <div className={classes.borderCountriesContainer}>
      <span className={classes.text}>Border Countries:</span>
    </div>
  );
}
