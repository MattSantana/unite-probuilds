import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Pokecard from "../assets/pokecardinfo.png";
import Stats from "./Stats/Stats";
import EvoLine from "../assets/evolutionline.png";

export default function CardInfo(props) {
  return (
    <Card sx={{ maxWidth: 420 }}>
      <CardActionArea>
        <CardMedia sx={{ backgroundColor: "#0e1116" }} component="img" height="400" img src={props.pokemonData.image} />
        <CardContent sx={{ backgroundColor: "#0e1116" }}>
          <Typography color="white" textAlign="center" gutterBottom variant="h5" component="div">
            {props.pokemonData.name}
          </Typography>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Stats text={props.pokemonData.typeOfDamage} />
            <Stats text={props.pokemonData.class} />
            <Stats text={props.pokemonData.pokemonStyleOfDamege} />
          </div>
          <Typography textAlign="center" variant="subtitle1" color="white">
            Linha Evolutiva
          </Typography>
          <img style={{ maxWidth: "30em", marginTop: "1em" }} src={props.pokemonData.evolutionImage} />
          <Typography textAlign="center" variant="subtitle1" color="white">
            Atributos
          </Typography>

          {props.pokemonData.status && props.pokemonData.status.map((status, key) => 
          <Stats key={key} text={status.type} rating={status.rating} fullwidth />)}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
