import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Style for Character component
const StyledCharacter = styled.div`
  background: rgb(230, 230, 230);
  width: 250px;
  margin: 10% 8% 0 8%;
  padding: 5% 0 10% 0;
  border-radius: 5%;
  box-shadow: 0 0 15px white;
`;

// Write your Character component here

export default function Character(props) {
  const { name, url } = props;
  const [character, setCharacter] = useState({});
  const [frontImg, setFrontImg] = useState("");
  const [backImg, setBackImg] = useState("");




useEffect(() => {
    if (name) {
        axios
          .get(`https://pokeapi.co/api/v2/pokemon-form/${name}/`)
          .then((res) => {
            setFrontImg(res.data.sprites.front_default);
            setBackImg(res.data.sprites.back_default);
          })
          .catch((err) => {
            debugger;
          });
    
          axios
          .get(url)
          .then((res) => {
            console.log(res.data);
            setCharacter(res.data);
          })
          .catch((err) => {
            debugger;
          });
      }

},[]) 


  return (
    <StyledCharacter className="container">
      <h2>{name && `${name.charAt(0).toUpperCase()}${name.slice(1)}`}</h2>
      <img src={frontImg} />
      <img src={backImg} />
      <h4>Height: {character.height}</h4>
      <h4>Weight: {character.weight}</h4>
    </StyledCharacter>
  );
}
