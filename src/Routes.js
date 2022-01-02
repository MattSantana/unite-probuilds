import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home.jsx'
import AfterSearch from './pages/Aftersearch.jsx';
import Profile from './pages/Profile.jsx'
import About from './pages/About.jsx'

export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element = {<Home/>} />
        <Route exact path="/sobre" element = {<About/>} /> 
        <Route exact path="/pesquisa" element ={<AfterSearch/>} />
        <Route exact path="/pokemon" element = {<Profile/>} /> 
      </Routes>
    </BrowserRouter>
  );
};

