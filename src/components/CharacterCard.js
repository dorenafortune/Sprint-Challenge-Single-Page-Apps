import React from "react";
import CharacterList from "./CharacterList"

export default function CharacterCard({
  char
}) { 
  const { name, image, gender, species } = char;
  return ( 
    <div>
    <img src = {image}></img>
    <h1>{name}</h1>
    <h2>{gender}</h2>
    <h3>{species}</h3>
    </div>
  )}
