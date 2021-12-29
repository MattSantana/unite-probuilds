import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from './pages/Inicio/Inicio.jsx'
import AfterSearch from './pages/AfterSearch/Aftersearch.jsx';
import AfterClick from './pages/AfterClick/Afterclick.jsx'

export default function Navgation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element = {<Inicio/>} />
        <Route exact path="/pesquisa" element ={<AfterSearch/>} />
        <Route exact path="/nome-do-pokemon" element = {<AfterClick/>} /> 
      </Routes>
    </BrowserRouter>
  );
};

