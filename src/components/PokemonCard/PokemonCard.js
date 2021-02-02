// src/components/Pokemon.js
import React from "react";
import "./Pokemon.scss";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import shadows from "@material-ui/core/styles/shadows";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    padding: "24px",
    backgroundColor: "#FFB3B3",
    textTransform: "capitalize",
    textAlign: "center",
  },
  pokeId: {
    textAlign: "left",
  },
  media: {
    height: "70%",
    width: "70%",
    margin: "0 auto",
  },

  ul: {
    // maxWidth: "100%",
    margin: "0 auto",
    textAlign: "center",
  },
  li: {
    display: "inline-block",
  },
  typesText: {
    fontWeight: "bold",
    textShadow: "1px 1px #000",
  },
  types: {
    color: "white",
    border: "2px solid white",
    margin: "4px",
    padding: "4px 12px",
    minWidth: "fit-content",
    maxWidth: "fit-content",
    display: "inline-block",
    borderRadius: "25px",
  },
  normal: {
    backgroundColor: "#A8A77A",
  },

  fire: {
    backgroundColor: "#EE8130",
  },
  water: {
    backgroundColor: "#6390F0",
  },
  electric: {
    backgroundColor: "#F7D02C",
  },
  grass: {
    backgroundColor: "#7AC74C",
  },
  ice: {
    backgroundColor: "#96D9D6",
  },
  fighting: {
    backgroundColor: "#C22E28",
  },
  poison: {
    backgroundColor: "#A33EA1",
  },
  ground: {
    backgroundColor: "#E2BF65",
  },
  flying: {
    backgroundColor: "#A98FF3",
  },
  psychic: {
    backgroundColor: "#F95587",
  },
  bug: {
    backgroundColor: "#A6B91A",
  },
  rock: {
    backgroundColor: "#B6A136",
  },
  ghost: {
    backgroundColor: "#735797",
  },
  dragon: {
    backgroundColor: "#6F35FC",
  },
  dark: {
    backgroundColor: "#705746",
  },
  steel: {
    backgroundColor: "#B7B7CE",
  },
  fairy: {
    backgroundColor: "#D685AD",
  },
});

export default function PokemonCard(props) {
  const classes = useStyles();

  const { id, name, image, types } = props;

  const styleTypes = types.map((type) => {
    return type.type.name;
  });
  console.log("DD", styleTypes);
  return (
    <Card className={classes.root}>
      <Typography
        className={classes.pokeId}
        gutterBottom
        variant="h5"
        component="h2"
      >
        #{id}
      </Typography>
      <CardMedia
        className={classes.media}
        component="img"
        image={image}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>

        <List className={classes.ul}>
          <ListItem className={classes.li}>
            {types.map((type) => {
              return (
                <ListItemText
                  className={`${classes.types} ${
                    type.type.name === "normal"
                      ? classes.normal
                      : type.type.name === "fire"
                      ? classes.fire
                      : type.type.name === "water"
                      ? classes.water
                      : type.type.name === "electric"
                      ? classes.electric
                      : type.type.name === "grass"
                      ? classes.grass
                      : type.type.name === "ice"
                      ? classes.ice
                      : type.type.name === "fighting"
                      ? classes.fighting
                      : type.type.name === "poison"
                      ? classes.poison
                      : type.type.name === "ground"
                      ? classes.ground
                      : type.type.name === "flying"
                      ? classes.flying
                      : type.type.name === "psychic"
                      ? classes.psychic
                      : type.type.name === "bug"
                      ? classes.bug
                      : type.type.name === "rock"
                      ? classes.rock
                      : type.type.name === "ghost"
                      ? classes.ghost
                      : type.type.name === "dragon"
                      ? classes.dragon
                      : type.type.name === "dark"
                      ? classes.dark
                      : type.type.name === "steel"
                      ? classes.steel
                      : type.type.name === "fairy"
                      ? classes.fairy
                      : classes.types
                  }`}
                >
                  <Typography className={classes.typesText}>
                    {type.type.name}
                  </Typography>
                </ListItemText>
              );
            })}
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
