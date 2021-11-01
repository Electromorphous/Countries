import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@mui/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const useStyles = makeStyles((theme) => ({
  filterContainer: {
    background: theme.palette.primary.light,
    margin: "10px 0",
    borderRadius: 7,
  },
  inputLabel: {
    color: `${theme.palette.textColor.main} !important`,
    fontSize: "1rem",
    opacity: 0.5,
  },
}));

export default function BasicSelect() {
  const classes = useStyles();

  const [region, setRegion] = useState("");

  return (
    <Paper
      elevation={0}
      className={`filter-container ${classes.filterContainer}`}
    >
      <FormControl fullWidth>
        <InputLabel className={classes.inputLabel}>Filter by Region</InputLabel>
        <Select
          className={classes.selectField}
          value={region}
          label="Region"
          IconComponent={KeyboardArrowDownIcon}
          onChange={(e) => {
            setRegion(e.target.value);
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Africa">Africa</MenuItem>
          <MenuItem value="America">America</MenuItem>
          <MenuItem value="Asia">Asia</MenuItem>
          <MenuItem value="Europe">Europe</MenuItem>
          <MenuItem value="Oceania">Oceania</MenuItem>
        </Select>
      </FormControl>
    </Paper>
  );
}
