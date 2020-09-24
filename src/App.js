// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Pokemon from "./components/PokemonCard/PokemonCard.js";
import Sidebar from "./components/Sidebar/Sidebar.js";

const all_pokemon = [
  {
    name: "Charizard",
    weight: 90,
    awesome: true,
    terrifying: false,
    abilities: ["Blaze", "Solar power", "Tough claws", "Drought"],
  },
  {
    name: "Bulbasaur",
    weight: 6.9,
    awesome: true,
    terrifying: false,
    abilities: ["Overgrow", "Chlorophyll"],
  },
  {
    name: "Mewtwo",
    weight: 122,
    awesome: true,
    terrifying: true,
    abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"],
  },
  {
    name: "Mega beedrill",
    weight: 65,
    awesome: false,
    terrifying: true,
    abilities: ["Intimidate", "Unnerve"],
  },
];

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [pokeTypes, setPokeTypes] = useState([]);

  const apiURL = "https://pokeapi.co/api/v2/";

  const fetchKantoPokemon = async () => {
    const res = await axios.get(`${apiURL}pokemon?limit=151`);
    const allpokemon = res.data;
    allpokemon.results.forEach(function (pokemon) {
      fetchPokemonData(pokemon);
    });
  };

  async function fetchPokemonData(pokemon) {
    let url = pokemon.url;
    const res = await axios.get(url);

    const pokeData = res.data;

    setPokemon(pokeData);
  }

  async function fetchPokemonTypes() {
    const res = await axios.get(`${apiURL}type/`);
    const data = res.data.results;

    setPokeTypes(data);
  }
  useEffect(() => {
    fetchPokemonTypes();
  }, []);

  console.log("pokeTypes", pokeTypes);

  return (
    <div className="App">
      <Grid container  spacing={3}>
        <Grid item xs={3}>
          <Sidebar types={pokeTypes} />
        </Grid>
        <Grid container={'true'} item xs={9} spacing={3}>
          {all_pokemon.map((pokemon) => (
            <Grid item xs={4}>
              <Pokemon
                name={pokemon.name}
                weight={pokemon.weight}
                abilities={pokemon.abilities}
              />
        </Grid>
         ))}
         </Grid>
      </Grid>
    </div>
  );
}

export default App;
