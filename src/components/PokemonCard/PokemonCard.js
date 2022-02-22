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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: "#FFB3B3"
  },
  media: {
    height: '100%',
    width: '100%',
  },
});

export default function PokemonCard(props) {
  const classes = useStyles();

  const { id, name, image, types } = props;

  return (
      <Card className={classes.root}>
      <Typography gutterBottom variant="h5" component="h2">
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

        <List>
          <ListItem>
            {types.map((type) => {
              return <ListItemText>{type.type.name}</ListItemText>;
            })}
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
