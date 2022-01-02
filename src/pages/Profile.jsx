import React, { useEffect, useState } from "react";
import Appbar from "../components/Appbar";
import CardBuild from "../components/CardBuild";
import Container from "@mui/material/Container";
import Cardinfo from "../components/CardInfo";
import { useSearchParams } from "react-router-dom";
import allPokemons from "../mockup/pokemons.json";
import CardSearch from "../components/CardSearch";

export default function Afterclick() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    const searchPokemon = searchParams.get("nome");

    const filtered = allPokemons.filter((pokemon) => pokemon.name === searchPokemon);

    setPokemonData(filtered[0]);
  }, []);

  return (
    <div style={{ height: "auto", backgroundColor: "#0E1116" }}>
      <Appbar />
      {pokemonData.name ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "3em",
          }}
        >
          <Container
            sx={{
              marginTop: "4em",
            }}
          >
            <Cardinfo pokemonData={pokemonData} />
          </Container>

          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100vh",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "4em",
              marginBottom: "10em",
            }}
          >
            <CardBuild pokemonData={pokemonData} />
            <br />
            <CardSearch
              titulo="Charizard Carry Jungle"
              subtitulo="Entenda a build para jogar com o Charizard como um carry da Jungle.
          Confeccionada pelo Head Coach da Guardiões Esports."
            />
          </Container>
        </div>
      ) : (
        <div>
          <h1>Pokemon não encontrado</h1>
        </div>
      )}
    </div>
  );
}
