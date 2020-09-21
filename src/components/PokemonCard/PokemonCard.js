// src/components/Pokemon.js
import React from "react";
import "./Pokemon.scss"
import Bulb from "../../img/bulbasaur.png"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function PokemonCard(props) {
  const classes = useStyles();
 
  return (
    // <div className="card Pokemon shadow-sm mb-4">
    //   <div class="card-body pb-0">
    //     <h5 class="card-title">{props.name}</h5>
    //     <h6 class="card-subtitle mb-3 text-primary">
    //       {props.awesome ? "An awesome Pokemon" : "Not awesome"}
    //     </h6>
    //     <p className="mb-0">
    //       Weight: {props.weight} kg
    //       <br />
    //       Terrifying: {props.terrifying ? "Very" : "nah, lovable"}
    //       <br />
    //       {props.abilities.length} abilities
    //     </p>
    //   </div>
    //   <ul className="list-group list-group-flush">
    //     {props.abilities.map(ability => {
    //       return <li className="list-group-item">{ability}</li>;
    //     })}
    //   </ul>
    // </div>
    <Card className={classes.root}>
    
      <CardMedia
        className={classes.media}
        component="img"
        image={Bulb}
        title="Bulbasaur"
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
          #1
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
          {props.name}
        </Typography>
        
        <List>
          <ListItem>
          {props.abilities.map(ability => {
           return (
            <ListItemText>
              {ability}
            </ListItemText>
           )})}
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ListItemText>
              type
            </ListItemText>
          </ListItem>
        </List>
      </CardContent>
  </Card>
  );
}