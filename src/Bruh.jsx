import React from "react";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@emotion/react";
import { useThemeUpdate } from "./utility/ThemeContext";

const useStyles = makeStyles((theme) => ({
  background: {
    background: theme.palette.primary.main,
    color: theme.palette.textColor.main,
    padding: 20,
  },
}));

function Bruh() {
  const classes = useStyles();

  const theme = useTheme();
  const toggleTheme = useThemeUpdate();

  return (
    <>
      <button onClick={toggleTheme}>click this shit</button>
      <div className={classes.background}>{theme.palette.mode}</div>
    </>
  );
}

export default Bruh;
