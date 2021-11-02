import React from "react";
import { makeStyles } from "@mui/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Paper,
  useTheme,
  Checkbox,
} from "@mui/material";

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

export default function Filter({ regions, setRegions, regionNames }) {
  const classes = useStyles();
  const theme = useTheme();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setRegions(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Paper
      elevation={0}
      className={`filter-container ${classes.filterContainer}`}
    >
      <FormControl fullWidth>
        <InputLabel className={classes.inputLabel}>Filter by Region</InputLabel>
        <Select
          value={regions}
          label="Region"
          multiple
          IconComponent={KeyboardArrowDownIcon}
          onChange={handleChange}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={{
            PaperProps: {
              style: {
                marginTop: 10,
                background: theme.palette.primary.light,
              },
            },
          }}
        >
          {regionNames.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox
                style={{ color: theme.palette.textColor.main }}
                checked={regions.indexOf(name) > -1}
              />
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Paper>
  );
}
