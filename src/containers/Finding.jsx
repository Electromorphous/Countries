import React from "react";
import { CircularProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  loader: {
    color: theme.palette.textColor.main,
    opacity: 0.75,
    margin: " 50px auto",
  },
  text: {
    fontSize: "3rem",
    fontWeight: 300,
    margin: "100px auto",
    textAlign: "center",
  },
}));

export default function Finding({ found }) {
  const classes = useStyles();
  return (
    <>
      {found === 0 ? (
        <CircularProgress className={classes.loader} />
      ) : (
        <h1 className={classes.text}>Country not found</h1>
      )}
    </>
  );
}
