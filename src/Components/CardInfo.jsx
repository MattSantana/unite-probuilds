import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Pokecard from "../assets/pokecardinfo.png";
import "../assets/Logo.css";
import Stats from "./Stats";
import EvoLine from "../assets/evolutionline.png";


export default function CardInfo() {
  return (
    <Card sx={{ maxWidth: 420 }}>
      <CardActionArea>
        <CardMedia
          sx={{ backgroundColor: "#0e1116" }}
          component="img"
          height="400"
          img
          src={Pokecard}
        />
        <CardContent sx={{ backgroundColor: "#0e1116" }}>
          <Typography
            color="white"
            textAlign="center"
            gutterBottom
            variant="h5"
            component="div"
          >
            Charizard
          </Typography>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Stats />
            <Stats />
            <Stats />
          </div>
          <Typography textAlign='center' variant="subtitle1" color="white">
          Linha Evolutiva
          </Typography>
          <img style={{maxWidth:'30em', marginTop:'1em'}} src={EvoLine}/>
          <Typography textAlign='center' variant="subtitle1" color="white">
          Atributos
          </Typography>
          <Stats />
            <Stats />
            <Stats />
            <Stats />
            <Stats />
            <Stats />
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
