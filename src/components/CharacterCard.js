import React from "react";



export default function CharacterCard({
  char
}) {
  const { name, image, gender, species } = char;
  return (
    <div>
      <img src={image}></img>
      <h1>{name}</h1>
      <h2>Gender: {gender}</h2>
      <h3>Species: {species}</h3>
    </div>
  )
}
