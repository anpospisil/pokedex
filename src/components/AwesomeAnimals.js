import React from "react";

export default function AwesomeAnimals() {

  const animals = ["Chicken", "Sloth", "Porcupine", "Killer whale", "Velociraptor"];

  return (
    <div>
      {animals.map(
        (animal, number) => {
          return <p>Awesomeness level {number+1}: {animal}</p>
        }
      )}
      
    </div>

  )
  }
