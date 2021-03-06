import React from "react";
import { Paper, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  searchBarContainer: {
    background: theme.palette.primary.light,
    margin: "10px 0",
    padding: "0 20px",
    borderRadius: 7,
  },
}));

function SearchBar({ setInput }) {
  const classes = useStyles();
  return (
    <Paper
      elevation={0}
      className={classes.searchBarContainer}
      sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
    >
      <SearchIcon />
      <InputBase
        sx={{ ml: 1, flex: 1, margin: 2 }}
        placeholder="Search for a country..."
        inputProps={{ "aria-label": "search for a country" }}
        onChange={(event) => setInput(event.target.value)}
      />
    </Paper>
  );
}

export default SearchBar;
