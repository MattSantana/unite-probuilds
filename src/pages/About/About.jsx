import { Grid } from "@mui/material";
import React from "react";
import Appbar from "../../components/Appbar";

export default function About() {
  return (
    <>
      <Appbar hideSearch={true} />
      <div style={{ backgroundColor: "#0e1116", height: "100vh" }}>
        <Container xs={{display: 'flex',flexDirection:'Cloumn', justifycontent:'center', height: "100vh", marginTop: "10em" }}>
        
          <img src={Logo} height="200em" style={{marginTop:'0.8em', display:'flex' }} />      


          <Typography color= 'white' variant="body1" component="body1">
            O UNITE Probuilds é um projeto idealizado por Matheus "Matt"
            Santana, visando o desenvolvimento do cenário competitivo de Pokémon
            UNITE, o moba de Pokémon disponível para Mobile e Nintendo Switch,
            que teve um grande sucesso no 2021 e vem buscando a sua
            solidificação em 2022. 
          </Typography>

          <Typography color= 'white' variant="body1" component="body1">
           Matheus Santana: "Tenho atuado como criador
            de conteúdo na comunidade de Pokémon UNITE a um ano e meio, onde eu
            e colaboradores desenvolvemos principalmente artigos em meu Blog,
            visando auxiliar jogadores novos e veteranos do cenário. Além disso,
            também tomei a iniciativa de criar alguns espaços para o engajamento
            da comunidade, principalmente no Discord e no Twitter, onde
            inclusive ultrapassamos o número de 10 mil seguidores no ano de
            2021. Através dessa minha paixão pelo game, e pela área de
            tecnologias, iniciei meus estudos na área de programação e idealizei
            o projeto "UNITE Probuilds, que ajudará jogadores comuns a terem
            material para estudar e aprender com o conhecimento dos melhores
            jogadores do cenário competitivo de Pokémon UNITE, que poderão
            disponibilizar no aplicativo, suas dicas de itemizações e o porque
            de acharem que aquela é a melhor escolha."
            </Typography>

        </Container>
      </div>
    </>
  );
}

/*
<div style={{ backgroundColor: "#0e1116", height:"100vh" }}>
      
      <div style={{color:"white", textAlign: "center" }}> O UNITE Probuilds é um projeto idealizado por Matheus "Matt" Santana, visando o desenvolvimento do cenário competitivo de Pokémon UNITE, o moba de Pokémon disponível para Mobile e Nintendo Switch, que teve um grande sucesso no 2021 e vem buscando a sua solidificação em 2022.
      Matheus Santana: "Tenho atuado como criador de conteúdo na comunidade de Pokémon UNITE a um ano e meio, onde eu e colaboradores desenvolvemos principalmente artigos em meu Blog, visando auxiliar jogadores novos e veteranos do cenário. Além disso, também tomei a iniciativa de criar alguns espaços para o engajamento da comunidade, principalmente no Discord e no Twitter, onde inclusive ultrapassamos o número de 10 mil seguidores no ano de 2021. Através dessa minha paixão pelo game, e pela área de tecnologias, iniciei meus estudos na área de programação e idealizei o projeto "UNITE Probuilds, que ajudará jogadores comuns a terem material  para estudar e aprender com o conhecimento dos melhores jogadores do cenário competitivo de Pokémon UNITE, que poderão disponibilizar no aplicativo, suas dicas de itemizações e o porque de acharem que aquela é a melhor escolha." 
      </div>
    </div>
*/