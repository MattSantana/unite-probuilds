import React from "react";
import Appbar from "../components/Appbar";

export default function About() {
  return (
    <div style={{ backgroundColor: "#0e1116", height:"100vh" }}>
      <Appbar hideSearch={true}/>
      <div style={{color:"white", textAlign: "center" }}>Santana, escreve aqui um pouco do projeto! Fala sobre tu, como vem ganhando seguidores nessa área e como quis aprender a programar.</div>
    </div>
  );
}
