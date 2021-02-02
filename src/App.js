// src/App.js

// TO DO: create a state that adds the name of a selected box,
// use a filter methode that uses an include method,
// EXTRA POINTS to use .every method to only choose pokemon who have both types

import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import PokemonCard from "./components/PokemonCard/PokemonCard.js";
import Sidebar from "./components/Sidebar/Sidebar.js";
import "./App.scss";

function App() {
  const [pokemon, setPokemon] = useState([]);
  // const [pokeTypes, setPokeTypes] = useState([]);

  const apiURL = "https://pokeapi.co/api/v2/";

  const fetchPokemon = async () =>
    fetch(`${apiURL}pokemon/?limit=151`)
      .then((response) => response.json())
      .then((data) => {
        let results = data.results;
        let promisesArray = results.map((result) => {
          return fetch(result.url).then((response) => response.json());
        });
        return Promise.all(promisesArray);
      })
      .then(
        (data) => setPokemon(data),
        () => console.log("Pokemons", pokemon)
      );

  useEffect(() => {
    fetchPokemon();
  }, []);

  console.log("pokeMON", pokemon);

  const extractPokeTypes = pokemon.map((p) => {
    return p.types.map((p) => {
      return p.type.name;
    });
  });

  const flattenPokeTypes = extractPokeTypes.flat();

  const pokeSet = [...new Set(flattenPokeTypes)];
  console.log("POKETYPES", pokeSet);

  return (
    <div className="App">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Sidebar types={pokeSet} />
        </Grid>
        <Grid container={"true"} item xs={9} spacing={3}>
          {pokemon.map((p) => (
            <Grid item xs={4}>
              <PokemonCard
                id={p.id}
                name={p.name}
                abilities={p.abilities}
                image={p.sprites.front_default}
                types={p.types}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
