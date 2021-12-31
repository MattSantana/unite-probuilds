import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Lizard from "../assets/lizard.jpg";
import "../assets/Logo.css";
import Circles from "./Circles";
import Squares from "./Squares";

export default function CardBuild() {
  return (
    <Card sx={{ maxWidth: 700 }}>
      <CardActionArea>
        <CardMedia component="img" height="200" img src={Lizard} />

        <CardContent sx={{ backgroundColor: "#fe8b25" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <Squares />
              <Squares />
              <Squares />
              <Squares />
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Circles />
              <Circles />
              <Circles />
              <Circles />
            </div>
          </div>

          <Typography color="#0e1116" gutterBottom variant="h5" component="div">
            Charizard: Carry jungle
          </Typography>
          <Typography variant="body2" color="#0e1116">
            ESTOU COMENDO O CU DE QUEM ESTÁ LENDO. O PAI É BOM DEMAIS
            CARALHO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ESTOU COMENDO O CU DE QUEM ESTÁ LENDO. O PAI É BOM DEMAIS
            CARALHO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ESTOU COMENDO O CU DE QUEM ESTÁ LENDO. O PAI É BOM DEMAIS
            CARALHO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ESTOU COMENDO O CU DE QUEM ESTÁ LENDO. O PAI É BOM DEMAIS
            CARALHO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ESTOU COMENDO O CU DE QUEM ESTÁ LENDO. O PAI É BOM DEMAIS
            CARALHO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ESTOU COMENDO O CU DE QUEM ESTÁ LENDO. O PAI É BOM DEMAIS
            CARALHO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ESTOU COMENDO O CU DE QUEM ESTÁ LENDO. O PAI É BOM DEMAIS
            CARALHO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ESTOU COMENDO O CU DE QUEM ESTÁ LENDO. O PAI É BOM DEMAIS
            CARALHO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ESTOU COMENDO O CU DE QUEM ESTÁ LENDO. O PAI É BOM DEMAIS
            CARALHO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ESTOU COMENDO O CU DE QUEM ESTÁ LENDO. O PAI É BOM DEMAIS
            CARALHO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ESTOU COMENDO O CU DE QUEM ESTÁ LENDO. O PAI É BOM DEMAIS
            CARALHO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ESTOU COMENDO O CU DE QUEM ESTÁ LENDO. O PAI É BOM DEMAIS
            CARALHO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ESTOU COMENDO O CU DE QUEM ESTÁ LENDO. O PAI É BOM DEMAIS
            CARALHO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ESTOU COMENDO O CU DE QUEM ESTÁ LENDO. O PAI É BOM DEMAIS
            CARALHO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ESTOU COMENDO O CU DE QUEM ESTÁ LENDO. O PAI É BOM DEMAIS
            CARALHO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ESTOU COMENDO O CU DE QUEM ESTÁ LENDO. O PAI É BOM DEMAIS
            CARALHO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ESTOU COMENDO O CU DE QUEM ESTÁ LENDO. O PAI É BOM DEMAIS
            
         
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
