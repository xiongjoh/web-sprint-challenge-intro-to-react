import React, { useState, useEffect } from "react";
import "./App.css";
import Character from "./components/Character";
import axios from "axios";
import styled from "styled-components";

// Style for App
const StyledPokemonContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characterList, setCharacterList] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=5&offset=1")
      .then((res) => {
        // console.log(res.data.results.forEach(name => console.log(name)))
        res.data.results.forEach((pokemon) => {
          setCharacterList((array) => [...array, pokemon]);
        });
      })
      .catch((res) => {
        debugger;
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Pokemon</h1>
      <StyledPokemonContainer>
        {characterList &&
          characterList.map((character) => (
            <Character key={character.name} name={character.name} url={character.url} />
          ))}
      </StyledPokemonContainer>
    </div>
  );
};

export default App;
