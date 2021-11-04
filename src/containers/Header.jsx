import React from "react";
import { makeStyles } from "@mui/styles";
import { useThemeUpdate } from "../utility/ThemeContext";
import { Grid, Paper, Button, Typography } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    background: theme.palette.primary.light,
    padding: "20px 5%",
    borderRadius: 0,
  },
  title: {
    width: "max-content",
    fontSize: "1.4rem",
    cursor: "pointer",
  },
  icon: {
    color: theme.palette.textColor.main,
    fontSize: "1.2rem",
    cursor: "pointer",
  },
  buttonText: {
    color: theme.palette.textColor.main,
    fontSize: "1rem",
    textTransform: "capitalize",
    marginLeft: 5,
  },
}));

function Header() {
  const classes = useStyles();
  const history = useHistory();
  const toggleTheme = useThemeUpdate();

  return (
    <Paper className={`header-container ${classes.headerContainer}`}>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        flexWrap="nowrap"
      >
        <Grid item xs={8}>
          <h1
            className={`title ${classes.title}`}
            onClick={() => history.push("/")}
          >
            Where in the world?
          </h1>
        </Grid>
        <Grid item xs={4} textAlign="right">
          <Button
            style={{ borderRadius: 10, width: "max-content" }}
            onClick={toggleTheme}
          >
            <DarkModeIcon className={`icon ${classes.icon}`} />
            <Typography className={`button-text ${classes.buttonText}`}>
              Dark Mode
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Header;
