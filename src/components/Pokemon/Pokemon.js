// src/components/Pokemon.js
import React from "react";
import "./Pokemon.scss"

export default function Pokemon(props) {
  return (
    <div className="card Pokemon shadow-sm mb-4">
      <div class="card-body pb-0">
        <h5 class="card-title">{props.name}</h5>
        <h6 class="card-subtitle mb-3 text-primary">
          {props.awesome ? "An awesome Pokemon" : "Not awesome"}
        </h6>
        <p className="mb-0">
          Weight: {props.weight} kg
          <br />
          Terrifying: {props.terrifying ? "Very" : "nah, lovable"}
          <br />
          {props.abilities.length} abilities
        </p>
      </div>
      <ul className="list-group list-group-flush">
        {props.abilities.map(ability => {
          return <li className="list-group-item">{ability}</li>;
        })}
      </ul>
    </div>
  );
}