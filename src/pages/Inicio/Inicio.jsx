import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Appbar from "../../components/Appbar";
import Typography from "@mui/material/Typography";
import Logo from '../img/UNITE2.png';
import imgWallpaper from "../img/Paper.png";
import '../img/Wallpaper.css';


export default function Inicio() {
  return (
    
    <div  className='Wallpaper' style={{ backgroundColor: "#0e1116", height: "100vh"}}>
      <Appbar hideSearch={true}/>
     
      
      <Container
        sx={{
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        maxWidth="xs"
      >
        <img style={{ marginBottom: "0.5em", marginRight:'0.5em' }} src={Logo} />

        <TextField
          className="Textfield"
          id="standard-basic"
          label="Pesquise pelas Builds de seu Pokémon"
          variant="standard"
          fullWidth
        />
      </Container>

    </div>
  
  );
}
