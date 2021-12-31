import React from "react";
import Appbar from "../../components/Appbar";
import CardBuild from "../../components/CardBuild";
import Container from "@mui/material/Container";
import Cardinfo from "../../components/CardInfo";

export default function Afterclick() {
  return (
    <div style={{ height: "auto", backgroundColor: "#0E1116" }}>
      <Appbar />
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
          <Cardinfo />
        </Container>

        <Container
          sx={{
            display: "flex",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
            marginRight:'4em',
            marginBottom:'10em'
          }}
        >
          <CardBuild />
        </Container>
      </div>
    </div>
  );
}
