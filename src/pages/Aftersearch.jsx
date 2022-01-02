import React, { useEffect, useState } from "react";
import Appbar from "../components/Appbar";
import Container from "@mui/material/Container";
import CardSearch from "../components/CardSearch";
import Typography from "@mui/material/Typography";
import { useSearchParams } from "react-router-dom";


export default function Aftersearch() {
  return (
    <div>
      <div
        className="bgSearch"
        style={{
          height: "100vh",
          backgroundColor: "#0E1116",
        }}
      >
        <Appbar />
        <div>
          <Container
            sx={{
              height: "80vh",
            }}
          >
            <Typography sx={{ marginTop: "0.4em" }} variant="h3" textAlign="start" color="white">
              Resultados
            </Typography>

            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                marginTop: "3em",
                overflowX: "scroll",
              }}
            >
              <CardSearch
                titulo="Charizard Carry Jungle"
                subtitulo="Entenda a build para jogar com o Charizard como um carry da Jungle.
          Confeccionada pelo Head Coach da Guardiões Esports."
              />
              <CardSearch
                titulo="Charizard Bruiser Top lane"
                subtitulo="Entenda a build para jogar com o Charizard como um bruiser na top lane.
          Confeccionada pelo Head Coach da Guardiões Esports."
              />
              <CardSearch
                titulo="Charizard Carry Top lane"
                subtitulo="Entenda a build para jogar com o Charizard como um carry na top lane.
          Confeccionada pelo Head Coach da Guardiões Esports."
              />
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
