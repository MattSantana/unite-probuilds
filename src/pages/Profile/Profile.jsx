import React, { useEffect, useState } from "react";
import Appbar from "../../components/Appbar";
import CardBuild from "../../components/CardBuild/CardBuild";
import Container from "@mui/material/Container";
import CardPokemonProfile from "../../components/CardPokemonProfile";
import { useSearchParams } from "react-router-dom";
import allPokemons from "../../mockup/pokemons.json";
import { Typography } from "@mui/material";

export default function Afterclick() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    const searchPokemon = searchParams.get("nome");

    const filtered = allPokemons.filter((pokemon) => pokemon.name === searchPokemon);

    setPokemonData(filtered[0]);
  }, []);

  return (
    <div style={{ backgroundColor: "#0E1116" }}>
      <Appbar />
      {pokemonData ? (
        <div
          style={{
            height: "auto",
            backgroundColor: "#0E1116",
            display: "flex",
            alignItems: "center",
            marginLeft: "3em",
            marginTop: "4em",
          }}
        >
          <Container>
            <CardPokemonProfile pokemonData={pokemonData} />
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
            {pokemonData.builds &&
              pokemonData.builds.map((build, key) => (
                <div key={key}>
                  <CardBuild build={build} />
                </div>
              ))}
          </Container>
        </div>
      ) : (
        <div style={{ paddingTop: "1em", backgroundColor: "#0E1116", height: "100vh" }}>
          <Typography variant="h1" style={{ marginTop: "1em", color: "white" }} align="center">
            Pokémon não encontrado!
          </Typography>
          <Typography variant="h3" style={{ color: "#f28524" }} align="center">
            Parece que este Pokémon não existe ou ainda não o cadastramos em nossa base de dados.
          </Typography>
        </div>
      )}
    </div>
  );
}
