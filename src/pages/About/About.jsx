import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Appbar from "../../components/Appbar";
import Logo from "../../assets/UNITE2.png";
import Matt from "../../assets/matt.png";


export default function About() {
  return (
    <div style={{ backgroundColor: "#0e1116", height: "auto" }}>
      <Appbar hideSearch={true} />

      <div
        style={{
          marginTop: "4em",
          display: "flex",
          width: "130vh",
          flexDirection: "column",
          alignItems: "center",
          marginLeft: "16em",
        }}
      >
        <Typography
          marginTop="0.2em"
          color="white"
          variant="h2"
          component="h2"
          fontSize="5em"
          align="center"
          marginRight={"1em"}
        >
          Sobre o Projeto
        </Typography>

        <img width={"400em"} src={Logo} />

        <Typography
          color="white"
          variant="body1"
          component="body1"
          marginTop={"1em"}
        >
          O UNITE Probuilds é um projeto idealizado por Matheus "Matt" Santana,
          visando o desenvolvimento do cenário competitivo de Pokémon UNITE, o
          moba de Pokémon disponível para Mobile e Nintendo Switch, que teve um
          grande sucesso no 2021 e vem buscando a sua solidificação em 2022.
        </Typography>
        <Typography color="white" t variant="h2" component="h2" fontSize="4em" style={{ marginTop: "0.5em" }}>
          Idealizador
        </Typography>
        <img width={"250em"} src={Matt} />
        <Typography
          color="white"
          variant="body1"
          component="body1"
          style={{ marginTop: "1em" }}
        >
          Matheus Santana: 
          "Tenho atuado como criador de conteúdo na comunidade
          de Pokémon UNITE a um ano e meio, onde eu e colaboradores
          desenvolvemos principalmente artigos em meu Blog, visando auxiliar
          jogadores novos e veteranos do cenário. Além disso, também tomei a
          iniciativa de criar alguns espaços para o engajamento da comunidade,
          principalmente no Discord e no Twitter, onde inclusive ultrapassamos o
          número de 10 mil seguidores no ano de 2021. Através dessa minha paixão
          pelo game, e pela área de tecnologias, iniciei meus estudos na área de
          programação e idealizei o projeto "UNITE Probuilds, que ajudará
          jogadores comuns a terem material para estudar e aprender com o
          conhecimento dos melhores jogadores do cenário competitivo de Pokémon
          UNITE, que poderão disponibilizar no aplicativo, suas dicas de
          itemizações e o porque de acharem que aquela é a melhor escolha.".
        </Typography>
      </div>
    </div>
  );
}
