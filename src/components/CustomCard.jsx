import React from "react";
import { useHistory } from "react-router-dom";
import { Card, CardContent, CardMedia, CardActionArea } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    background: theme.palette.primary.light,
    height: 350,
  },
  cardActionArea: {
    height: "100%",
  },
  cardImage: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 150,
  },
  countryTitle: {
    fontSize: "1.2rem",
    margin: "20px 10px",
  },
  details: {
    fontSize: "1rem",
    margin: "5px 10px",
  },
  value: {
    marginLeft: 5,
  },
}));

export default function CustomCard({ country }) {
  const classes = useStyles();

  const history = useHistory();

  return (
    <Card
      elevation={0}
      className={classes.card}
      onClick={() => history.push(`/${country.name.common}`)}
    >
      <CardActionArea className={classes.cardActionArea}>
        <CardMedia
          className={classes.cardImage}
          component="img"
          image={country.flags.svg}
          alt={country.name.common}
        />
        <CardContent style={{ marginTop: 110 }}>
          <h1 className={classes.countryTitle}>{country.name.common}</h1>
          <div className={classes.details}>
            <strong className={classes.key}>Population:</strong>
            <span className={classes.value}>{country.population}</span>
          </div>
          <div className={classes.details}>
            <strong className={classes.key}>Region:</strong>
            <span className={classes.value}>{country.region}</span>
          </div>
          <div className={classes.details}>
            <strong className={classes.key}>Capital:</strong>
            <span className={classes.value}>
              {country.capital ? country.capital[0] : <em>none</em>}
            </span>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
