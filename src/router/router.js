import React from "react";
import { Route, Routes } from "react-router-dom";

import KMS from "../pages/KMS/KMS";
import Converter from "../pages/TransformaLetras/Conversor";
import Home from "../pages/Home/index";
import ToDo from "../pages/ToDo/ToDo";

export default function MainRoutes() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<KMS />} path="/kms" />
      <Route element={<Converter />} path="/converter" />
      <Route element={<ToDo />} path="/todo" />
    </Routes>
  );
}
