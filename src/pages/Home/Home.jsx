import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Appbar from "../../components/Appbar";
import Logo from "../../assets/UNITE2.png";
import "../../assets/Wallpaper.css";
import { useNavigate } from 'react-router-dom';

export default function Inicio() {
  const navigate = useNavigate();

  const keyHandler = (e) => {
    //Esse keycode == 13 é se a tecla apertado do teclado é a de enter!
    if(e.keyCode == 13){
      navigate(`/pokemon?nome=${e.target.value}`);
   }
  }

  return (
    <div className="Wallpaper" style={{ backgroundColor: "#0e1116", height: "100vh" }}>
      <Appbar hideSearch={true} />

      <Container
        sx={{
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        maxWidth="xs"
      >
        <img style={{ marginBottom: "0.5em", marginRight: "0.5em" }} src={Logo} />

        <TextField
          inputProps={{ style: { color: "white" } }}
          InputLabelProps={{ style: { color: "white" } }}
          style={{ borderBottom: "1px solid white", marginTop:"1em" }}
          id="standard-basic"
          label={`Pesquise pelo seu Pokémon`}
          onKeyDown={keyHandler}
          fullWidth
        />
      </Container>
    </div>
  );
}
