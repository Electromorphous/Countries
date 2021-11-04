import React from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useHistory } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const useStyles = makeStyles((theme) => ({
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

export default function BackButton() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Button
      variant="text"
      startIcon={<KeyboardBackspaceIcon />}
      className={classes.button}
      onClick={() => {
        history.goBack();
      }}
    >
      Back
    </Button>
  );
}
