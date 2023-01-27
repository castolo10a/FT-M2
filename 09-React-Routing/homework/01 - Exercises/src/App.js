import React from "react";
/* eslint-disable */
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Shipping from "./components/Shipping/Shipping";
import Promotions from "./components/Promotions/Promotions";
import CardDetail from "./components/CardDetail/CardDetail";
import { Route, Routes } from "react-router-dom";
/* eslint-disable */

export default function App() {
  return (
    <>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shipping" element={<Shipping />}></Route>
          <Route path="/promotions" element={<Promotions />}></Route>
          <Route path="/cruises/:id" element={<CardDetail />}></Route>
        </Routes>
    </>
  );
}
