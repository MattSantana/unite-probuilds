import React, { useEffect, useState } from "react";
import Appbar from "../../components/Appbar";
import CardBuild from "../../components/CardBuild/CardBuild";
import Container from "@mui/material/Container";
import CardPokemonProfile from "../../components/CardPokemonProfile";
import { useSearchParams } from "react-router-dom";
import allPokemons from "../../mockup/pokemons.json";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

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
        <Container maxWidth="xg" style={{ marginTop: "5em" }}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <CardPokemonProfile pokemonData={pokemonData} />
            </Grid>

            <Grid item xs={12} sm={5}>
              {pokemonData.builds &&
                pokemonData.builds.map((build, key) => (
                  <div key={key} style={{ display: "flex", justifyContent: "flex-end" }}>
                    <CardBuild build={build} />
                  </div>
                ))}
            </Grid>
          </Grid>
        </Container>
      ) : (
        <div style={{ paddingTop: "1em", backgroundColor: "#0E1116", height: "100vh" }}>
          <Container maxWidth="lg">
            <Typography variant="h2" style={{ marginTop: "1em", color: "white" }} align="center">
              Pokémon não encontrado!
            </Typography>
            <Typography variant="h4" style={{ color: "#f28524" }} align="center">
              Parece que este Pokémon não existe ou ainda não o cadastramos em nossa base de dados.
            </Typography>
          </Container>
        </div>
      )}
    </div>
  );
}
